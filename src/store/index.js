import Vue from 'vue';
import Vuex from 'vuex';
import filters from '../filters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        map: {},
        showFilterPicker: false,
        enabledFilters: [filters.heightFilter, filters.widthFilter, filters.colorFilter],
    },
    mutations: {
        setMap(state, map) {
            Vue.set(state, 'map', map);
        },
        showFilterPicker(state, show) {
            Vue.set(state, 'showFilterPicker', show);
        },
        enableFilter(state, filter) {
            if (state.enabledFilters.length < 3) {
                state.enabledFilters.push(filter);
            }
        },
    },
});
