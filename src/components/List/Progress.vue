<template>
  <div class="d-progress">
    <br>
    <div v-if="progressData.length">
      <span class="font_8 text_45">{{ progressData[0].first }}</span>
      <el-progress :percentage="progressData[0].second" />
      <span class="font_8 text_45">{{ progressData[1].first }}</span>
      <el-progress :percentage="progressData[1].second" />
      <span class="font_8 text_45">{{ progressData[2].first }}</span>
      <el-progress :percentage="progressData[2].second" />
      <span class="font_8 text_45">{{ progressData[3].first }}</span>
      <el-progress :percentage="progressData[3].second" />
      <span class="font_8 text_45">{{ progressData[4].first }}</span>
      <el-progress :percentage="progressData[4].second" />
    </div>
  </div>
</template>
  
<script>
export default {
  created() {
    this.getProgressList();
  },
  components: {},
  data() {
    return {
      progressData: [],
      timer: null
    };
  },
  methods: {
    getProgressList() {
      let that = this
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "rule/event/rate"
      })
        .then(function (res) {
          console.log(res.data.re)
          that.progressData = res.data.re
        })
        .catch(function (err) {
        })
    }
  },
};
</script>
  
<style scoped>
.d-progress .el-progress--line {
  margin-bottom: 15px;
  width: 400px;
}

.text_45 {
  line-height: 11px;
}

.font_8 {
  font-size: 12px;
  font-family: PingFangSC;
  line-height: 10px;
  color: #74798c;
}
</style>
  