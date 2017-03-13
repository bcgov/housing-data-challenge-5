import Vue from 'vue';
import Vuex from 'vuex';
import filters from '../filters';
// config
import config from '../app.config';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        map: {},
        showFilterPicker: false,
        enabledFilters: [
            filters.cp1061,
            filters.cp1071,
            filters.nhsm5p,
        ],
        mapColorField: config.map.colorField,
        currentViewValues: { extrema: {}, all: {} },
        currentFeature: false,
    },
    mutations: {
        setMap(state, map) {
            Vue.set(state, 'map', map);
        },
        showFilterPicker(state, show) {
            Vue.set(state, 'showFilterPicker', show);
        },
        setFilters(state, filterNames = []) {
            let newFilters = [];
            filterNames.forEach((filterName) => {
                newFilters.push(filters[filterName]);
            });
            newFilters = newFilters.slice(0, config.maxFilters);
            Vue.set(state, 'enabledFilters', newFilters);
        },
        changeMapColorField(state, fieldName) {
            Vue.set(state, 'mapColorField', fieldName);
        },
        changeMapView(state, mapView) {
            Vue.set(state, 'mapView', mapView);
        },
        setCurrentViewValues(state, values) {
            Vue.set(state, 'currentViewValues', values);
        },
        setCurrentFeature(state, feature) {
            Vue.set(state, 'currentFeature', feature);
        },
    },
});
