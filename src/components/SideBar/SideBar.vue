<template>
  <div class="codefun-flex-col section pos">
    <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper">
      <span class="text">
        <img src="https://dspncdn.com/a1/media/692x/52/47/20/524720b595f256dc18cb2d4b0c372279.jpg"
          style="width: 70px; height: 70px;" />
        ADP
      </span>
    </div>

    <div class="codefun-flex-col group_2">
      <el-button class="codefun-flex-col codefun-justify-start codefun-items-start button" @click="homeClick">
        <div class="codefun-flex-row codefun-items-center group_1 space-x-26">
          <img class="codefun-shrink-0 image_10"
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" />
          &nbsp&nbsp&nbsp&nbsp HOME
        </div>
      </el-button>
    </div>
    <div class="codefun-flex-col group_2">
      <el-button class="codefun-flex-col codefun-justify-start codefun-items-start button"  @click="datasourceClick">
        <div class="codefun-flex-row codefun-items-center group_1 space-x-26">
          <img class="codefun-shrink-0 image_10"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/23310d9c5cfb84425acc37c3804e8344.png" />
          &nbsp&nbsp&nbsp&nbsp Data-Source
        </div>
      </el-button>
    </div>
    <div class="codefun-flex-col group_2">
      <el-button class="codefun-flex-col codefun-justify-start codefun-items-start button">
        <div class="codefun-flex-row codefun-items-center group_1 space-x-26">
          <img class="codefun-shrink-0 image_14"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853579909110788.png" />
          &nbsp&nbsp&nbsp&nbsp Rule Config
        </div>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    homeClick() {
      this.$emit('isMain', true, false, false);
    },
    datasourceClick() {
      this.$emit('isDataSource', false, true, false);
    }
  }
};
</script>

<style scoped lang="css">
.section {
  padding-bottom: 1292px;
  background-color: #ffffff;
  box-shadow: 4px 0px 4px #2b2d3703;
  width: 255px;
  height: 1795px;
}

.text-wrapper {
  padding: 26px 0 22px;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px #2b2d370d;
  width: 255px;
}

.text {
  color: #707070;
  font-size: 28px;
  font-family: SourceHanSansCN;
  font-weight: 800;
  line-height: 21.5px;
  text-align: center;
  align-items: center;
  display: flex;
}

.group_2 {
  margin-top: 33px;
  padding: 0 30px;
}

.button {
  padding: 18px 0;
  background-color: white;
  border-radius: 8px;
}

.button:hover {
  border: 1px solid gray;
  cursor: pointer;
}

.group_1 {
  margin-left: 20px;
}

.space-x-26>*:not(:first-child) {
  margin-left: 26px;
}

.image_10 {
  width: 16px;
  height: 16px;
}

.image_14 {
  width: 16px;
  height: 17px;
}
</style>