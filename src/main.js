import Vue from 'vue';
// main app / layout component
import App from './components/App.vue';
import store from './store';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
