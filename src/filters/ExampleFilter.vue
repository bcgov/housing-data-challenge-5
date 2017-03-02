<template>
<div class="filter-body">
    <label>this is some filter or other</label>
    <input type="range">
</div>
</template>

<script>
export default {
    name: 'example-filter',
    data() {
        return {
            foo: 'bar',
        };
    },
};
</script>

<style lang="scss" scoped>
label {
    background: white; ////////
    color: #555; /////////
}
</style>
