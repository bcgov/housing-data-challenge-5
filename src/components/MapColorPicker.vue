<template lang="html">
<select v-model="selectedField">
    <option v-for="field in fields" v-text="field.name" :value="field.value"></option>
</select>
</template>

<script>
import mapColors from '../mapColors';

export default {
    name: 'map-color-picker',
    data() {
        return {
            fields: mapColors,
        };
    },
    computed: {
        selectedField: {
            get() {
                return this.$store.state.mapColorField;
            },
            set(val) {
                this.$store.commit('changeMapColorField', val);
            },
        },
    },
};
</script>

<style lang="css" scoped>
select {
    max-width:300px;
}
</style>
