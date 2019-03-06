<template>
  <div>
    <div class="logo">
      <img src="../../../static/img/jiayoubao.png" alt="">
      <div class="sys">
        <p class="sys-name"><span style="color:#CE1B22">+.</span>U</p>
        <p class="sys-name">{{$t('login.projectName')}}</p>
      </div>
      <div class="company">@Ayitubie</div>
    </div>
    <div class="countDown" @click="goHome">跳过{{countDown}}S</div>
  </div>
</template>
<script type="text/ecmascript-6">
  import router from '../../router'
  import {Toast} from 'mint-ui';
  import {lsRead} from '../../common/js/ls'
  export default{
    data(){
      return {
        countDown:3,
      }
    },
    methods: {
      goHome(){
        this.$router.push('/home/main');
      }
    },
    mounted(){
      setInterval(() => {
        if(this.countDown >0){
          this.countDown--;
        }
      }, 1000)
    },
    watch:{
      countDown:function(){
          if(this.countDown ==0){
            this.goHome();
          }
      }
    },
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @keyframes logoImg
      0%
        opacity 0
      25%
        opacity .2
      50%

        opacity 0.5
      75%
        opacity 0.7
      100%
        opacity 1
    .countDown
      position absolute
      top 40px
      right: 40px
      width 100px
      height 40px
      background-color #000;
      color #fff
      text-align center
      line-height 42px
      opacity 0.5
      font-size 24px
    .logo
      width 100%
      text-align center
      animation logoImg 0.8s
      img
        position absolute
        top 30%
        left 50%;
        margin-left -60px
        width 120px
        height 120px
        margin-bottom 50px
      .sys
        position absolute
        top 50%
        width 100%
        .sys-name
          width 100%;
          text-align center
          font-size: 44px;
          margin 40px 0 10px 0
      .company
        position absolute
        bottom: 8px
        left 0;
        width 100%
        text-align center
        color #ddd
        font-size 28px
</style>
