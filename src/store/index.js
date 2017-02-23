import Vue from 'vue';
import Vuex from 'vuex';
import filters from '../filters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        map: {},
        showFilterPicker: false,
        enabledFilters: [
            filters.heightFilter,
            filters.distanceFilter,
            filters.colorFilter,
        ],
    },
    mutations: {
        setMap(state, map) {
            Vue.set(state, 'map', map);
        },
        showFilterPicker(state, show) {
            Vue.set(state, 'showFilterPicker', show);
        },
        setFilters(state, filterNames = []) {
            const newFilters = [];
            filterNames.forEach((filterName) => {
                newFilters.push(filters[filterName]);
            });
            Vue.set(state, 'enabledFilters', newFilters);
        },
    },
});
