/**
 * Data fields for the various different filters. The values which here are 0-600 get
 * dynamically changed when the map view changes. There are 6 values because that
 * helps to detail the data a bit more, especially with respect to the legend.
 */
export default {
    cp_1061: {
        name: 'Single-detached Houses',
        value: 'cp_1061',
        paintProperty() {
            return {
                property: 'cp_1061',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_1071: {
        name: 'Apartments',
        value: 'cp_1071',
        paintProperty() {
            return {
                property: 'cp_1071',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_1081: {
        name: 'Movable Dwellings',
        value: 'cp_1081',
        paintProperty() {
            return {
                property: 'cp_1081',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_1091: {
        name: 'Other Dwellings',
        value: 'cp_1091',
        paintProperty() {
            return {
                property: 'cp_1091',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_291: {
        name: 'Median age',
        value: 'cp_291',
        paintProperty() {
            return {
                property: 'cp_291',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_321p: {
        name: 'Percent Shacked Up',
        value: 'cp_321p',
        paintProperty() {
            return {
                property: 'cp_321p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_351p: {
        name: 'Percent Singles',
        value: 'cp_351p',
        paintProperty() {
            return {
                property: 'cp_351p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_52p: {
        name: 'Percent Males',
        value: 'cp_52p',
        paintProperty() {
            return {
                property: 'cp_52p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    cp_53p: {
        name: 'Percent Females',
        value: 'cp_53p',
        paintProperty() {
            return {
                property: 'cp_53p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    mn_fmv_change: {
        name: 'Change in Average Monthly Market Value Pre/Post Aug 2016 (%)',
        value: 'mn_fmv_change',
        paintProperty() {
            return {
                property: 'mn_fmv_change',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    mn_fmv_foreign_change: {
        name: 'Change in Foreign Involvement Average Monthly Market Value Pre/Post Aug 2016 (%)',
        value: 'mn_fmv_foreign_change',
        paintProperty() {
            return {
                property: 'mn_fmv_foreign_change',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_m1p: {
        name: 'Movers 1 Year Ago Percent',
        value: 'nhs_m1p',
        paintProperty() {
            return {
                property: 'nhs_m1p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_m5p: {
        name: 'Movers 5 Year Ago Percent',
        value: 'nhs_m5p',
        paintProperty() {
            return {
                property: 'nhs_m5p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_nm1p: {
        name: 'Non-Movers 1 Year Ago Percent',
        value: 'nhs_nm1p',
        paintProperty() {
            return {
                property: 'nhs_nm1p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_nm5p: {
        name: 'Non-Movers 5 Year Ago Percent',
        value: 'nhs_nm5p',
        paintProperty() {
            return {
                property: 'nhs_nm5p',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_ownp: {
        name: 'Owner Percent',
        value: 'nhs_ownp',
        paintProperty() {
            return {
                property: 'nhs_ownp',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    nhs_renp: {
        name: 'Renter Percent',
        value: 'nhs_renp',
        paintProperty() {
            return {
                property: 'nhs_renp',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    sum_fmv_change: {
        name: 'Change in Average Monthly Summed Market Value Pre/Post Aug 2016 (%)',
        value: 'sum_fmv_change',
        paintProperty() {
            return {
                property: 'sum_fmv_change',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
    sum_fmv_foreign_change: {
        name: 'Change in Foreign Involvement Average Monthly Summed Market Value Pre/Post Aug 2016 (%)',
        value: 'sum_fmv_foreign_change',
        paintProperty() {
            return {
                property: 'sum_fmv_foreign_change',
                stops: [
                    [0, '#f1eef6'],
                    [100, '#d0d1e6'],
                    [200, '#a6bddb'],
                    [300, '#74a9cf'],
                    [400, '#3690c0 '],
                    [500, '#0570b0'],
                    [600, '#034e7b'],
                ],
            };
        },
    },
};
