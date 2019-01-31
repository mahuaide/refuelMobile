<template>
  <div>
    <div class="header-wrapper" id="header">
      <span class="iconfont icon-houtui" @click="goback()"></span>
      <p class="header-title">{{title}}</p>
      <!--<span class="login-userName">{{$store.state.user.userName}}</span>-->
      <!--<img :src="$store.state.user.photo || '/static/img/default-head.png'">-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        title:''
      }
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
    },
    mounted(){
      this.title = this.$router.currentRoute.name;
    },
    computed: {},
    components: {},
    watch:{
      '$route':function(){
         this.title = this.$router.currentRoute.name;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-wrapper
    position fixed
    z-index 1100
    top 0
    width 100%
    height 90px
    background-color #F8F8F8
    text-align center
    line-height 90px
    .header-title
      position absolute
      width 100%
      height 100%
      line-height 96px
      text-align center
      top 0
      left 0
      z-index 1
      font-weight bold
      font-size: 32px
    /*px*/
    .icon-houtui
      color #000
      position relative
      float left
      margin-left 0px
      width 50px
      font-size 28px
      z-index 2
    .login-userName
      display inline-block
      float right
      height 100%
      line-height 90px
      margin-right 75px
      font-size: 32px /*px*/
      z-index 2
    img
      position absolute
      width 60px
      height 60px
      top 10px
      right 10px
      border-radius 50%
      float right
      vertical-align middle
      z-index 2

</style>
