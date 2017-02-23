import exampleComponent from './ExampleFilter.vue';

class Filter {
    constructor(name, component, config) {
        this.name = name;
        this.component = component;
        this.config = config;
    }
}

const heightFilter = new Filter('heightFilter', exampleComponent, { field: 'height' });
const widthFilter = new Filter('widthFilter', exampleComponent, { field: 'width' });
const colorFilter = new Filter('colorFilter', exampleComponent, { field: 'color' });

export default {
    heightFilter,
    widthFilter,
    colorFilter,
};
