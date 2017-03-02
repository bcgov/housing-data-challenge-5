<template>
<div class="filter-body">
    <h3>{{ title }}</h3>
    <svg width="100%" height="60px">
        <g style="transform: translate(0, 10px)">

        </g>
    </svg>
</div>
</template>

<script>
import d3 from 'd3';

console.log(d3);

export default {
    name: 'histogram-filter',
    props: [
        // filter object in the vuex store
        'filterObject',
    ],
    data() {
        return {
        };
    },
    computed: {
        title() {
            return this.filterObject.name;
        },
    },
    mounted() {

    },
};
</script>

<style lang="scss" scoped>
.filter-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: yellow;
}
svg {
    background: purple;
    flex-shrink: 0;
    flex-grow: 1;
}
</style>
