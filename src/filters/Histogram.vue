<template>
<div class="filter-body">
    <h3>{{ title }}</h3>
    <svg width="100%" height="30px">
        <g style="transform: translate(0, 10px)">

        </g>
    </svg>
</div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: 'histogram-filter',
    props: [
        // filter object in the vuex store
        'filterObject',
    ],
    data() {
        return {
        };
    },
    computed: {
        chartData() {
            // @TODO: fetch the data in the viewport for this datapoint
            return d3.range(350).map(d3.randomBates(10));
        },
        title() {
            return this.filterObject.name;
        },
        dataField() {
            return this.filterObject.config.field;
        },
        svgElement() {
            return this.$el.querySelector('svg');
        },
    },
    methods: {
        drawChart() {
            const formatCount = d3.format(',.0f');

            let svg = d3.select(this.svgElement);
            let margin = { top: 4, right: 30, bottom: 4, left: 30 };
            let width = +this.svgElement.clientWidth - margin.left - margin.right;
            let height = +this.svgElement.clientHeight - margin.top - margin.bottom;
            let g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

            const x = d3.scaleLinear()
            .rangeRound([0, width]);

            const bins = d3.histogram()
            .domain(x.domain())
            .thresholds(x.ticks(20))(this.chartData);

            const y = d3.scaleLinear()
            .domain([0, d3.max(bins, d => d.length)])
            .range([height, 0]);

            const bar = g.selectAll('.bar')
            .data(bins)
            .enter().append('g')
            .attr('class', 'bar')
            .attr('transform', d => `translate(${x(d.x0)},${y(d.length)})`);

            bar.append('rect')
            .attr('x', 1)
            .attr('width', x(bins[0].x1) - x(bins[0].x0) - 1)
            .attr('height', d => height - y(d.length));
        },
    },
    mounted() {
        this.drawChart();
    },
};
</script>

<style lang="scss">
.filter-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: #fff;
}
svg {
    flex-shrink: 0;
    flex-grow: 1;

    .bar {
        rect {
          fill: steelblue;
        }

        text {
          fill: #fff;
          font: 10px sans-serif;
        }
    }

}
</style>
