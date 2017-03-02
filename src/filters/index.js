import exampleComponent from './ExampleFilter.vue';
import exampleComponent2 from './ExampleFilter2.vue';
import Filter from './class/Filter';

const heightFilter = new Filter('heightFilter', exampleComponent, { field: 'height' });
const widthFilter = new Filter('widthFilter', exampleComponent2, { field: 'width' });
const colorFilter = new Filter('colorFilter', exampleComponent, { field: 'color' });
const distanceFilter = new Filter('distanceFilter', exampleComponent2, { field: 'distance' });
const weightFilter = new Filter('weightFilter', exampleComponent2, { field: 'weight' });
const dateFilter = new Filter('dateFilter', exampleComponent, { field: 'date' });
const timeFilter = new Filter('timeFilter', exampleComponent, { field: 'time' });

const filters = {
    heightFilter,
    widthFilter,
    colorFilter,
    distanceFilter,
    weightFilter,
    dateFilter,
    timeFilter,
    singleLangSpeakers,
    multiLangSpeakers,
    adults1830,
};

// add the key name to each object for easy retrieval
Object.keys(filters).forEach((filter) => {
    filters[filter].keyName = filter;
});

export default filters;
