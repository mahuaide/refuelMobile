<template>
  <div class="warpper">
    <div class="loader">
      <div class="loader-inner ball-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <p class="text" style="">加油中...</p>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .warpper
    display none;
    width 100%;
    min-height 100%
    position fixed;
    top 0
    left 0
    background-color rgba(255, 255,255, 1);
    z-index 1000
    .loader
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      margin-left: -17px
      margin-top: -22px
    .text
      position absolute
      top 54%;
      width: 100%;
      text-align: center;
      color: #000

  @keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .ball-spin-fade-loader {
    position: relative;
  }

  .ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
    animation: ball-spin-fade-loader 1s 0s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
    animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
    animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
    animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
    animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
    animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
    animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
    animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  }

  .ball-spin-fade-loader > div {
    background-color: #000;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
  }
</style>
