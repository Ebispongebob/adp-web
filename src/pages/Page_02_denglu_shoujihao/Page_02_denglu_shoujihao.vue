<template>
  <div class="codefun-flex-row codefun-items-start page space-x-30">
    <div class="codefun-flex-row codefun-justify-center codefun-items-center codefun-flex-auto section space-x-76">
      <img
        class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853606276016241.png"
      />
      <div class="codefun-flex-col section_2">
        <img
          class="codefun-self-center image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853605603241346.png"
        />
        <div class="codefun-flex-col group">
          <div class="codefun-flex-row group_2 space-x-82">
            <span class="font_1 text">账号密码登录</span>
            <span class="font_1 text_2">手机号登录</span>
          </div>
          <div class="codefun-self-end section_3"></div>
        </div>
        <div class="codefun-flex-col group_3 space-y-24">
          <div class="codefun-flex-col space-y-19">
            <div class="codefun-flex-col codefun-justify-start codefun-items-start text-wrapper">
              <span class="font_2 text_3">请输入您的手机号</span>
            </div>
            <div class="codefun-flex-row section_5 space-x-198">
              <span class="font_2">请输入验证码</span>
              <span class="font_2 text_4">获取验证码</span>
            </div>
          </div>
          <span class="codefun-self-end font_2 text_5">忘记密码？</span>
        </div>
        <div class="codefun-flex-col codefun-justify-start codefun-items-center button">
          <span class="text_6">登录</span>
        </div>
      </div>
    </div>
    <div class="codefun-flex-col codefun-shrink-0 group_4 space-y-66">
      <div class="codefun-self-start section_4"></div>
      <div class="codefun-flex-col codefun-justify-start codefun-items-start codefun-relative group_5">
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853607623032649.png"
        />
        <div class="section_6 pos"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-left: 80px;
    padding-top: 96px;
    background-color: #ffffff;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853606319206170.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .space-x-30 > *:not(:first-child) {
    margin-left: 30px;
  }
  .section {
    padding: 59px 0 71px;
    background-color: #ffffff;
    border-radius: 11px;
    height: 700px;
  }
  .space-x-76 > *:not(:first-child) {
    margin-left: 76px;
  }
  .image_2 {
    width: 603px;
    height: 452px;
  }
  .section_2 {
    padding: 50px 78px 72px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px #0000001a;
    height: 570px;
    border: solid 1px #f5f5f5;
  }
  .image {
    width: 130px;
    height: 30px;
  }
  .group {
    margin-top: 68px;
    padding: 0 50px;
  }
  .group_2 {
    padding-bottom: 22px;
  }
  .space-x-82 > *:not(:first-child) {
    margin-left: 82px;
  }
  .font_1 {
    font-size: 18px;
    font-family: PingFangSC;
    line-height: 17px;
  }
  .text {
    color: #666666;
  }
  .text_2 {
    color: #0054fe;
    font-weight: 600;
    line-height: 16.5px;
  }
  .section_3 {
    margin-right: 8px;
    background-color: #0054fe;
    width: 92px;
    height: 3px;
  }
  .group_3 {
    margin-top: 50px;
  }
  .space-y-24 > *:not(:first-child) {
    margin-top: 24px;
  }
  .space-y-19 > *:not(:first-child) {
    margin-top: 19px;
  }
  .text-wrapper {
    margin-right: 6px;
    padding: 18px 0 22px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 385px;
    border: solid 1px #dedede;
  }
  .font_2 {
    font-size: 14px;
    font-family: PingFangSC;
    line-height: 13px;
    color: #cccccc;
  }
  .text_3 {
    margin-left: 14px;
  }
  .section_5 {
    margin-right: 6px;
    padding: 18px 14px;
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #dedede;
  }
  .space-x-198 > *:not(:first-child) {
    margin-left: 198px;
  }
  .text_4 {
    color: #268af0;
  }
  .text_5 {
    margin-right: 4px;
    color: #666666;
    text-decoration: underline;
  }
  .button {
    margin-right: 6px;
    margin-top: 42px;
    padding: 20px 0 16px;
    background-color: #0054fe;
    border-radius: 5px;
    width: 385px;
  }
  .text_6 {
    color: #ffffff;
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    line-height: 14.5px;
  }
  .group_4 {
    margin-top: 326px;
    overflow-x: hidden;
    width: 32.5px;
  }
  .space-y-66 > *:not(:first-child) {
    margin-top: 66px;
  }
  .section_4 {
    opacity: 0.82;
    background-image: linear-gradient(180deg, #4581ff 2.5%, #1c57fe 100%);
    border-radius: 50%;
    width: 103px;
    height: 103px;
  }
  .group_5 {
    padding-bottom: 244px;
    overflow-x: hidden;
  }
  .image_3 {
    width: 66px;
    height: 66px;
  }
  .section_6 {
    background-image: linear-gradient(180deg, #4581ff 2.5%, #1c57fe 100%);
    width: 32.5px;
    height: 276px;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 34px;
  }
</style>