import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        map: {},
        showFilterPicker: false,
    },
    mutations: {
        setMap(state, map) {
            Vue.set(state, 'map', map);
        },
        showFilterPicker(state, show) {
            Vue.set(state, 'showFilterPicker', show);
        },
    },
});
