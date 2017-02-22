import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        map: {},
        showFilterPicker: false,
        enabledFilters: ['hello', 'world', 'foobar'],
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
