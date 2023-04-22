<template>
    <div ref="chart" :style="{ width: width, height: height }"></div>
</template>
  
<script>
import * as echarts from 'echarts'

export default {
    name: 'LineChart',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '400px'
        },
        options: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            chartInstance: null
        }
    },
    mounted() {
        this.initChart()
    },
    beforeUnmount() {
        this.disposeChart()
    },
    methods: {
        initChart() {
            this.chartInstance = echarts.init(this.$refs.chart)
            this.chartInstance.setOption(this.options)
        },
        disposeChart() {
            if (this.chartInstance) {
                this.chartInstance.dispose()
                this.chartInstance = null
            }
        }
    },
    watch: {
        options: {
            deep: true,
            handler(newVal) {
                this.chartInstance.setOption(newVal)
            }
        }
    }
}
</script>
  