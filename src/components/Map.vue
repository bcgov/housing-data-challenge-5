<template>
<div class="map-wrap">
    <div id="map"></div>
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

        this.map.on('style.load', () => {
            // apply default colors
            this.updateColors(this.colorField);

            // centralize the map object in the store
            store.commit('setMap', this.map);
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
