<template>
  <div class="codefun-flex-row codefun-relative page">
    <SideBar class="pos" @isMain="handleMain" @isDataSource="handleDataSource" />
    <Header1 class="pos_2" />
    <MainPage class="pos_3" v-show="this.isMain" />
    <DataSourceList class="pos_4" v-show="this.isDataSource" />
  </div>
</template>

<script>
import Header1 from '../../components/Header/Header.vue';
import SideBar from '../../components/SideBar/SideBar.vue';
import MainPage from '../../components/main_page/MainPage.vue';
import DataSourceList from '../../components/main_page/DataSourceList.vue'

export default {
  created() {
    // 异步操作
    asyncOperation().then(() => {
      // 更新数据
      this.data = newData;
      // 触发更新
      this.$forceUpdate();
      // 或者
      this.$nextTick(() => {
        // 更新数据
        this.data = newData;
      });
    });
  },
  components: { Header1, SideBar, MainPage, DataSourceList },
  data() {
    return {
      isMain: true,
      isDataSource: false,
      isRuleConfig: false
    };
  },
  methods: {
    handleMain(p1, p2, p3) {
      this.isMain = p1;
      this.isDataSource = p2;
      this.isRuleConfig = p3;
    },
    handleDataSource(p1, p2, p3) {
      this.isMain = p1;
      this.isDataSource = p2;
      this.isRuleConfig = p3;
    }
  },
};
</script>

<style scoped lang="css">
.page {
  background-color: #f5f6fa;
  height: 2000px;
  width: 100%;
}

.pos {
  position: absolute;
  left: 0;
  top: 0;
}

.pos_2 {
  position: absolute;
  right: 0;
  top: 0;
  width: 1100px;
}

.pos_3 {
  position: absolute;
  right: 0;
  bottom: 0;
}

.pos_4 {
  position: absolute;
  left: 300px;
  top: 100px;
}
</style>