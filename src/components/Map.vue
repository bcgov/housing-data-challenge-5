<template>
<div class="map-wrap">
    <div id="map"></div>
    <div id="legend" class="legend">
        <h4>{{legendTitle}}</h4>
        <table>
            <tr v-for="stop in stops"><td><span v-bind:style="{ backgroundColor: stop.color }"></span></td><td>{{ stop.stop }}</td><td>&nbsp;-&nbsp;</td><td>{{ stop.stop + increment - 1 }}</td></tr>
        </table>
    </div>
    <div class="feature-info" v-bind:style="{ top: featureInfo.top, left: featureInfo.left }">{{ featureInfo.text }}</div>
</div>

</template>

<script>
// import libraries
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import * as d3 from 'd3';

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
            featureInfo: {
                top: '10px',
                left: '10px',
                text: 'Click or tap on an area to see its value.',
            },
        };
    },
    mounted() {
        // debouncing these functions allows us to make sure we don't hammer the methods too
        // frequently.
        const debouncedMapProperties = debounce(this.setCurrentValues, 300);
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

        //
        this.map.on('load', () => {
            // centralize the map object in the store
            store.commit('setMap', this.map);

            // @TODO: TEMP
            window.map = this.map;

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

        // you can access the geometry of the feature in f.geometry
        // however, currently I can only find information about adding
        // geometry by adding an entirely new layer :O that's very
        // expensive so it's not really worth it.

        const showFeatureInfo = (e) => {
            store.state.map.queryRenderedFeatures(e.point, {
                layers: config.map.dataLayers,
            }).forEach((f) => {
                const featureId = `${f.id}`;
                if (store.state.currentFeature !== featureId) {
                    store.commit('setCurrentFeature', featureId);
                    if (f.properties[this.colorField]) {
                        this.featureInfo.text = f.properties[this.colorField];
                    }
                    // have the blurb say something interesting about the
                    // feature
                }
            });
        };
        this.map.on('click', showFeatureInfo);
        this.map.on('tap', showFeatureInfo);
    },
    computed: {
        colorField() {
            return store.state.mapColorField;
        },
        enabledFilters() {
            return store.state.enabledFilters;
        },
    },
    methods: {
        updateColors(val) {
            const paintProperty = mapColors[val].paintProperty();
            this.layers.forEach((layer) => {
                this.map.setPaintProperty(layer, 'fill-color', paintProperty);
            });
        },
        setCurrentValues() {
            // wait if the map isn't ready yet
            if (this.$store.state.map !== this.map) {
                return;
            }

            // create a list of properties and their min/max values.
            const minmax = {};
            const valueBuckets = {};
            const stops = {};

            // collect values for the filtered fields and the map color field
            const dataFields = this.enabledFilters.map(f => f.config.field);
            dataFields.push(this.colorField);


            Object.keys(mapColors).forEach((key) => {
                minmax[key] = { min: undefined, max: undefined };
                const paintProperty = mapColors[key].paintProperty();
                stops[key] = paintProperty.stops;
            });

            // query within viewport bounding box
            const mapBounds = this.map.getBounds();
            const tr = this.map.project(mapBounds.getNorthEast());
            const bl = this.map.project(mapBounds.getSouthWest());

            // for each rendered feature combine all statistics into certain stats
            this.map.queryRenderedFeatures(
                [tr, bl],
                { layers: this.layers }).forEach((feature) => {
                    dataFields.forEach((key) => {
                        if (typeof valueBuckets[key] === 'undefined') {
                            valueBuckets[key] = [];
                        }
                        if (typeof feature.properties[key] !== 'undefined') {
                            valueBuckets[key].push(feature.properties[key]);
                        }
                    });
                });
            // temp is used for the current stops information for the legend.
            const temp = [];

            // set minmax with d3
            minmax[this.colorField].min = d3.min(valueBuckets[this.colorField]);
            minmax[this.colorField].max = d3.max(valueBuckets[this.colorField]);

            // calculate the steps for coloring the map.
            Object.keys(mapColors).forEach((key) => {
                const count = stops[key].length;
                const incr = Math.ceil((minmax[key].max - minmax[key].min) / count);
                for (let i = 0; i < count; i += 1) {
                    stops[key][i] = [Math.floor(minmax[key].min + (incr * i)), stops[key][i][1]];
                    if (key === this.colorField) {
                        // compile legend information, including the increment value
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
            this.setCurrentValues();
        },
        enabledFilters() {
            this.setCurrentValues();
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
