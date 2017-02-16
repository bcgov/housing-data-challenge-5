<template>
    <div id="app">
        <h1>{{ msg }}!</h1>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Hello world',
        };
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
