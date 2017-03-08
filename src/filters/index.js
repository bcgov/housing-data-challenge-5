import histogramFilter from './Histogram.vue';
import Filter from './class/Filter';

// create filter objects
const avgyearbuilt = new Filter('Average Year Built', histogramFilter, { field: 'avg_year_built' });
const cp1061 = new Filter('Single-detached Houses', histogramFilter, { field: 'cp_1061' });
const cp1071 = new Filter('Apartments', histogramFilter, { field: 'cp_1071' });
const cp1081 = new Filter('Movable Dwellings', histogramFilter, { field: 'cp_1081' });
const cp1091 = new Filter('Other Dwellings', histogramFilter, { field: 'cp_1091' });
const cp141516172 = new Filter('Males 19 to 34', histogramFilter, { field: 'cp_141516172' });
const cp141516173 = new Filter('Females 19 to 34', histogramFilter, { field: 'cp_141516173' });
const cp291 = new Filter('Median age', histogramFilter, { field: 'cp_291' });
const cp321 = new Filter('Shacked Up', histogramFilter, { field: 'cp_321' });
const cp322 = new Filter('Shacked Up Males', histogramFilter, { field: 'cp_322' });
const cp323 = new Filter('Shacked Up Females', histogramFilter, { field: 'cp_323' });
const cp351 = new Filter('Singles', histogramFilter, { field: 'cp_351' });
const cp352 = new Filter('Single Males', histogramFilter, { field: 'cp_352' });
const cp353 = new Filter('Single Females', histogramFilter, { field: 'cp_353' });
const cp52 = new Filter('Total Males', histogramFilter, { field: 'cp_52' });
const cp53 = new Filter('Total Females', histogramFilter, { field: 'cp_53' });
const ml22811 = new Filter('Knowledge of Multiple Languages', histogramFilter, { field: 'ml_22811' });
const ml311 = new Filter('Knowledge of English', histogramFilter, { field: 'ml_311' });
const ml411 = new Filter('Knowledge of French', histogramFilter, { field: 'ml_411' });
const ml511 = new Filter('Knowledge of Non-official languages', histogramFilter, { field: 'ml_511' });
const mnfmvchange = new Filter('Change in Average Monthly Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'mn_fmv_change' });
const mnfmvforeignchange = new Filter('Change in Foreign Involvement Average Monthly Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'mn_fmv_foreign_change' });
const sumfmvchange = new Filter('Change in Average Monthly Summed Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'sum_fmv_change' });
const sumfmvforeignchange = new Filter('Change in Foreign Involvement Average Monthly Summed Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'sum_fmv_foreign_change' });
const sumtotalassessed = new Filter('Sum Total Assessed Value', histogramFilter, { field: 'sum_total_assessed' });
const sumtotalassessedbuilding = new Filter('Sum Total Assessed Building', histogramFilter, { field: 'sum_total_assessed_building' });
const sumtotalassessedland = new Filter('Sum Total Assessed Land', histogramFilter, { field: 'sum_total_assessed_land' });

const filters = {
    avgyearbuilt,
    cp1061,
    cp1071,
    cp1081,
    cp1091,
    cp141516172,
    cp141516173,
    cp291,
    cp321,
    cp322,
    cp323,
    cp351,
    cp352,
    cp353,
    cp52,
    cp53,
    ml22811,
    ml311,
    ml411,
    ml511,
    mnfmvchange,
    mnfmvforeignchange,
    sumfmvchange,
    sumfmvforeignchange,
    sumtotalassessed,
    sumtotalassessedbuilding,
    sumtotalassessedland,
};

// add the key name to each object for easy retrieval
Object.keys(filters).forEach((filter) => {
    filters[filter].keyName = filter;
});

export default filters;
