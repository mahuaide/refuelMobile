<template>
  <div class="limit-wrapper">
    <div class="limit-position">
      <i class="iconfont icon-jinzhi"></i>
      <span class="limit-position-text" v-if="sysWeek !=0 && sysWeek !=6">今日限行尾号 {{limits.limit_num[sysWeek - 1][0]}} 和 {{limits.limit_num[sysWeek - 1][1]}}</span>
      <span class="limit-position-text" v-else>周末不限行</span>
    </div>
    <split></split>
    <template v-for="(limit,index) in limits.limit_num">
      <div class="limit-unit">
        <p class="limit-week"><i class="iconfont icon-jinzhi"
                                 v-show="sysWeek==index+1"></i>星期{{index + 1 == 1 ? '一' : index + 1 == 2 ? '二' : index + 1 == 3 ? '三' : index + 1 == 4 ? '四' : index + 1 == 5 ? '五' : ''}} <span
          v-show="sysWeek==index+1">(今日限行)</span></p>
        <div class="limit-num-content">
          <div class="limit-num">{{limit[0]}}</div>
          <div class="limit-num">{{limit[1]}}</div>
        </div>
      </div>
      <split></split>
    </template>
    <p class="limit-time">本轮周期:{{limits.limit_from}}-{{limits.limit_to}}</p>
    <p class="limit-text">早7点至晚8点，限行机动车（含临时号牌）禁止在五环路以内道路行驶。</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import split  from  '../../common/split.vue'
  export default{
    data(){
      return {
        sysWeek: 1,
        limits: {
          limit_from: "2019年1月7日",
          limit_to: "2019年4月7日",
          limit_num: [
            [1, 6], [2, 7], [3, 8], [4, 9], [5, 0]
          ]
        }
      }
    },
    methods: {},
    mounted(){
      this.sysWeek = new Date().getDay();
    },
    computed: {},
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .limit-wrapper
    padding 90px 0 50px 0
    .limit-position
      display flex
      width 100%
      height 80px
      line-height 86px
      box-sizing border-box
      padding 0 30px
      .icon-jinzhi
        flex 0 0 30px
        font-size 40px
        color red
      .limit-position-text
        flex 0 0 1
        text-align left
        display inline-block
        margin-left 16px
        height 100%
        font-size 28px
        vertical-align top
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .limit-unit
      width 100%
      height 220px
      box-sizing border-box
      padding 20px
      .limit-week
        width 100%
        text-align center
        font-size 36px
        height 60px
        padding 0
        margin 0
        .icon-jinzhi
          font-size 36px
          color red
          margin-right 4px
      .limit-num-content
        display flex
        .limit-num
          flex 1
          text-align center
          font-size 80px
          height 120px
          line-height 128px
        .limit-num:first-child
          border-right 1px solid #ddd
    .limit-time
      text-align center
      font-size 24px
      color: #999
      padding 20px 0 0 0
    .limit-text
      text-align center
      font-size 24px
      color: #999
      padding 20px 40px 0 40px
      line-height 30px
</style>
