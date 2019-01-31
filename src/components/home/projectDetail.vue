<template>
  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <div class="animated">
      <div class="detail-content ">
        <div class="unit">
          <div class="title">项目名称：</div>
          <div class="content">
            {{projectDetails.projectName}}
          </div>
        </div>
        <div class="unit">
          <div class="title">项目描述：</div>
          <div class="content">
            {{projectDetails.projectDesc}}
          </div>
        </div>
        <div class="unit">
          <div class="title">SM：</div>
          <div class="content">
            <ul>
              <li v-for="user in projectDetails.users" v-show="user.roleType==3">
                <img :src="user.photo || '/static/img/default-head.png'" alt=""><span>{{user.userName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="unit">
          <div class="title">PO：</div>
          <div class="content">
            <ul>
              <li v-for="user in projectDetails.users" v-show="user.roleType==2">
                <img :src="user.photo || '/static/img/default-head.png'" alt=""><span>{{user.userName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="unit">
          <div class="title">BA：</div>
          <div class="content">
            <ul>
              <li v-for="user in projectDetails.users" v-show="user.roleType==4">
                <img :src="user.photo || '/static/img/default-head.png'" alt=""><span>{{user.userName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="unit">
          <div class="title">项目成员：</div>
          <div class="content">
            <ul>
              <li v-for="user in projectDetails.users" v-show="user.roleType==1">
                <img :src="user.photo || './static/img/default-head.png'" alt=""><span>{{user.userName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="unit-switch">
          <div class="title-switch">
            是否公开：
          </div>
          <div class="content-switch">
            <mt-switch v-model=isopen></mt-switch>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {
    getProjectById,
  } from '../../http/api'
  export default{
    data(){
      return {
        projectDetails: {}
      }
    },
    methods: {},
    mounted(){
      getProjectById({id: this.$route.query.projectId}).then(res => {
        let {hasError, data, error} = res.data;
        if (!hasError) {
          this.projectDetails = data;
        } else {
        }
      })
    },
    computed: {
      isopen(){
        return this.projectDetails.isOpen == 1 ? true : false;
      }
    },
    components: {},
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .animated
    animation-duration: .4s;
  .detail-content
    width 100%
    height 100%
    background-color #ddd
    box-sizing border-box
    margin-top 80px
    .unit
      box-sizing border-box
      width 100%
      height auto
      padding 10px 10px
      background-color #fff
      margin-bottom 10px
      .title
        box-sizing border-box
        height 60px
        border-bottom 1px solid #ddd
        font-size 32px
        line-height 60px
        font-weight bold
      .content
        box-sizing border-box
        padding 20px 20px 10px 50px
        font-size 28px
        line-height 32px
        word-break break-all
        ul
          li
            height 50px
            line-height 50px
            margin-bottom 10px
            img
              width 50px
              height 50px
              border-radius 50%
              margin-right 10px
            span
              display inline-block
              height 50px
              vertical-align top
    .unit-switch
      display flex
      box-sizing border-box
      width 100%
      height auto
      padding 10px 10px
      background-color #fff
      margin-bottom 10px
      align-items center
      .title-switch
        flex 8
        height 60px
        font-size 32px
        line-height 60px
        font-weight bold
      .content-switch
        flex: 1
        line-height 60px
</style>
