<template>
  <div class="codefun-flex-row codefun-items-start page space-x-30">
    <div class="codefun-flex-row codefun-justify-center codefun-items-center codefun-flex-auto section space-x-76">
      <img class="image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853606276016241.png" />
      <div class="codefun-flex-col section_2">

        <h1 style="text-align: center; color: #0054fe;"> Login </h1>

        <div class="codefun-flex-col codefun-justify-start group_3">
          <div class="codefun-flex-col">
            <input class="codefun-flex-row codefun-items-center view section_4 space-x-14 input-jUQYtJqT"
              placeholder="username" v-model="username" />
            <input class="codefun-flex-row codefun-items-center view_2 section_4 space-x-14 input-u4nsrNlF"
              placeholder="password" v-model="password" />
          </div>
        </div>

        <div class="codefun-flex-col codefun-justify-start codefun-items-center button" @click="doLogin()">
          <span class="text_6" href="#">SIGN IN</span>
        </div>

      </div>
    </div>
    <div class="codefun-flex-col codefun-shrink-0 group_4 space-y-66">
      <div class="codefun-self-start section_5"></div>
      <div class="codefun-flex-col codefun-justify-start codefun-items-start codefun-relative group_5">
        <img class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641707535a7e3f0310fa7a8d/6417076699e5b100119a4a1e/16818853609688831320.png" />
        <div class="section_6 pos"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  components: {},
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    doLogin() {
      let that = this
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "auth/login?account=" + this.username + "&password=" + this.password
      })
        .then(function (res) {
          localStorage.setItem('accessToken', res.data.re)
          router.push('/home')
        })
        .catch(function (err) {
        })
    }

  },
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

.space-x-30>*:not(:first-child) {
  margin-left: 30px;
}

.section {
  padding: 59px 0 71px;
  background-color: #ffffff;
  border-radius: 11px;
  height: 700px;
}

.space-x-76>*:not(:first-child) {
  margin-left: 76px;
}

.image_2 {
  width: 603px;
  height: 452px;
}

.section_2 {
  padding: 50px 78px 110px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #0000001a;
  width: 550px;
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
  width: 291px;
}

.font_1 {
  color: #0054fe;
  font-size: 18px;
  font-family: PingFangSC;
  font-weight: 600;
  line-height: 17px;
}

.section_3 {
  background-color: #0054fe;
  width: 110px;
  height: 3px;
}

.group_3 {
  margin-top: 50px;
}

.view {
  margin-right: 6px;
}

.view_2 {
  margin-right: 6px;
  margin-top: 19px;
}

.section_4 {
  padding: 16px 14px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #dedede;
}

.space-x-14>*:not(:first-child) {
  margin-left: 14px;
}

.button {
  margin-right: 6px;
  margin-top: 42px;
  padding: 20px 0 16px;
  background-color: #0054fe;
  border-radius: 5px;
  width: 385px;
  cursor: pointer;
}

.text_6 {
  color: #ffffff;
  font-size: 16px;
  font-family: PingFangSC;
  font-weight: 600;
  line-height: 14.5px;
  text-decoration: none;
}

.text_6:hover,
:active {
  text-decoration: none;
}

.group_4 {
  margin-top: 326px;
  overflow-x: hidden;
  width: 32.5px;
}

.space-y-66>*:not(:first-child) {
  margin-top: 66px;
}

.section_5 {
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

.image_5 {
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

.input-jUQYtJqT {
  padding: 16px 14px 16px 14px;
}

.input-u4nsrNlF {
  padding: 16px 14px 16px 14px;
}
</style>