<template>
<div class="filter">
    <label>this is some OTHER filter</label>
    <input type="text">
</div>
</template>

<script>
export default {
    name: 'example-filter2',
    data() {
        return {
            foo: 'baz',
        };
    },
};
</script>

<style lang="scss" scoped>
label {
    background: #ACF; ////////
    color: #333; /////////
}
</style>
