<template>
<div id="app" class="container">

    <map-viz></map-viz>

    <section class="filters">
        <div class="controls">
            filter-controls
        </div>
        <div class="list">
            <div class="filter">
                filter 1
            </div>
            <div class="filter">
                filter 2
            </div>
            <div class="filter">
                filter 3
            </div>
        </div>
    </section>

</div>
</template>

<script>
import MapViz from './Map.vue';

export default {
    name: 'app',
    components: {
        'map-viz': MapViz,
    },
};
</script>

<style lang="scss">
// customize bulma variables
$primary: #f26721; // Foundry Spatial orange

// import bulma css
@import '~bulma';

// base font size
html {
    font-size: 18px;
}

// full-height layout
html, body {
    height: 100%;
    min-height:440px;
}

#app {
    height: 100%;
    display: flex;
    flex-flow: column;
}

.filters {
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    .controls {
        min-height: 4rem;
        margin-bottom: .25rem;
    }

    .list {
        flex-grow: 1;
        display: flex;
        flex-flow: column;
    }

    .filter {
        flex-grow: 1;
        &:not(:last-child) {
            margin-bottom: .25rem;
        }
    }
}
</style>
