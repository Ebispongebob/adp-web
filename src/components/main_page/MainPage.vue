<template>
    <div>
        <div class="codefun-flex-col section_3 space-y-32 pos_3">
            <div class="codefun-flex-col space-y-20">
                <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper_1">
                    <span class="font_2 text_3">Alert Counts</span>
                </div>
                <div class="codefun-flex-row codefun-justify-center codefun-relative group_5">
                    <img class="image_6 pos_7"
                        src="https://cdn.pixabay.com/photo/2021/11/06/05/25/alarm-symbol-6772461_1280.png" />
                    <span class="font_3 text_3">{{ alertCounts }}</span>
                </div>
                <span class="codefun-self-start font_5 text_7">Today: {{ todayAlertCounts }}</span>
            </div>
            <div class="codefun-flex-row codefun-justify-between">
                <span class="font_23"> last week: {{ lastWeekCompare }}%</span>
                <span class="font_23 text_11"> yesteday: {{ yestedayCompare }}% </span>
            </div>
        </div>
        <div class="codefun-flex-col section_4 space-y-19 pos_4">
            <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper_1">
                <span class="font_2 text_3">Alert Rate</span>
            </div>
            <div class="codefun-flex-row codefun-items-center space-x-16">
                <img class="image_6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCImQAGsO1xBAIxTwl65llKqumTSO9qATl__7K50yHpXl81J0NU5G1bFNIn4P_Jk3epIk&usqp=CAU" />
                <span class="font_3 text_3">{{ alertRate }}%</span>
            </div>
            <span class="codefun-self-start font_5 text_8">Today: {{ todayAlertRate }}</span>
            <img class="image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/1e88b2c20aba8e9de4218bc9675d1236.png" />
        </div>
        <div class="codefun-flex-col section_6 pos_6">
            <div class="codefun-flex-col group space-y-20">
                <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper_20">
                    <span class="font_2 text_3">Event times</span>
                </div>
                <div class="codefun-flex-row codefun-items-center space-x-16">
                    <img class="image_6"
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/f7a229fb65ec1ad4507d594b81245d1f.png" />
                    <span class="font_3 text_3 text_5">{{ eventTimes }}</span>
                </div>
                <div class="codefun-flex-row codefun-justify-between">
                    <span class="font_5">Month: {{ monthEventTimes }}</span>
                    <span class="font_5 text_10">Week: {{ weekEventTimes }}</span>
                    <span class="font_5 text_10">Today: {{ todayEventTimes }}</span>
                </div>
            </div>
            <div class="codefun-self-end section_9"></div>
        </div>
        <div class="codefun-flex-col codefun-justify-start line-tabs pos_9">
            <div class="codefun-flex-col group_11 space-y-30">
                <div class="codefun-flex-col codefun-justify-start">
                    <div class="codefun-flex-col section_14 space-y-26">
                        <div class="codefun-flex-row codefun-justify-between">
                            <span class="font_9 text_3">Record List</span>
                            <div class="codefun-flex-row codefun-items-baseline space-x-80">
                                <span class="font_9 text_3">App Record rank</span>
                                <span class="font_8 text_13">more</span>
                            </div>
                        </div>
                        <div class="codefun-flex-row codefun-items-center space-x-30">
                            <div class="codefun-flex-col codefun-flex-auto group_12 space-y-12">
                                <RecordList />
                            </div>
                            <div class="codefun-flex-col codefun-shrink-0">
                                <RankList />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="codefun-flex-row space-x-31">
                    <div class="codefun-flex-col equal-division-item">
                        <span class="codefun-self-start font_9 text_3">Event Detail</span>
                        <div class="codefun-flex-row group_17 space-x-27">
                            <div class="codefun-flex-col section_27 space-y-10">
                                <span class="codefun-self-start font_15">Normal</span>
                                <div class="codefun-flex-row codefun-justify-between codefun-items-center">
                                    <span class="font_18 text_26">{{ normalEventTimes }}</span>
                                    <div class="codefun-flex-row codefun-items-center space-x-4">
                                        <span class="font_19 text_21">abnormal: </span>
                                        <span class="font_20 text_28">{{ abnormalEventTimes }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="codefun-flex-col section_27 space-y-10">
                                <span class="codefun-self-start font_15">Today error rate</span>
                                <div class="codefun-flex-row codefun-justify-between codefun-items-center">
                                    <span class="font_18 text_27">{{ todayErrorRate }}%</span>
                                    <div class="codefun-flex-row codefun-items-center space-x-4">
                                        <span class="font_19 text_21">week</span>
                                        <span class="font_20 text_29">{{ weekErrorRate }}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Progress />
                    </div>
                    <div class="codefun-flex-col equal-division-item_2 space-y-46">
                        <div class="codefun-flex-row codefun-justify-between codefun-items-center">
                            <span class="font_9 text_3">Event Type PieChart</span>
                            <div class="codefun-flex-row space-x-8">
                                <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper_3">
                                    <span class="font_8 text_18">All</span>
                                </div>
                                <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper_2">
                                    <span class="font_8 text_15">Select</span>
                                </div>
                            </div>
                        </div>
                        <div class="codefun-flex-row codefun-justify-between codefun-items-end group_18">
                            <div class="codefun-flex-col codefun-justify-start codefun-relative group_19">
                                <PieChart :data="chartData" width="100%" height="300px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="codefun-flex-col section_40">
                    <line-chart :options="chartOptions" width="100%" height="400px" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header1 from '../../components/Header/Header.vue';
import SideBar from '../../components/SideBar/SideBar.vue';
import RecordList from '../../components/List/RecordList.vue';
import RankList from '../../components/List/RankList.vue';
import Progress from '../../components/List/Progress.vue';
import PieChart from '../../components/chart/PieChart.vue';
import LineChart from '../../components/chart/LineChart.vue';

export default {
    created() {
        this.getWeekConstant(),
            this.getWeekCount(),
            this.getPieChartCount()
    },
    components: { Header1, SideBar, RecordList, RankList, Progress, PieChart, LineChart },
    data() {
        return {
            alertCounts: 2,
            todayAlertCounts: 1,
            lastWeekCompare: 0,
            yestedayCompare: 0,
            alertRate: 10,
            todayAlertRate: 5,
            eventTimes: 1000,
            todayEventTimes: 100,
            weekEventTimes: 800,
            monthEventTimes: 1000,
            normalEventTimes: 1000,
            abnormalEventTimes: 1000,
            todayErrorRate: 10,
            weekErrorRate: 5,
            chartData: [
                { name: "normal", value: null },
                { name: "warning", value: null },
                { name: "error", value: null }
            ],
            chartOptions: {
                title: {
                    text: 'Event Handle Count'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'All',
                        type: 'line',
                        data: []
                    }
                ]
            }
        };
    },
    methods: {
        getWeekConstant() {
            let that = this
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "constant/lastweek"
            })
                .then(function (res) {
                    that.chartOptions.xAxis.data = res.data.re
                })
                .catch(function (err) {
                })
        },
        getWeekCount() {
            let that = this
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "rule/event/week/count"
            })
                .then(function (res) {
                    that.chartOptions.series[0].data = res.data.re
                })
                .catch(function (err) {
                })
        },
        getPieChartCount() {
            let that = this
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "rule/event/type/count"
            })
                .then(function (res) {
                    that.chartData[0].value = res.data.re.normal
                    that.chartData[1].value = res.data.re.warning
                    that.chartData[2].value = res.data.re.error
                })
                .catch(function (err) {
                })
        }
    },
};
</script>

<style scoped lang="css">
.page {
    background-color: #f5f6fa;
    height: 1716px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.pos {
    position: absolute;
    left: 0;
    top: 0;
}

.font_5 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 13px;
    color: #9ba2ab;
}

.font_8 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 10px;
    color: #74798c;
}

.font_23 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 13px;
    color: #74798c;
}

.pos_2 {
    position: absolute;
    right: 0;
    top: 0;
    width: 1100px;
}

.section_3 {
    padding: 26px 25px 28px 30px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 259px;
}

.space-y-32>*:not(:first-child) {
    margin-top: 32px;
}

.pos_3 {
    position: absolute;
    left: 150px;
    top: 40px;
}

.text-wrapper_1 {
    padding-top: 2px;
    width: 204px;
}

.font_2 {
    font-size: 14px;
    font-family: PingFangSC;
    letter-spacing: 1px;
    line-height: 13px;
    color: #74798c;
}

.group_5 {
    padding: 2px 0;
}

.image_6 {
    border-radius: 6px;
    width: 32px;
    height: 32px;
}

.pos_7 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.font_3 {
    font-size: 32px;
    font-family: Helvetica;
    line-height: 27.5px;
    color: #282d30;
}

.text_7 {
    margin-left: 2px;
    line-height: 14px;
}

.text_11 {
    margin-right: 20px;
}

.section_4 {
    padding: 26px 25px 17px 30px;
    background-color: #ffffff;
    border-radius: 5px;
}

.space-y-19>*:not(:first-child) {
    margin-top: 19px;
}

.pos_4 {
    position: absolute;
    left: 430px;
    top: 40px;
}

.space-x-16>*:not(:first-child) {
    margin-left: 16px;
}

.text_8 {
    margin-left: 2px;
    line-height: 13.5px;
}

.image_7 {
    margin-right: 6px;
    width: 199px;
    height: 38px;
}

.section_6 {
    padding: 0 25px 30px 30px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 500px;
}

.pos_6 {
    position: absolute;
    right: 30px;
    top: 40px;
}

.group {
    padding: 26px 0 38px;
}

.space-y-20>*:not(:first-child) {
    margin-top: 20px;
}

.text-wrapper_20 {
    width: 204px;
}

.text_10 {
    margin-right: 20px;
}

.section_9 {
    margin-right: 5px;
    background-color: #f6f6f8;
    width: 440px;
    height: 7px;
    border-left: solid 143px #4ae8dd;
}

.line-tabs {
    padding-bottom: 46px;
    width: 1126px;
}

.pos_9 {
    position: absolute;
    right: 29px;
    top: 323.5px;
}

.group_11 {
    padding: 12px 0 60px 30px;
    width: 1126px;
    margin-top: -80px;
}

.space-y-30>*:not(:first-child) {
    margin-top: 20px;
}

.section_14 {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 4px #00000005;
    width: 1065px;
    margin-left: 30px;
}

.space-y-26>*:not(:first-child) {
    margin-top: 26px;
    height: 400px;
}

.font_9 {
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 13px;
    color: #20253a;
}

.space-x-80>*:not(:first-child) {
    margin-left: 130px;
}

.text_13 {
    color: #0486fe;
    line-height: 11px;
}

.space-x-30>*:not(:first-child) {
    margin-left: 30px;
}

.group_12 {
    width: 791px;
}

.space-y-12>*:not(:first-child) {
    margin-top: 12px;
}

.space-x-31>*:not(:first-child) {
    margin-left: 31px;
}

.equal-division-item {
    padding: 30px 30px 36px;
    flex: 1 1 547px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 530px;
    height: 500px;
    margin-left: 30px;
}

.group_17 {
    margin-top: 24px;
}

.space-x-27>*:not(:first-child) {
    margin-left: 27px;
}

.section_27 {
    flex: 1 1 230px;
    padding: 18px 20px;
    background-color: #f8f9fb;
    border-radius: 5px;
    width: 230px;
    height: 75px;
}

.font_15 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 13px;
    color: #9191af;
}

.font_18 {
    font-size: 18px;
    font-family: Helvetica;
    color: #212145;
}

.text_26 {
    line-height: 15.5px;
}

.space-x-4>*:not(:first-child) {
    margin-left: 4px;
}

.font_19 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 10px;
    color: #9191af;
}

.text_21 {
    line-height: 11px;
}

.font_20 {
    font-size: 14px;
    font-family: Helvetica;
    line-height: 10px;
    color: #282d30;
}

.text_28 {
    color: #0fb269;
}

.text_27 {
    line-height: 13px;
}

.text_29 {
    color: #e05567;
}

.equal-division-item_2 {
    padding: 22px 30px 36px;
    flex: 1 1 547px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 547px;
    height: 500px;
}

.space-y-46>*:not(:first-child) {
    margin-top: 46px;
}

.space-x-8>*:not(:first-child) {
    margin-left: 8px;
}

.text-wrapper_3 {
    padding: 8px 0;
    background-color: #0054fe;
    border-radius: 3px;
    width: 44px;
    height: 28px;
    cursor: pointer;
}

.text_18 {
    color: #ffffff;
    line-height: 11px;
}

.text-wrapper_2 {
    padding: 8px 0;
    background-color: #f2f2f2;
    border-radius: 3px;
    width: 44px;
    height: 28px;
    cursor: pointer;
}

.text_15 {
    line-height: 11px;
}

.group_18 {
    padding-left: 10px;
}

.group_19 {
    margin-bottom: 6px;
    width: 430px;
}

.text_3 {
    text-transform: uppercase;
}

.text_5 {
    line-height: 23.5px;
}

.section_40 {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-left: 30px;
}

.space-y-10>*:not(:first-child) {
    margin-top: 10px;
}
</style>