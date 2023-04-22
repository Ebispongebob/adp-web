<template>
    <div>
        <el-card>
            <div class="chart-container" ref="chartContainer" :style="{ width: width, height: height }"></div>
        </el-card>
    </div>
</template>
  
<script>
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts";

export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
        width: {
            type: String,
            default: "100%",
        },
        height: {
            type: String,
            default: "400px",
        },
    },
    setup(props) {
        const chartContainer = ref(null);
        let chartInstance = null;

        const initChart = () => {
            if (chartInstance) {
                chartInstance.dispose();
            }
            chartInstance = echarts.init(chartContainer.value);

            const option = {
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                color: [
                    "#00CC00",
                    "#fe9b00",
                    "#CC0000"
                ],
                series: [
                    {
                        type: "pie",
                        radius: "50%",
                        data: props.data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };

            chartInstance.setOption(option);
        };

        onMounted(() => {
            initChart();
        });

        watch(
            () => props.data,
            () => {
                initChart();
            },
            { deep: true }
        );

        return {
            chartContainer,
        };
    },
};
</script>
  
<style scoped>
.chart-container {
    text-align: center;
}
</style>
  