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

export default {
    name: 'map-viz',
    mounted() {
        mapboxgl.accessToken = config.mapboxgl.accessToken;
        const map = new mapboxgl.Map({
            container: 'map',
            style: config.mapboxgl.baseStyle,
            center: config.map.center,
            zoom: config.map.zoom,
        });

        // centralize the map object in the store
        store.commit('setMap', map);
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
