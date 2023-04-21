<template>
  <div class="codefun-flex-row codefun-relative page">
    <SideBar class="pos" />
    <Header1 class="pos_2" />
    <div class="codefun-flex-col section_3 space-y-32 pos_3">
      <div class="codefun-flex-col space-y-20">
        <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper_1">
          <span class="font_2 text_3">Alert Counts</span>
        </div>
        <div class="codefun-flex-row codefun-justify-center codefun-relative group_5">
          <img
            class="image_6 pos_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/729211dd5d9e433f76d2058929b80a28.png"
          />
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
        <img
          class="image_6"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/997368c694971e63a57a9a56229d3d6a.png"
        />
        <span class="font_3 text_3">{{ alertRate }}%</span>
      </div>
      <span class="codefun-self-start font_5 text_8">Today: {{ todayAlertRate }}</span>
      <img
        class="image_7"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/1e88b2c20aba8e9de4218bc9675d1236.png"
      />
    </div>
    <div class="codefun-flex-col section_6 pos_6">
      <div class="codefun-flex-col group space-y-20">
        <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper_20">
          <span class="font_2 text_3">Event times</span>
        </div>
        <div class="codefun-flex-row codefun-items-center space-x-16">
          <img
            class="image_6"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/f7a229fb65ec1ad4507d594b81245d1f.png"
          />
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
              <span class="font_9">Record List</span>
              <div class="codefun-flex-row codefun-items-baseline space-x-80">
                <span class="font_9">App Record rank</span>
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
            <span class="codefun-self-start font_9">线上热门搜索</span>
            <div class="codefun-flex-row group_17 space-x-27">
              <div class="codefun-flex-col section_27 space-y-10">
                <span class="codefun-self-start font_15">搜索用户数</span>
                <div class="codefun-flex-row codefun-justify-between codefun-items-center">
                  <span class="font_18 text_26">22,560</span>
                  <div class="codefun-flex-row codefun-items-center space-x-4">
                    <span class="font_19 text_21">本周</span>
                    <span class="font_20 text_28">40%</span>
                  </div>
                </div>
              </div>
              <div class="codefun-flex-col section_27 space-y-10">
                <span class="codefun-self-start font_15">人均搜索次数</span>
                <div class="codefun-flex-row codefun-justify-between codefun-items-center">
                  <span class="font_18 text_27">2.7</span>
                  <div class="codefun-flex-row codefun-items-center space-x-4">
                    <span class="font_19 text_21">本周</span>
                    <span class="font_20 text_29">40%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="codefun-flex-row codefun-justify-between codefun-items-center group_21">
              <span class="font_8 text_24">新款连衣裙</span>
              <span class="font_6 text_30">8,910</span>
            </div>
            <div class="codefun-flex-col codefun-justify-start codefun-items-start section_31 view_6">
              <div class="section_32"></div>
            </div>
            <div class="codefun-flex-row codefun-justify-between group_22">
              <span class="font_8 text_44">四件套</span>
              <span class="font_6 text_31">34,455</span>
            </div>
            <div class="codefun-flex-col codefun-justify-start codefun-items-start section_31">
              <div class="section_34"></div>
            </div>
            <div class="codefun-flex-row codefun-justify-between group_23">
              <span class="font_8 text_45">男士手包</span>
              <span class="font_6 text_32">23,809</span>
            </div>
            <div class="codefun-flex-col codefun-justify-start codefun-items-start section_31">
              <div class="section_37"></div>
            </div>
            <div class="codefun-flex-row codefun-justify-between group_23">
              <span class="font_8 text_45">耳机</span>
              <span class="font_6 text_32">23,809</span>
            </div>
            <div class="codefun-flex-col codefun-justify-start codefun-items-start section_31">
              <div class="section_39"></div>
            </div>
          </div>
          <div class="codefun-flex-col equal-division-item_2 space-y-46">
            <div class="codefun-flex-row codefun-justify-between codefun-items-center">
              <span class="font_9">销售额类别占比</span>
              <div class="codefun-flex-row space-x-8">
                <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper_16">
                  <span class="font_8 text_17">全部渠道</span>
                </div>
                <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper_3">
                  <span class="font_8 text_18">线上</span>
                </div>
                <div class="codefun-flex-col codefun-justify-start codefun-items-center text-wrapper_2">
                  <span class="font_8 text_15">门店</span>
                </div>
              </div>
            </div>
            <div class="codefun-flex-row codefun-justify-between codefun-items-end group_18">
              <div class="codefun-flex-col codefun-justify-start codefun-relative group_19">
                <div class="codefun-flex-col codefun-justify-start codefun-items-center codefun-relative group_20">
                  <img
                    class="image_21"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853599007622337.png"
                  />
                  <img
                    class="image_20 pos_13"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853599470288649.png"
                  />
                  <img
                    class="image_19 pos_12"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853599887506230.png"
                  />
                  <img
                    class="image_17 pos_10"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853602451734508.png"
                  />
                </div>
                <img
                  class="image_18 pos_11"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853600386930223.png"
                />
              </div>
              <div class="codefun-flex-col space-y-8">
                <div class="codefun-flex-row section_28 space-x-72">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_29"></div>
                    <span class="font_16 text_3">母婴产品</span>
                  </div>
                  <span class="font_17 text_3">38.57%</span>
                </div>
                <div class="codefun-flex-row section_28 space-x-72">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_30"></div>
                    <span class="font_16 text_3">家用电器</span>
                  </div>
                  <span class="font_17 text_3">31.30%</span>
                </div>
                <div class="codefun-flex-row section_28 space-x-72">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_33"></div>
                    <span class="font_16 text_3">食用酒水</span>
                  </div>
                  <span class="font_17 text_3">21.21%</span>
                </div>
                <div class="codefun-flex-row section_28 space-x-72">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_35"></div>
                    <span class="font_16 text_3">个人健康</span>
                  </div>
                  <span class="font_17 text_3">10.91%</span>
                </div>
                <div class="codefun-flex-row section_28 space-x-79">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_36"></div>
                    <span class="font_16 text_3">服饰箱包</span>
                  </div>
                  <span class="font_17 text_3">0.91%</span>
                </div>
                <div class="codefun-flex-row section_28 space-x-104">
                  <div class="codefun-flex-row codefun-items-center codefun-shrink-0 space-x-10">
                    <div class="codefun-shrink-0 section_38"></div>
                    <span class="font_16 text_3">其他</span>
                  </div>
                  <span class="font_17 text_3">0.21%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="codefun-flex-col section_40">
          <div class="codefun-flex-row space-x-8">
            <div class="codefun-flex-col codefun-items-center equal-division-item_3 space-y-10">
              <span class="font_5 text_37">门店一</span>
              <div class="codefun-flex-col codefun-items-center section_42 space-y-10">
                <span class="font_22 text_43">转化率</span>
                <span class="font_20">62%</span>
              </div>
            </div>
            <div class="codefun-flex-col codefun-items-center equal-division-item_4 space-y-14">
              <span class="font_21">门店二</span>
              <div class="codefun-flex-col codefun-items-center codefun-relative section_41">
                <span class="font_22 text_39">转化率</span>
                <span class="font_20 text_33">58%</span>
                <img
                  class="image_24 pos_16"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853603619809046.png"
                />
              </div>
            </div>
            <div class="codefun-flex-col codefun-items-center equal-division-item_5 space-y-10">
              <span class="font_21">门店三</span>
              <div class="codefun-flex-col codefun-items-center section_42 space-y-10">
                <span class="font_22 text_41">转化率</span>
                <span class="font_20">62%</span>
              </div>
            </div>
            <div class="codefun-flex-col codefun-items-center equal-division-item_5 space-y-14">
              <span class="font_21">门店四</span>
              <div class="codefun-flex-col codefun-items-center codefun-relative section_41">
                <span class="font_22 text_41">转化率</span>
                <span class="font_20 text_33">54%</span>
                <img
                  class="image_22 pos_14"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853603976161631.png"
                />
              </div>
            </div>
            <div class="codefun-flex-col codefun-items-center equal-division-item_6 space-y-14">
              <span class="font_21">门店五</span>
              <div class="codefun-flex-col codefun-items-center codefun-relative section_41">
                <span class="font_22 text_42">转化率</span>
                <span class="font_20 text_33">49%</span>
                <img
                  class="image_23 pos_15"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853604364673037.png"
                />
              </div>
            </div>
            <div class="codefun-flex-col codefun-items-center equal-division-item_7 space-y-16">
              <span class="font_21">门店六</span>
              <div class="codefun-flex-col codefun-items-center section_43 space-y-10">
                <span class="font_22 text_34">转化率</span>
                <span class="font_20">62%</span>
              </div>
            </div>
          </div>
          <div class="codefun-flex-col codefun-justify-start codefun-items-center image-wrapper">
            <img
              class="image_25"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853598436811557.png"
            />
          </div>
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

  export default {
    components: { Header1, SideBar, RecordList, RankList },
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
        monthEventTimes: 1000
      };
    },

    methods: {},
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
    width: 1125px;
  }
  .section_3 {
    padding: 26px 25px 28px 30px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 259px;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 32px;
  }
  .pos_3 {
    position: absolute;
    left: 285px;
    top: 100px;
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
  .space-y-19 > *:not(:first-child) {
    margin-top: 19px;
  }
  .pos_4 {
    position: absolute;
    left: 574px;
    top: 100px;
  }
  .space-x-16 > *:not(:first-child) {
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
  .section_5 {
    padding: 26px 25px 16px 28px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 259px;
  }
  .pos_5 {
    position: absolute;
    right: 318px;
    top: 100px;
  }
  .group_3 {
    padding-top: 2px;
    width: 206px;
    height: 15.5px;
  }
  .group_6 {
    margin-top: 22px;
    padding: 0 2px;
  }
  .text_9 {
    margin-left: 2px;
    margin-top: 18px;
  }
  .group_8 {
    margin-right: 3px;
    margin-top: 24px;
  }
  .image_8 {
    width: 7px;
    height: 35px;
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
    top: 100px;
  }
  .group {
    padding: 26px 0 38px;
  }
  .space-y-20 > *:not(:first-child) {
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
  }
  .space-y-30 > *:not(:first-child) {
    margin-top: 30px;
  }
  .section_14 {
    padding: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 4px #00000005;
    width: 1100px;
  }
  .space-y-26 > *:not(:first-child) {
    margin-top: 26px;
  }
  .font_9 {
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 13px;
    color: #20253a;
  }
  .space-x-80 > *:not(:first-child) {
    margin-left: 320px;
  }
  .text_13 {
    color: #0486fe;
    line-height: 11px;
  }
  .space-x-30 > *:not(:first-child) {
    margin-left: 30px;
  }
  .group_12 {
    width: 791px;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 12px;
  }
  .space-x-25 > *:not(:first-child) {
    margin-left: 25px;
  }
  .image_15 {
    width: 24px;
    height: 202px;
  }
  .section_16 {
    padding: 16px 8px 0;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16792316135404381701.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 181px;
  }
  .section_21 {
    background-color: #6236ff;
    width: 8px;
    height: 106px;
  }
  .section_19 {
    background-color: #6236ff;
    width: 8px;
    height: 139px;
  }
  .section_17 {
    background-color: #6236ff;
    width: 8px;
    height: 165px;
  }
  .section_23 {
    background-color: #6236ff;
    width: 8px;
    height: 100px;
  }
  .section_25 {
    background-color: #6236ff;
    width: 8px;
    height: 76px;
  }
  .section_24 {
    background-color: #6236ff;
    width: 8px;
    height: 93px;
  }
  .section_18 {
    background-color: #6236ff;
    width: 8px;
    height: 152px;
  }
  .section_20 {
    background-color: #6236ff;
    width: 8px;
    height: 119px;
  }
  .view_5 {
    margin-right: 8px;
  }
  .group_16 {
    padding-left: 54px;
    padding-right: 14px;
  }
  .space-x-50 > *:not(:first-child) {
    margin-left: 50px;
  }
  .text-wrapper_5 {
    flex: 1 1 15px;
    width: 15px;
  }
  .font_13 {
    font-size: 14px;
    font-family: CircularStd;
    line-height: 10px;
    color: #9b9eac;
  }
  .text-wrapper_13 {
    flex: 1 1 15px;
  }
  .font_14 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 10px;
    color: #9b9eac;
  }
  .text-wrapper_14 {
    flex: 1 1 15px;
  }
  .text-wrapper_15 {
    flex: 1 1 15px;
  }
  .space-x-15 > *:not(:first-child) {
    margin-left: 15px;
  }
  .font_10 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 48px;
    color: #333333;
  }
  .section_15 {
    padding-left: 16px;
    padding-right: 10px;
    background-color: #f8f9fb;
    border-radius: 5px;
    height: 38px;
  }
  .space-x-60 > *:not(:first-child) {
    margin-left: 60px;
  }
  .font_11 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 37.5px;
    color: #74798c;
  }
  .font_12 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 37.5px;
    color: #999999;
  }
  .space-x-12 > *:not(:first-child) {
    margin-left: 12px;
  }
  .section_22 {
    padding-left: 16px;
    padding-right: 12px;
    background-color: #f8f9fb;
    border-radius: 5px;
    height: 38px;
  }
  .space-x-62 > *:not(:first-child) {
    margin-left: 62px;
  }
  .space-x-48 > *:not(:first-child) {
    margin-left: 48px;
  }
  .section_26 {
    padding: 0 16px;
    background-color: #f8f9fb;
    border-radius: 5px;
    height: 38px;
  }
  .space-x-70 > *:not(:first-child) {
    margin-left: 70px;
  }
  .space-x-31 > *:not(:first-child) {
    margin-left: 31px;
  }
  .equal-division-item {
    padding: 30px 30px 36px;
    flex: 1 1 547px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 547px;
    height: 380px;
  }
  .group_17 {
    margin-top: 24px;
  }
  .space-x-27 > *:not(:first-child) {
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
  .space-x-4 > *:not(:first-child) {
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
  .group_21 {
    margin-top: 26px;
  }
  .text_24 {
    line-height: 11px;
  }
  .font_6 {
    font-size: 12px;
    font-family: Helvetica;
    line-height: 10px;
    color: #9ba2ab;
  }
  .text_30 {
    line-height: 10.5px;
  }
  .section_31 {
    background-color: #f6f6f8;
  }
  .view_6 {
    margin-top: 8px;
  }
  .section_32 {
    background-color: #b620e0;
    width: 440px;
    height: 7px;
  }
  .group_22 {
    padding: 22px 0 10px 2px;
  }
  .text_44 {
    line-height: 11px;
  }
  .text_31 {
    line-height: 10.5px;
  }
  .section_34 {
    background-color: #b620e0;
    width: 400px;
    height: 7px;
  }
  .group_23 {
    padding: 22px 0 8px;
  }
  .text_45 {
    line-height: 11px;
  }
  .text_32 {
    line-height: 10.5px;
  }
  .section_37 {
    background-color: #b620e0;
    width: 340px;
    height: 7px;
  }
  .section_39 {
    background-color: #b620e0;
    width: 300px;
    height: 7px;
  }
  .equal-division-item_2 {
    padding: 22px 30px 36px;
    flex: 1 1 547px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 547px;
    height: 380px;
  }
  .space-y-46 > *:not(:first-child) {
    margin-top: 46px;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 8px;
  }
  .text-wrapper_16 {
    padding: 8px 0;
    background-color: #f2f2f2;
    border-radius: 3px;
    width: 68px;
    height: 28px;
  }
  .text_17 {
    line-height: 11px;
  }
  .text-wrapper_3 {
    padding: 8px 0;
    background-color: #0054fe;
    border-radius: 3px;
    width: 44px;
    height: 28px;
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
  }
  .text_15 {
    line-height: 11px;
  }
  .group_18 {
    padding-left: 10px;
  }
  .group_19 {
    margin-bottom: 6px;
    width: 229px;
  }
  .group_20 {
    margin-right: 10px;
    padding: 130px 0 60px;
    width: 219px;
  }
  .image_21 {
    width: 34px;
    height: 32px;
  }
  .image_20 {
    width: 47px;
    height: 48px;
  }
  .pos_13 {
    position: absolute;
    right: 33px;
    bottom: 53.5px;
  }
  .image_19 {
    width: 62px;
    height: 62px;
  }
  .pos_12 {
    position: absolute;
    right: 0;
    bottom: 66px;
  }
  .image_17 {
    width: 125px;
    height: 222px;
  }
  .pos_10 {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .image_18 {
    width: 74px;
    height: 78px;
  }
  .pos_11 {
    position: absolute;
    right: 0;
    top: 22px;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 8px;
  }
  .section_28 {
    padding-left: 16px;
    padding-right: 12px;
    background-color: #f8f9fb;
    border-radius: 5px;
  }
  .space-x-72 > *:not(:first-child) {
    margin-left: 72px;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 10px;
  }
  .section_29 {
    background-color: #fb497c;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .font_16 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 35.5px;
    color: #74798c;
  }
  .font_17 {
    font-size: 12px;
    font-family: Helvetica;
    line-height: 35.5px;
    font-weight: 300;
    color: #9ba2ab;
  }
  .text_3 {
    text-transform: uppercase;
  }
  .text_5 {
    line-height: 23.5px;
  }
  .text_4 {
    margin: 2px 0 2px 18px;
  }
  .text_1 {
    margin-left: 2px;
  }
  .section_30 {
    background-color: #ffc760;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .section_33 {
    background-color: #6fe621;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .section_35 {
    background-color: #4fccff;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .space-x-79 > *:not(:first-child) {
    margin-left: 79px;
  }
  .section_36 {
    background-color: #4d7bf3;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .space-x-104 > *:not(:first-child) {
    margin-left: 104px;
  }
  .section_38 {
    background-color: #1d4999;
    border-radius: 3.5px;
    width: 7px;
    height: 7px;
  }
  .section_40 {
    padding-bottom: 30px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .equal-division-item_3 {
    padding: 30px 0 13px;
    flex: 1 1 181px;
    background-color: #ffffff;
    width: 181px;
    height: 160px;
    border-top: solid 2px #0054fe;
  }
  .text_37 {
    color: #0054fe;
  }
  .section_42 {
    padding: 20px 0;
    border-radius: 50%;
    border-image-slice: 1;
    width: 84px;
    border: solid 7px #4ae8dd;
  }
  .font_22 {
    font-size: 12px;
    font-family: PingFangSC;
    line-height: 10px;
    color: #9ba2ab;
  }
  .text_43 {
    line-height: 11px;
  }
  .equal-division-item_4 {
    padding: 30px 0 15px;
    flex: 1 1 181px;
    background-color: #ffffff;
    width: 183px;
    height: 160px;
  }
  .font_21 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 13px;
    color: #7a7e87;
  }
  .section_41 {
    padding: 22px 0;
    border-radius: 50%;
    width: 84px;
    border: solid 4px #f0f0f2;
  }
  .text_39 {
    line-height: 11px;
  }
  .text_33 {
    margin-top: 10px;
  }
  .image_24 {
    width: 80px;
    height: 78px;
  }
  .pos_16 {
    position: absolute;
    left: -2.5px;
    right: 0;
    top: 0;
    bottom: -2px;
  }
  .equal-division-item_5 {
    flex: 1 1 181px;
    padding: 30px 0 15px;
    background-color: #ffffff;
    width: 181px;
    height: 160px;
  }
  .text_41 {
    line-height: 11px;
  }
  .image_22 {
    width: 62px;
    height: 80px;
  }
  .pos_14 {
    position: absolute;
    right: 0;
    top: -2.5px;
  }
  .equal-division-item_6 {
    padding: 30px 0 15px;
    flex: 1 1 181px;
    background-color: #ffffff;
    width: 180px;
    height: 160px;
  }
  .space-y-14 > *:not(:first-child) {
    margin-top: 14px;
  }
  .text_42 {
    line-height: 11px;
  }
  .image_23 {
    width: 40px;
    height: 77px;
  }
  .pos_15 {
    position: absolute;
    right: 0;
    top: -2.5px;
  }
  .equal-division-item_7 {
    padding: 30px 0 10px;
    flex: 1 1 181px;
    background-color: #ffffff;
    width: 180px;
    height: 160px;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 16px;
  }
  .section_43 {
    padding: 20px 0;
    border-radius: 50%;
    border-image-slice: 1;
    width: 84px;
    border: solid 6px #4ae8dd;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 10px;
  }
  .text_34 {
    line-height: 11px;
  }
  .image-wrapper {
    margin: 15px 28px 0;
    padding: 14px 0 46px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853597750544896.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .image_25 {
    width: 1065px;
    height: 197px;
  }
</style>