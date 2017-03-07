<template>
<div class="map-wrap">
    <div id="map"></div>
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

export default {
    name: 'map-viz',
    data() {
        return {
            map: {},
            layers: config.map.dataLayers,
        };
    },
    mounted() {
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
            this.setCurrentValues();
        });
        // track map view in the store
        this.map.on('moveend', () => {
            this.setCurrentValues();
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
        });
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

            // set minmax with d3
            minmax[this.colorField].min = d3.min(valueBuckets[this.colorField]);
            minmax[this.colorField].max = d3.max(valueBuckets[this.colorField]);

            // apply color rules
            Object.keys(mapColors).forEach((key) => {
                const count = stops[key].length;
                const incr = (minmax[key].max - minmax[key].min) / count;
                for (let i = 0; i < count; i += 1) {
                    stops[key][i] = [Math.round(minmax[key].min + (incr * i)), stops[key][i][1]];
                }
            });
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
