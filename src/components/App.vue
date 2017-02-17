<template>
    <div id="app">
        <h1>{{ msg }}!</h1>
    </div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        msg() {
            return `${this.$store.state.msg}`;
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
