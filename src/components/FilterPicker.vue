<template>
<div class="modal" v-bind:class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="panel">
            <p class="panel-heading">
                Select up to {{ maxFilters }} filters
                <button class="delete is-medium is-pulled-right" @click="closeModal"></button>
            </p>
            <label v-for="filter in filters" class="panel-block checkbox" :class="{ 'is-disabled': disabled(filter.keyName) }">
                <input :disabled="disabled(filter.keyName)" v-model="checkedFilters" :value="filter.keyName" type="checkbox">
                {{ filter.name }}
            </label>
            <div class="panel-block">
                <button class="button is-primary is-fullwidth" @click="closeModal">
                    Return to the map
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// config
import config from '../app.config';
// vuex store
import store from '../store';
// available filters
import filters from '../filters';

export default {
    name: 'filter-picker',
    data() {
        return {
            // selected filters from the modal menu
            // synced with store.enabledFilters in watch.checkedFilters
            checkedFilters: [],
            // all available filter objects
            filters,
            // maximum number of active filters
            maxFilters: config.maxFilters,
        };
    },
    computed: {
        // (boolean) modal window visibility
        showModal() {
            return store.state.showFilterPicker;
        },
    },
    methods: {
        closeModal() {
            store.commit('showFilterPicker', false);
        },
        // (boolean) disable checkboxes if the array is "full"
        // still allow checked ones to be unchecked
        disabled(filterName) {
            // if the filter is in the array ("checked")
            const checked = this.checkedFilters.indexOf(filterName) > -1;
            // if the array is full
            const arrayFull = this.checkedFilters.length >= config.maxFilters;
            return arrayFull && !checked;
        },
    },
    watch: {
        // sync the array of filter object with the local
        // array of filter name strings
        checkedFilters(val) {
            store.commit('setFilters', val);
        },
    },
    created() {
        // sync the local checkedFilters with the store's enabledFilters
        const initial = store.state.enabledFilters.map(f => f.keyName);
        this.checkedFilters = initial;
    },
};
</script>

<style lang="scss" scoped>
.modal-content {
    background: #fff;
}
</style>
