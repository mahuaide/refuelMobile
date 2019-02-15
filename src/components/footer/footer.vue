<template>
  <div>
    <div class="footer-wrapper" id="footer">
      <ul class="footer-ul">
        <router-link tag="li" class="footer-li" to="/home/main" >
          <i class="iconfont icon-shouye"></i>
          <span class="footer-text">首页</span>
        </router-link>
        <router-link tag="li" class="footer-li" to="/home/refuel" >
          <i class="iconfont icon-jiayouqia"></i>
          <span class="footer-text">加油</span>
        </router-link>
        <router-link tag="li" class="footer-li" to="/home/repair" >
          <i class="iconfont icon-baoyang"></i>
          <span class="footer-text">保养</span>
        </router-link>
        <router-link tag="li" class="footer-li" to="/home/user" >
          <i class="iconfont icon-wode"></i>
          <span class="footer-text">我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      data(){
        return {

        }
      },
      methods:{

      },
      mounted(){

      },
      computed:{

      },
      components:{
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-wrapper
    position fixed
    z-index 1300
    left 0
    bottom 0
    width 100%
    height 100px
    background-color #F0F0F0
    .footer-ul
      display flex
      .footer-li
        flex 1
        text-align center
        color #a0a0a0;
        .iconfont
          display block
          font-size 36px
          margin-top 15px
        .footer-text
          display block
          height 50px
          line-height 50px
          font-size 28px
      .active
        color #CE1B22
        opacity 0.9


</style>
