<template>
<div class="modal is-active" v-show="showModal">
    <div class="modal-background"></div>
    <div class="modal-content">
        <b>now HERE is a filter picker</b>
        <ul>
            <li>Lorem ipsum.</li>
            <li>Repudiandae, odio!</li>
            <li>Dolorum, ut.</li>
            <li>Tempora, velit.</li>
            <li>Quod, unde.</li>
            <li>Quod, distinctio!</li>
            <li>Non, magnam.</li>
        </ul>
    </div>
    <button class="modal-close" @click="closeModal"></button>
</div>
</template>

<script>
// vuex store
import store from '../store';

export default {
    name: 'filter-picker',
    computed: {
        showModal() {
            return store.state.showFilterPicker;
        },
    },
    methods: {
        closeModal() {
            this.$store.commit('showFilterPicker', false);
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-content {
    color: #fff; //////
    background: brown; //////
}
</style>
