<template>
  <el-table :data="tableData" stripe  style="width: 90%" max-height="400">
    <el-table-column fixed prop="referenceId" label="Reference" width="180" />
    <el-table-column prop="eventType" label="eventType" width="180" />
    <el-table-column prop="eventTime" label="eventTime" />
  </el-table>
</template>
  
<script>
export default {
  created() {
    this.getRecordList();
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  data() {
    return {
      tableData: [],
      timer: null
    };
  },
  methods: {
    getRecordList() {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "rule/event/list"
      })
        .then(function (res) {
          console.log(res.data.re)
          that.tableData = res.data.re
        })
        .catch(function (err) {
        })
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.getRecordList();
      }, 5000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
};
</script>
