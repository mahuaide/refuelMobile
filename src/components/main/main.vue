<template>
  <div class="common-wrapper main-wrapper">
   <div class="main-bar" ref="mainBar">
     <ul id="barList">
       <router-link tag="li" to="/home/main" exact>今日油价</router-link>
       <router-link tag="li" to="/home/main/limit" exact>今日限号</router-link>
       <router-link tag="li" to="/home/main/lot" exact>摇号政策</router-link>
       <router-link tag="li" to="/home/main/know" exact>懂车帝</router-link>
       <router-link tag="li" to="/home/main/picture" exact>图片</router-link>
       <router-link tag="li" to="/home/main/second" exact>二手车</router-link>
       <router-link tag="li" to="/home/main/ecar" exact>新能源</router-link>
     </ul>
   </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
      }
    },
    methods: {},
    mounted(){
      this.$nextTick(function () {
        let UlWith = 0;
        let wrapper = this.$refs.mainBar;
        let barUl = wrapper.getElementsByTagName('ul')[0];
        let barLi = barUl.getElementsByTagName('li');
        for(let i=0;i<barLi.length;i++){
          UlWith += parseFloat(getComputedStyle(barLi[i]).width)
        }
        barUl.style.width = UlWith+parseFloat(getComputedStyle(barUl).paddingRight)+parseFloat(getComputedStyle(barUl).paddingLeft)+'px';
        this.mainBarScroll = new BScroll(this.$refs.mainBar,{
          startX:0,
          click:true,
          scrollX:true,
          scrollY:false,
          eventPassthrough:'vertical',
          click:true,
          bounce: {
            top: true,
            bottom: true,
            left: false,
            right: true
          }
        })
      })

    },
    computed: {},
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .main-wrapper
    width 100%
    .main-bar
      width 100%;
      height 90px
      background-color #fff
      overflow: hidden;
      border-bottom  1px solid #eee
      position fixed
      z-index 1100
      >ul
        padding 0 30px
        height 90px
        >li
          display inline-block
          box-sizing border-box
          vertical-align top
          height 90px
          padding 0px 40px 0px 0
          width auto
          line-height:96px
          font-size 30px
        >li.exactActive
          color #CE1B22
          font-weight 700
</style>
