export default {
    maxFilters: 3,
    // initial map view
    map: {
        center: [-123.12, 49.28],
        zoom: 9.5,
        colorField: 'multi_language_total',
        dataLayers: [
            'abms-province',
            'census-dissemination-areas',
            'census-subdivisions',
            'census-divisions',
        ],
    },
    mapboxgl: {
        baseStyle: 'mapbox://styles/foundryspatial/cizt0a0af008o2ro18l6perna',
        accessToken: 'pk.eyJ1IjoiZm91bmRyeXNwYXRpYWwiLCJhIjoiNzk1YTU3OTZmMjZiMzQ3YzM5YzIwODNiNjhkM2MzMDQifQ.sfy6Aux5O-BBqbSVNaec1A',
    },
};
