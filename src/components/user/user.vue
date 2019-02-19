<template>
  <div class="common-wrapper">
    <div class="user-header">
      <img src="../../../static/img/default-head.png" alt="">
    </div>
    <div class="user-name">{{$store.state.user.userName}}</div>
    <div class="user-info">
      <div class="user-mileage">{{$store.state.user.mileage || 0}} 公里</div>
      <div class="user-license">{{$store.state.user.license}}</div>
      <div class="user-payTotal">{{$store.state.user.payTotal || 0}} 元</div>
    </div>
    <split></split>
    <div class="user-info-unit">
      资料修改
      <i class="iconfont icon-xiangyou"></i>
    </div>
    <split></split>
    <div class="user-info-unit">
      密码重置
      <i class="iconfont icon-xiangyou"></i>
    </div>
    <split></split>
    <div class="user-info-unit">
      当前版本
      <i class="iconfont icon-xiangyou"></i>
    </div>
    <split></split>
    <div class="user-logout" @click="logout">退出</div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {getLoginUserInfo} from '../../http/api'
  import split from '../common/split.vue'
  export default{
    data(){
      return {}
    },
    mounted(){
    },
    methods:{
      logout(){
       this.$router.replace('/login')
      }
    },
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .user-header
    img
      display block
      width 120px
      height 120px
      margin 90px auto 30px auto
      border-radius 50%

  .user-name
    width 100%
    text-align center
    height 30px
    line-height 30px
    font-size 32px
  .user-info
    width 100%
    display flex
    margin 30px auto 30px auto
    font-size 28px
    > div
     box-sizing border-box
    .user-mileage
      flex 1.5
      padding-right 20px
      text-align right
    .user-license
      flex 1
      padding 0 10px
      border-left 2px solid #000
      border-right 2px solid #000
      text-align center
    .user-payTotal
      flex 1.5
      padding-left: 20px
      text-align left

  .user-info-unit
    box-sizing border-box
    width 100%
    height 90px
    line-height 94px
    font-size 30px
    padding 0px 20px
    .iconfont
      display inline-block
      height 100%
      font-size 30px
      float right
      color #ddd
  .user-logout {
    margin: 80px auto;
    width: 50%;
    height: 80px;
    color: #fff;
    background-color: #000;
    opacity: 0.5;
    border-radius: 10px;
    line-height: 80px;
    text-align: center;
    opacity: 0.8;
    font-size: 32px;
    background-color: #CE1B22;
  }

</style>

