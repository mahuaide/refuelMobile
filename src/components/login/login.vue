<template>
  <div>
    <div class="logo">
      <img src="../../../static/img/佳油宝.png" alt="">
      <p class="sys-name"><span style="color:#CE1B22">+.</span>U</p>
      <p class="sys-name">{{$t('login.projectName')}}</p>
    </div>
    <div class="user">
      <input type="text" v-model.trim="account" :placeholder="$t('login.placeHolderUserName')">
      <input type="password" v-model.trim="password" :placeholder="$t('login.placeHolderPassword')">
    </div>
    <div class="login-btn" @click="loginAction()">
      {{$t('login.loginBtn')}}
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {login,getLoginUserInfo} from '../../http/api';
  import * as types from '../../store/type'
  import router from '../../router'
  import {Toast} from 'mint-ui';
  import {lsRead} from '../../common/js/ls'
  export default{
    data(){
      return {
        account: "",
        password: "",
      }
    },
    methods: {

      loginAction(){
        if (!this.account || this.account.length == 0) {
          Toast({
            message:this.$t('login.userNameTip'),
            duration: 2000
          });
          return;
        }
        if (!this.password || this.password.length == 0) {
          Toast({
            message: this.$t('login.passwordTip'),
            duration: 2000
          });
          return;
        }
        let params = {
          userName: this.account,
          password: this.password
        }
        let _this = this;
        login(params).then(function (res) {
          let {code, data, errMsg} = res.data;
          if (code == 200) {
            getLoginUserInfo().then(res => {
              let {code, data, errMsg} = res.data;
              if (code == 200) {
                _this.$store.commit(types.LOGIN, data[0]);
                _this.$router.push('/home/main');
              }
            })
          } else {
            Toast({
              message: _this.$t('login.loginErrorTip'),
              duration: 2000
            });
          }
        }).catch(e => {
          Toast({
            message: this.$t('login.netWorkErrorTip'),
            duration: 2000
          });
        })
      }
    },
    mounted(){
      this.account = lsRead('account')
      this.password = lsRead('password')
    },
    computed: {},
    components: {}
  }
</script>
<style>

</style>
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
  .logo
    width 100%
    height 500px
    padding 100px 0 0 0
    text-align center
    animation logoImg 0.8s
    img
      width 120px
      height 120px
      margin-bottom 50px

    .sys-name
      font-size: 44px;
      margin 40px 0 10px 0
    .test
      width 50px
      height 50px
      border 1px solid #ddd

  /*px*/
  .user
    margin 0 auto
    width 80%
    input
      width 100%
      height 40px
      line-height 40px
      font-size: 32px; /*px*/
      margin-bottom 80px
      outline none
      border-bottom 1px solid #ddd

  .login-btn
    margin 50px auto
    width 50%
    height 80px
    color #fff
    background-color #000
    opacity 0.5
    border-radius 10px
    line-height 80px
    text-align center
    opacity 0.8
    font-size: 32px;

  /*px*/

</style>
