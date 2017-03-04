/**
 * example data fields
 * with hardcoded colors from colorbrewer
 */
export default {
    ml_311: {
        name: 'Single Language Speakers',
        value: 'ml_311',
        paintProperty() {
            return {
                property: 'ml_311',
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
    ml_22811: {
        name: 'Multiple Language Speakers',
        value: 'ml_22811',
        paintProperty() {
            return {
                property: 'ml_22811',
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
    cp_141516172: {
        name: 'Adults 18-30',
        value: 'cp_141516172',
        paintProperty() {
            return {
                property: 'cp_141516172',
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
