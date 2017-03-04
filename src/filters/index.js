import histogramFilter from './Histogram.vue';
import Filter from './class/Filter';

// create filter objects
const singleLangSpeakers = new Filter('Single Language Speakers', histogramFilter, { field: 'ml_311' });
const multiLangSpeakers = new Filter('Multiple Language Speakers', histogramFilter, { field: 'ml_22811' });
const adults1830 = new Filter('Adults 18-30', histogramFilter, { field: 'cp_141516172' });
const assessedBuilding = new Filter('Total Assessed - Building', histogramFilter, { field: 'sum_total_assessed_building' });

const filters = {
    singleLangSpeakers,
    multiLangSpeakers,
    adults1830,
    assessedBuilding,
};

// add the key name to each object for easy retrieval
Object.keys(filters).forEach((filter) => {
    filters[filter].keyName = filter;
});

export default filters;
