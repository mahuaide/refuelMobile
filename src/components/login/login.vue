<template>
  <div>
    <div class="logo">
      <img src="../../../static/img/佳油宝.png" alt="">
      <p class="sys-name"><span style="color:#CE1B22">+.</span>U</p>
      <p class="sys-name">{{$t('login.projectName')}}</p>
    </div>
    <div class="switch">
      <div @click="switch_login()" :class="[login?'active':'']">登录</div>
      <div @click="switch_register()" :class="[register?'active':'']">注册</div>
    </div>
    <div class="user" v-show="login">
      <input type="text" v-model.trim="account" :placeholder="$t('login.placeHolderUserName')">
      <input type="password" v-model.trim="password" :placeholder="$t('login.placeHolderPassword')">
      <div class="login-btn" @click="loginAction()">
        {{$t('login.loginBtn')}}
      </div>
    </div>
    <div class="register" v-show="register">
        <input v-model.trim="userName" placeholder="用户名：登录时使用" autocomplete="off"></input>
        <input v-model.trim="license" placeholder="车牌号：京X·XXXXX" autocomplete="off"></input>
        <input v-model.trim="carType" placeholder="车型：2018款迈锐宝1.5T豪华" autocomplete="off"></input>
        <input type="password" v-model.trim="register_password" autocomplete="off" placeholder="密码"></input>
        <input type="password" v-model.trim="register_confirmPassword" autocomplete="off" placeholder="确认密码"></input>
      <div class="register-btn" @click="registerAction()">注 册</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {login,getLoginUserInfo,register,checkUserExist} from '../../http/api';
  import * as types from '../../store/type'
  import router from '../../router'
  import {Toast} from 'mint-ui';
  import {lsRead} from '../../common/js/ls'
  export default{
    data(){
      return {
        account: "",
        password: "",
        login:true,
        register:false,
        userName:"",
        license:"",
        carType:"",
        register_password:"",
        register_confirmPassword:""
      }
    },
    methods: {
      registerAction(){
        if(this.userName ==""){
          Toast({
            message:"请输入用户名！",
            duration: 2000
          });
          return
        }else if(this.userName.length>10){
          Toast({
            message:"用户名不得超过10个字符",
            duration: 2000
          });
          return
        }
        if(this.license ==""){
          Toast({
            message:"请输入车牌号！",
            duration: 2000
          });
          return
        }else if(this.license.length>10){
          Toast({
            message:"车牌号不得超过10个字符！",
            duration: 2000
          });
          return
        }
        if(this.carType ==""){
          Toast({
            message:"请输入车型！",
            duration: 2000
          });
          return
        }else if(this.carType.length>100){
          Toast({
            message:"车型不得超过100个字符！",
            duration: 2000
          });
          return
        }
        if(this.register_password ==""){
          Toast({
            message:"请输入密码！",
            duration: 2000
          });
          return
        }else if(this.register_password.length>6){
          Toast({
            message:"密码不得大于6个字符！",
            duration: 2000
          });
          return
        }
        if(this.register_confirmPassword ==""){
          Toast({
            message:"请确认密码！",
            duration: 2000
          });
          return
        }
        if(this.register_confirmPassword !=this.register_password){
          Toast({
            message:"两次密码不一致！",
            duration: 2000
          });
          return
        }
        let params = {
          userName: this.userName
        }
        checkUserExist(params).then(res => {
          let {data}  = res.data
          if (data[0] && data[0].count >0) {
            Toast({
              message:"用户名已存在",
              duration: 2000
            });
            return
          } else {
            register({
              userName:this.userName,
              license:this.license,
              carType:this.carType,
              password:this.register_password
            }).then(res=>{
              let {code,data,errMsg} = res.data;
              if(code ==200){
                getLoginUserInfo().then(res => {
                  let {code, data, errMsg} = res.data;
                  if (code == 200) {
                    this.$store.commit(types.LOGIN, data);
                    this.$router.push('/home/main');
                  }
                })
              }else{
                Toast({
                  message:errMsg,
                  duration: 2000
                });
                return
              }
            })
          }
        })
      },
      switch_login(){
        this.login = true;
        this.register = false;
      },
      switch_register(){
        this.login = false;
        this.register = true;
      },
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
                _this.$store.commit(types.LOGIN, data);
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
    height 420px
    padding 80px 0 0 0
    text-align center
    animation logoImg 0.8s
    img
      width 120px
      height 120px
      margin-bottom 20px
    .sys-name
      font-size: 44px;
      margin 40px 0 10px 0
    .test
      width 50px
      height 50px
      border 1px solid #ddd

  .switch
    width 100%
    height 50px
    display flex
    margin-bottom 80px
    div
      flex 1
      text-align center
      border-bottom 2px solid #ddd
      line-height 40px
      font-size 34px
    .active
      font-weight bold
      color #CE1B22
      border-bottom-color #CE1B22
      border-bottom-width 2px
  /*px*/
  .register
    margin 0 auto
    width 80%
    input
      width 100%
      height 44px
      line-height 44px
      font-size: 32px; /*px*/
      margin-bottom 20px
      outline none
      border-bottom  1px solid #ddd
      padding-bottom 12px
    .register-btn
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
  .user
    margin 0 auto
    width 80%
    input
      width 100%
      height 44px
      line-height 44px
      font-size: 32px; /*px*/
      margin-bottom 80px
      outline none
      border-bottom 1px solid #ddd
      padding-bottom 12px
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
