<template>
<div class="map-wrap">
    <div id="map"></div>
    <div id="legend" class="legend">
        <h4>{{legendTitle}}</h4>
        <table>
            <tr v-for="stop in stops"><td><span v-bind:style="{ backgroundColor: stop.color }"></span></td><td>{{ stop.stop }}</td><td>&nbsp;-&nbsp;</td><td>{{ stop.stop + increment - 1 }}</td></tr>
        </table>
    </div>
</div>

</template>

<script>
// import libraries
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

// config
import config from '../app.config';
// vuex store
import store from '../store';

import mapColors from '../mapColors';

const debounce = require('lodash.debounce'); // so we're not pegging on the setMapPropertiesMinMax() method.

export default {
    name: 'map-viz',
    data() {
        return {
            map: {},
            layers: config.map.dataLayers,
            stops: [],
            increment: undefined,
            legendTitle: 'Legend',
        };
    },
    mounted() {
        // debouncing these functions allows us to make sure we don't hammer the methods too
        // frequently.
        const debouncedMapProperties = debounce(this.setMapPropertiesMinMax, 300);
        const debouncedMoveEnd = debounce(() => {
            const zoom = this.map.getZoom();
            const bounds = this.map.getBounds();
            const bearing = this.map.getBearing();
            const pitch = this.map.getPitch();
            store.commit('changeMapView', {
                zoom,
                bounds,
                bearing,
                pitch,
            });
        }, 300);

        mapboxgl.accessToken = config.mapboxgl.accessToken;
        this.map = new mapboxgl.Map({
            container: 'map',
            style: config.mapboxgl.baseStyle,
            center: config.map.center,
            zoom: config.map.zoom,
        });

        this.map.on('style.load', () => {
            // apply default colors
//            this.updateColors(this.colorField);
            // centralize the map object in the store
            store.commit('setMap', this.map);
            // initialize the data for view information.
            debouncedMapProperties();
        });
        this.map.on('load', () => {
            debouncedMapProperties();
        });
        // track map view in the store
        this.map.on('moveend', () => {
            debouncedMapProperties();
            debouncedMoveEnd();
        });
        this.map.on('mousemove', (e) => {
            store.state.map.queryRenderedFeatures(e.point, {
                layers: config.map.dataLayers,
            }).forEach((f) => {
                console.log(f.layer);
            });
        });
    },
    computed: {
        colorField() {
            return store.state.mapColorField;
        },
    },
    methods: {
        updateColors(val) {
            const paintProperty = mapColors[val].paintProperty();
            this.layers.forEach((layer) => {
                this.map.setPaintProperty(layer, 'fill-color', paintProperty);
            });
        },
        setMapPropertiesMinMax() {
            // create a list of properties and their min/max values.
            const minmax = {}; // for annoying eslint rules.
            const valueBuckets = {};
            const stops = {};

            // assume the colorField is the only one we want to figure out right now.

            Object.keys(mapColors).forEach((key) => {
                minmax[key] = { min: undefined, max: undefined };
                valueBuckets[key] = [];
                const paintProperty = mapColors[key].paintProperty();
                stops[key] = paintProperty.stops;
            });

            const tr = this.map.project(this.map.getBounds().getNorthEast());
            const bl = this.map.project(this.map.getBounds().getSouthWest());

            // for each rendered feature combine all statistics into certain stats
            this.map.queryRenderedFeatures(
                [tr, bl],
                { layers: config.map.dataLayers }).forEach((feature) => {
                    Object.keys(mapColors).forEach((key) => {
                        valueBuckets[key].push(feature.properties[key]);
                        if (minmax[key].min === undefined
                            || minmax[key].min > feature.properties[key]) {
                            minmax[key].min = feature.properties[key];
                        }
                        if (minmax[key].max === undefined
                            || minmax[key].max < feature.properties[key]) {
                            minmax[key].max = feature.properties[key];
                        }
                    });
                });
            // temp is used for the current stops information for the legend.
            const temp = [];

            // calculate the steps for coloring the map.
            Object.keys(mapColors).forEach((key) => {
                const count = stops[key].length;
                const incr = Math.ceil((minmax[key].max - minmax[key].min) / count);
                for (let i = 0; i < count; i += 1) {
                    stops[key][i] = [Math.floor(minmax[key].min + (incr * i)), stops[key][i][1]];
                    if (key === this.colorField) {
                        // bloody legend! too right!
                        // here is where the legend information is compiled,
                        // including the increment value
                        temp.push({
                            stop: Math.floor(minmax[key].min + (incr * i)),
                            color: stops[key][i][1],
                        });
                        this.increment = incr;
                    }
                }
            });
            // store the current stops in Vue data so we can dynamically update the Legend.
            this.stops = temp;

            // set the paint property as per our generated stops.
            this.layers.forEach((layer) => {
                this.map.setPaintProperty(layer, 'fill-color', { property: this.colorField, stops: stops[this.colorField] });
            });

            store.commit('setCurrentViewValues', { extrema: minmax, all: valueBuckets });
        },
    },
    watch: {
        colorField(val) {
            this.updateColors(val);
        },
    },
};
</script>

<style lang="scss">
// import mapboxgl css
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
    height: 55vh;
}
</style>
