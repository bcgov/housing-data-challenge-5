import exampleComponent from './ExampleFilter.vue';
import exampleComponent2 from './ExampleFilter2.vue';

class Filter {
    constructor(name, component, config) {
        this.name = name;
        this.component = component;
        this.config = config;
    }
}

const heightFilter = new Filter('heightFilter', exampleComponent, { field: 'height' });
const widthFilter = new Filter('widthFilter', exampleComponent2, { field: 'width' });
const colorFilter = new Filter('colorFilter', exampleComponent, { field: 'color' });
const distanceFilter = new Filter('distanceFilter', exampleComponent2, { field: 'distance' });
const weightFilter = new Filter('weightFilter', exampleComponent2, { field: 'weight' });
const dateFilter = new Filter('dateFilter', exampleComponent, { field: 'date' });
const timeFilter = new Filter('timeFilter', exampleComponent, { field: 'time' });

export default {
    heightFilter,
    widthFilter,
    colorFilter,
    distanceFilter,
    weightFilter,
    dateFilter,
    timeFilter,
};
