<template>
<div id="app" class="container">
    <section class="section">
        <div class="box">
            <map-viz></map-viz>
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
</style>
