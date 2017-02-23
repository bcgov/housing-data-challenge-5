<template>
<div class="map-wrap">
    <div id="map"></div>
</div>
</template>

<script>
// import libraries
import L from 'leaflet';

// vuex store
import store from '../store';

// workaround for leaflet 1.0.3 bug with webpack
/* eslint-disable no-underscore-dangle, global-require */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
/* eslint-enable */
// end workaround for leaflet webpack bug

export default {
    name: 'map-viz',
    mounted() {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        // centralize the map object in the store
        store.commit('setMap', map);
    },
};
</script>

<style lang="scss">
// import leaflet css
@import '~leaflet/dist/leaflet.css';

#map {
    height: 55vh;
}
</style>
