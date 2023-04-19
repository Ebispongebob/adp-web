<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
    /************************************************************
  ** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
  ** 否则页面将无法正常显示                                  **
  ************************************************************/

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
  }

  body * {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  .codefun-flex-row {
    display: flex;
    flex-direction: row;
  }

  .codefun-flex-col {
    display: flex;
    flex-direction: column;
  }

  .codefun-justify-start {
    justify-content: flex-start;
  }

  .codefun-justify-end {
    justify-content: flex-end;
  }

  .codefun-justify-center {
    justify-content: center;
  }

  .codefun-justify-between {
    justify-content: space-between;
  }

  .codefun-justify-around {
    justify-content: space-around;
  }

  .codefun-justify-evenly {
    justify-content: space-evenly;
  }

  .codefun-items-start {
    align-items: flex-start;
  }

  .codefun-items-end {
    align-items: flex-end;
  }

  .codefun-items-center {
    align-items: center;
  }

  .codefun-items-baseline {
    align-items: baseline;
  }

  .codefun-items-stretch {
    align-items: stretch;
  }

  .codefun-self-start {
    align-self: flex-start;
  }

  .codefun-self-end {
    align-self: flex-end;
  }

  .codefun-self-center {
    align-self: center;
  }

  .codefun-self-baseline {
    align-self: baseline;
  }

  .codefun-self-stretch {
    align-self: stretch;
  }

  .codefun-flex-1 {
    flex: 1 1 0%;
  }

  .codefun-flex-auto {
    flex: 1 1 auto;
  }

  .codefun-grow {
    flex-grow: 1;
  }

  .codefun-grow-0 {
    flex-grow: 0;
  }

  .codefun-shrink {
    flex-shrink: 1;
  }

  .codefun-shrink-0 {
    flex-shrink: 0;
  }

  .codefun-relative {
    position: relative;
  }
</style>