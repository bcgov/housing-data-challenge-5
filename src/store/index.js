import Vue from 'vue';
import Vuex from 'vuex';
// import houseViz from './modules/houseViz';

Vue.use(Vuex);

export default new Vuex.Store({
    // modules: {
    //     houseViz,
    // },
    state: {
        msg: 'hello, earth',
    },
});
