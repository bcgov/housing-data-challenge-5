import histogramFilter from './Histogram.vue';
import Filter from './class/Filter';

// create filter objects
const cp1061 = new Filter('Single-detached Houses', histogramFilter, { field: 'cp_1061', source: 'Census Data 2011' });
const cp1071 = new Filter('Apartments', histogramFilter, { field: 'cp_1071', source: 'Census Data 2011' });
const cp1081 = new Filter('Movable Dwellings', histogramFilter, { field: 'cp_1081', source: 'Census Data 2011' });
const cp1091 = new Filter('Other Dwellings', histogramFilter, { field: 'cp_1091', source: 'Census Data 2011' });
const cp291 = new Filter('Median age', histogramFilter, { field: 'cp_291', source: 'Census Data 2011' });
const cp321p = new Filter('Percent Shacked Up', histogramFilter, { field: 'cp_321p', source: 'Census Data 2011' });
const cp351p = new Filter('Percent Singles', histogramFilter, { field: 'cp_351p', source: 'Census Data 2011' });
const cp52p = new Filter('Percent Males', histogramFilter, { field: 'cp_52p', source: 'Census Data 2011' });
const cp53p = new Filter('Percent Females', histogramFilter, { field: 'cp_53p', source: 'Census Data 2011' });
const mnfmvchange = new Filter('Change in Average Monthly Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'mn_fmv_change', source: 'Property Transfer Tax Data 2016' });
const mnfmvforeignchange = new Filter('Change in Foreign Involvement Average Monthly Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'mn_fmv_foreign_change', source: 'Property Transfer Tax Data 2016' });
const nhsm1p = new Filter('Movers 1 Year Ago Percent', histogramFilter, { field: 'nhs_m1p', source: 'National Household Survey 2011' });
const nhsm5p = new Filter('Movers 5 Year Ago Percent', histogramFilter, { field: 'nhs_m5p', source: 'National Household Survey 2011' });
const nhsnm1p = new Filter('Non-Movers 1 Year Ago Percent', histogramFilter, { field: 'nhs_nm1p', source: 'National Household Survey 2011' });
const nhsnm5p = new Filter('Non-Movers 5 Year Ago Percent', histogramFilter, { field: 'nhs_nm5p', source: 'National Household Survey 2011' });
const nhsownp = new Filter('Owner Percent', histogramFilter, { field: 'nhs_ownp', source: 'National Household Survey 2011' });
const nhsrenp = new Filter('Renter Percent', histogramFilter, { field: 'nhs_renp', source: 'National Household Survey 2011' });
const sumfmvchange = new Filter('Change in Average Monthly Summed Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'sum_fmv_change', source: 'Property Transfer Tax Data 2016' });
const sumfmvforeignchange = new Filter('Change in Foreign Involvement Average Monthly Summed Market Value Pre/Post Aug 2016 (%)', histogramFilter, { field: 'sum_fmv_foreign_change', source: 'Property Transfer Tax Data 2016' });

const filters = {
    cp1061,
    cp1071,
    cp1081,
    cp1091,
    cp291,
    cp321p,
    cp351p,
    cp52p,
    cp53p,
    mnfmvchange,
    mnfmvforeignchange,
    nhsm1p,
    nhsm5p,
    nhsnm1p,
    nhsnm5p,
    nhsownp,
    nhsrenp,
    sumfmvchange,
    sumfmvforeignchange,
};

// add the key name to each object for easy retrieval
Object.keys(filters).forEach((filter) => {
    filters[filter].keyName = filter;
});

export default filters;
