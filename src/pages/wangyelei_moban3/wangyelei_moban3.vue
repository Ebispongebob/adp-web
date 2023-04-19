<template>
  <div class="codefun-flex-col page space-y-37">
    <div class="codefun-flex-row codefun-justify-center codefun-items-start codefun-relative group">
      <div class="codefun-flex-row space-x-40 pos">
        <span class="font_1">WORKS</span>
        <span class="font_1">ABOUT</span>
      </div>
      <div class="codefun-flex-col codefun-justify-start codefun-items-center image-wrapper">
        <img
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853552430827666.png"
        />
      </div>
      <div class="codefun-flex-row group_2 space-x-50 pos_2">
        <span class="font_1 text">WEB</span>
        <span class="font_1">DESIGN</span>
      </div>
    </div>
    <span class="codefun-self-center text_2">后台管理页面</span>
    <div class="codefun-flex-col codefun-items-center space-y-24">
      <span class="text_3">Background management page</span>
      <img
        class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853552476850225.png"
      />
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
    padding: 28px 29px 0;
    background-color: #e9ecf9;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .space-y-37 > *:not(:first-child) {
    margin-top: 18.5px;
  }
  .group {
    padding: 4px 5px 0 9px;
  }
  .space-x-40 > *:not(:first-child) {
    margin-left: 20px;
  }
  .pos {
    position: absolute;
    left: 9px;
    top: 0;
  }
  .font_1 {
    font-size: 8px;
    font-family: HarmonyOSSansSC;
    letter-spacing: 1.5px;
    line-height: 6px;
    font-weight: 700;
    color: #000000;
  }
  .image-wrapper {
    width: 92.5px;
  }
  .image {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  .group_2 {
    padding: 0 3.5px;
  }
  .space-x-50 > *:not(:first-child) {
    margin-left: 25px;
  }
  .pos_2 {
    position: absolute;
    right: 5px;
    top: 0;
  }
  .text {
    line-height: 6px;
  }
  .text_2 {
    color: #000000;
    font-size: 40px;
    font-family: SourceHanSansCN;
    font-weight: 800;
    line-height: 39px;
    text-shadow: 0px 1px 4px #0000004d;
  }
  .space-y-24 > *:not(:first-child) {
    margin-top: 12px;
  }
  .text_3 {
    color: #000000;
    font-size: 14px;
    font-family: HarmonyOSSansSC;
    line-height: 14px;
    opacity: 0.8;
  }
  .image_2 {
    border-radius: 10px;
    width: 501.5px;
    height: 214.5px;
  }
</style>