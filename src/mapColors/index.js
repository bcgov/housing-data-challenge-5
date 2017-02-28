/**
 * example data fields
 * with hardcoded colors from colorbrewer
 */
export default {
    single_language_total: {
        name: 'Single Language Speakers',
        value: 'single_language_total',
        paintProperty() {
            return {
                property: 'single_language_total',
                stops: [
                  [0, '#edf8e9'],
                  [100, '#c7e9c0'],
                  [200, '#a1d99b'],
                  [300, '#74c476'],
                  [400, '#41ab5d '],
                  [500, '#238b45'],
                  [600, '#005a32'],
                ],
            };
        },
    },
    multi_language_total: {
        name: 'Multiple Language Speakers',
        value: 'multi_language_total',
        paintProperty() {
            return {
                property: 'multi_language_total',
                stops: [
                  [0, '#f1eef6'],
                  [100, '#d4b9da'],
                  [200, '#c994c7'],
                  [300, '#df65b0'],
                  [400, '#e7298a'],
                  [500, '#ce1256'],
                  [600, '#91003f'],
                ],
            };
        },
    },
    age_18_30_m: {
        name: 'Adults 18-30',
        value: 'age_18_30_m',
        paintProperty() {
            return {
                property: 'age_18_30_m',
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
