<template>
  <div>
    <div class="project-list">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <ul>
          <li v-for="project in list">
            <div>
              <h3 class="project-Name" @click.stop="show(project)">{{project.projectName}}</h3>
              <div class="role" v-show="project.userRole && project.userRole !='1'">{{project.userRole | userRole}}
              </div>
              <p class="project-detail">
                <span>人数：{{project.memberNumber}}</span>
                <span>迭代：{{project.sprint.all}}</span>
                <span>需求：{{project.backlog.all}}</span>
                <span>故事：{{project.story.all}}</span>
              </p>
            </div>
            <div class="project-time-view">
              <span :class="['iconfont',project.favorite==0?'icon-star-border':'icon-star']"
                    @click.stop="_follow(project)"></span>
              <span class="view" @click="view(project)">查看详情</span>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
    <mt-popup style="width: 100%"
              v-model="popupVisible"
              position="top"
              :modal="false">
      <div class="project-follow-tip">{{follow_tip}}</div>
    </mt-popup>
    <ai-view :show="show_view" @closeView="closeView"></ai-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {
    getProjects,
    selectProject,
    createProject,
    getUsers,
    follow,
    unfollow,
    getProjectById,
  } from '../../http/api'
  import projectDetail from './projectDetail.vue'
  import view from '../view/view.vue'
  export default{
    data(){
      return {
        popupVisible: false,
        projectDetailVisible: false,
        follow_tip: "",
        list: [],
        projectDetails: {},
        show_view:false
      }
    },
    methods: {
      closeView(){
        this.show_view = false;
      },
      show(project){
        this.show_view = !this.show_view;
      },
      view(project){
        this.projectDetailVisible = true;
        this.$router.push({path: '/project/projectDetail', query: {projectId: project.projectId}})
      },
      loadTop(){
        this._getProjects();
      },
      _getProjects(){
        getProjects().then(res => {
          let {hasError, data, message} = res.data;
          if (!hasError) {
            this.list = data;
            this.$refs.loadmore.onTopLoaded();
          }
        })
      },
      _follow(project){
        let params = {
          projectId: project.projectId
        }
        if (project.favorite == "0") {
          follow(params).then(res => {
            let {hasError} = res.data;
            if (!hasError) {
              project.favorite = "1";
              this.follow_tip = "收藏成功"
              this.popupVisible = true;
              let _this = this;
              setTimeout(function () {
                _this.popupVisible = false;
              }, 1500)
            }
          })
        } else {
          unfollow(params).then(res => {
            let {hasError} = res.data;
            if (!hasError) {
              project.favorite = "0";
              this.follow_tip = "取消收藏"
              this.popupVisible = true;
              let _this = this;
              setTimeout(function () {
                _this.popupVisible = false;
              }, 1500)
            }
          })
        }
      },
    },
    mounted(){
      this._getProjects();
    },
    computed: {},
    components: {
      'ai-view':view
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .project-list
    width 100%
    height auto
    margin-top 80px
    ul
      box-sizing border-box
      width 100%
      padding 0 20px
      height auto
      li
        position relative
        box-sizing border-box
        padding 20px 0 0 0
        width 100%
        min-height 200px
        border-bottom 1px solid #e4393c
        .project-Name
          width 80%
          min-height 100px
          font-size 32px
        .role
          position absolute
          right 0px
          top 10px
          width 48px
          height 48px
          line-height 48px
          color #000
          background-color #ddd
          border-radius 50%
          text-align center
          font-family "Microsoft YaHei"
        .project-detail
          display flex
          height 50px
          line-height 50px
          border-bottom 1px solid #EEE
          span
            flex: 1
            font-size: 28px
        /*px*/
        .project-time-view
          height 50px
          line-height 50px
          span
            display inline-block
          .iconfont
            float right
            font-size: 40px /*px*/
            color #666
          .icon-star
            color #EB3738
          .view
            float left
            color red

  .project-follow-tip
    width 100%
    height 80px
    background-color rgba(0, 0, 0, 0.8)
    color #fff
    font-size: 32px
    text-align center
    line-height 80px

  .mint-popup-3
    box-sizing border-box
    width 100%
    height 100%
    background-color #fff
    margin-top 80px
    padding-bottom 80px
    overflow-y auto
</style>
