import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login/Login.vue';
import Page_02_denglu_shoujihao from '../pages/Page_02_denglu_shoujihao/Page_02_denglu_shoujihao.vue';
import Page_03_denglu_shoujihaozhuangtai from '../pages/Page_03_denglu_shoujihaozhuangtai/Page_03_denglu_shoujihaozhuangtai.vue';
import Page_04_dashboard_fenxitai from '../pages/home/Home.vue';
import Page_05_dashboard_jiankongtai from '../pages/Page_05_dashboard_jiankongtai/Page_05_dashboard_jiankongtai.vue';
import Page_06_dashboard_gongzuotai from '../pages/Page_06_dashboard_gongzuotai/Page_06_dashboard_gongzuotai.vue';
import Page_07_biaodan_jichubiaodan from '../pages/Page_07_biaodan_jichubiaodan/Page_07_biaodan_jichubiaodan.vue';
import Page_08_biaodan_shuruzhuangtai from '../pages/Page_08_biaodan_shuruzhuangtai/Page_08_biaodan_shuruzhuangtai.vue';
import Page_09_biaodan_fenbubiaodan1 from '../pages/Page_09_biaodan_fenbubiaodan1/Page_09_biaodan_fenbubiaodan1.vue';
import Page_10_biaodan_fenbubiaodan2 from '../pages/Page_10_biaodan_fenbubiaodan2/Page_10_biaodan_fenbubiaodan2.vue';
import Page_11_biaodan_fenbubiaodan3 from '../pages/Page_11_biaodan_fenbubiaodan3/Page_11_biaodan_fenbubiaodan3.vue';
import Page_12_biaodan_gaojibiaodan from '../pages/Page_12_biaodan_gaojibiaodan/Page_12_biaodan_gaojibiaodan.vue';
import Page_13_liebiao_chaxunbiaoge from '../pages/Page_13_liebiao_chaxunbiaoge/Page_13_liebiao_chaxunbiaoge.vue';
import Page_14_liebiao_biaozhunliebiao from '../pages/Page_14_liebiao_biaozhunliebiao/Page_14_liebiao_biaozhunliebiao.vue';
import Page_15_liebiao_kapianliebiao from '../pages/Page_15_liebiao_kapianliebiao/Page_15_liebiao_kapianliebiao.vue';
import Page_16_liebiao_sousuowenzhangliebiao from '../pages/Page_16_liebiao_sousuowenzhangliebiao/Page_16_liebiao_sousuowenzhangliebiao.vue';
import Page_18_liebiao_sousuoyingyongliebiao from '../pages/Page_18_liebiao_sousuoyingyongliebiao/Page_18_liebiao_sousuoyingyongliebiao.vue';
import Page_19_xiangqing_jichuxiangqing from '../pages/Page_19_xiangqing_jichuxiangqing/Page_19_xiangqing_jichuxiangqing.vue';
import Page_20_xiangqing_gaojixiangqing from '../pages/Page_20_xiangqing_gaojixiangqing/Page_20_xiangqing_gaojixiangqing.vue';
import Page_21_caozuo_chenggongye from '../pages/Page_21_caozuo_chenggongye/Page_21_caozuo_chenggongye.vue';
import Page_22_caozuo_shibaiye from '../pages/Page_22_caozuo_shibaiye/Page_22_caozuo_shibaiye.vue';
import Wangyelei_moban3 from '../pages/wangyelei_moban3/wangyelei_moban3.vue';
import Denglu_shurumima from '../pages/denglu_shurumima/denglu_shurumima.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Page_02_denglu_shoujihao',
    name: 'Page_02_denglu_shoujihao',
    component: Page_02_denglu_shoujihao,
  },
  {
    path: '/Page_03_denglu_shoujihaozhuangtai',
    name: 'Page_03_denglu_shoujihaozhuangtai',
    component: Page_03_denglu_shoujihaozhuangtai,
  },
  {
    path: '/home',
    name: 'Home',
    component: Page_04_dashboard_fenxitai,
  },
  {
    path: '/Page_05_dashboard_jiankongtai',
    name: 'Page_05_dashboard_jiankongtai',
    component: Page_05_dashboard_jiankongtai,
  },
  {
    path: '/Page_06_dashboard_gongzuotai',
    name: 'Page_06_dashboard_gongzuotai',
    component: Page_06_dashboard_gongzuotai,
  },
  {
    path: '/Page_07_biaodan_jichubiaodan',
    name: 'Page_07_biaodan_jichubiaodan',
    component: Page_07_biaodan_jichubiaodan,
  },
  {
    path: '/Page_08_biaodan_shuruzhuangtai',
    name: 'Page_08_biaodan_shuruzhuangtai',
    component: Page_08_biaodan_shuruzhuangtai,
  },
  {
    path: '/Page_09_biaodan_fenbubiaodan1',
    name: 'Page_09_biaodan_fenbubiaodan1',
    component: Page_09_biaodan_fenbubiaodan1,
  },
  {
    path: '/Page_10_biaodan_fenbubiaodan2',
    name: 'Page_10_biaodan_fenbubiaodan2',
    component: Page_10_biaodan_fenbubiaodan2,
  },
  {
    path: '/Page_11_biaodan_fenbubiaodan3',
    name: 'Page_11_biaodan_fenbubiaodan3',
    component: Page_11_biaodan_fenbubiaodan3,
  },
  {
    path: '/Page_12_biaodan_gaojibiaodan',
    name: 'Page_12_biaodan_gaojibiaodan',
    component: Page_12_biaodan_gaojibiaodan,
  },
  {
    path: '/Page_13_liebiao_chaxunbiaoge',
    name: 'Page_13_liebiao_chaxunbiaoge',
    component: Page_13_liebiao_chaxunbiaoge,
  },
  {
    path: '/Page_14_liebiao_biaozhunliebiao',
    name: 'Page_14_liebiao_biaozhunliebiao',
    component: Page_14_liebiao_biaozhunliebiao,
  },
  {
    path: '/Page_15_liebiao_kapianliebiao',
    name: 'Page_15_liebiao_kapianliebiao',
    component: Page_15_liebiao_kapianliebiao,
  },
  {
    path: '/Page_16_liebiao_sousuowenzhangliebiao',
    name: 'Page_16_liebiao_sousuowenzhangliebiao',
    component: Page_16_liebiao_sousuowenzhangliebiao,
  },
  {
    path: '/Page_18_liebiao_sousuoyingyongliebiao',
    name: 'Page_18_liebiao_sousuoyingyongliebiao',
    component: Page_18_liebiao_sousuoyingyongliebiao,
  },
  {
    path: '/Page_19_xiangqing_jichuxiangqing',
    name: 'Page_19_xiangqing_jichuxiangqing',
    component: Page_19_xiangqing_jichuxiangqing,
  },
  {
    path: '/Page_20_xiangqing_gaojixiangqing',
    name: 'Page_20_xiangqing_gaojixiangqing',
    component: Page_20_xiangqing_gaojixiangqing,
  },
  {
    path: '/Page_21_caozuo_chenggongye',
    name: 'Page_21_caozuo_chenggongye',
    component: Page_21_caozuo_chenggongye,
  },
  {
    path: '/Page_22_caozuo_shibaiye',
    name: 'Page_22_caozuo_shibaiye',
    component: Page_22_caozuo_shibaiye,
  },
  {
    path: '/wangyelei_moban3',
    name: 'wangyelei_moban3',
    component: Wangyelei_moban3,
  },
  {
    path: '/denglu_shurumima',
    name: 'denglu_shurumima',
    component: Denglu_shurumima,
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;