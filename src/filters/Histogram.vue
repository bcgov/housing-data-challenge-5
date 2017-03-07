<template>
<div class="filter-body" v-bind:class="[ this.dataField ]">
    <h3>{{ title }}</h3>
    <svg width="100%" height="30px" class="histogram">
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
            // fetch the data in the viewport for this datapoint
            const field = this.dataField;
            return this.$store.state.currentViewValues.all[field];
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
            // wait until the chart data is ready
            if ((!this.chartData) || this.chartData.length === 0) {
                return;
            }

            // wait until the map is ready
            if (!this.$store.state.map.style) {
                return;
            }

            const formatCount = d3.format(',.0f');
            const svg = d3.select(this.svgElement);

            // clear the SVG for redraws
            svg.selectAll('*').remove();

            const margin = { top: 4, right: 30, bottom: 22, left: 30 };
            const width = +this.svgElement.clientWidth - margin.left - margin.right;
            const height = +this.svgElement.clientHeight - margin.top - margin.bottom;
            const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            const xMax = d3.max(this.chartData);
            const xMin = d3.min(this.chartData);

            const x = d3.scaleLinear()
            .domain([xMin, xMax])
            .nice()
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
            .attr('width', x(bins[0].x1) - x(bins[0].x0) - 3)
            .attr('height', d => height - y(d.length));

            bar.append('text')
            .attr('dy', '.75em')
            .attr('y', (d) => {
                if (height - y(d.length) < 15) {
                    return -14;
                }
                return 6;
            })
            .attr('x', (x(bins[0].x1) - x(bins[0].x0)) / 2)
            .attr('text-anchor', 'middle')
            .text((d) => {
                if (d.length === 0) {
                    return null;
                }
                return formatCount(d.length);
            });

            g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));
        },
    },
    watch: {
        // redraw the chart if the data changes
        chartData() {
            this.drawChart();
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
          fill: #e6550d;
        }

        text {
          fill: #000;
          font: 10px sans-serif;
        }
    }

}
</style>
