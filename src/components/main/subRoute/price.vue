<template>
  <div class="price-wrapper">
    <div class="price-position">
      <i class="iconfont icon-dingweiweizhi"></i>
      <span class="price-position-text">北京市西城区红莲南路</span>
    </div>
    <split></split>
    <template v-for="(price,index) in price.prices">
      <div class="price-unit">
        <div class="price-oil-num">
          <i class="iconfont icon-jiayouqia"></i>
          <span class="unit-text">{{price.type}}</span>
        </div>
        <div class="price-oil-price">
          <i class="iconfont icon-youjiaguanli"></i>
          <span class="unit-text">{{price.price}}元/升</span>
        </div>
      </div>
      <split></split>
    </template>
    <p class="price-time">本次油价调整日期:2019年1月12日</p>
    <p class="price-time">下次油价调整日期:2019年1月25日</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import split  from  '../../common/split.vue'
  export default{
    data(){
      return {
        price: {
          price_time_from: "2019年1月12日",
          price_time_to: "2019年1月25日",
          prices:[
            {type:"92#汽油",price:6.44},
            {type:"95#汽油",price:6.86},
            {type:"98#汽油",price:7.84},
            {type:"0#柴油",price:6.09},
          ]
        }
      }
    },
    methods: {},
    mounted(){
    },
    computed: {},
    components: {
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .price-wrapper
    padding 90px 0 50px 0

  .price-position
    display flex
    width 100%
    height 80px
    line-height 86px
    box-sizing border-box
    padding 0 30px
    .icon-dingweiweizhi
      flex 0 0 30px
      font-size 40px
    .price-position-text
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

  .price-unit
    display flex
    width 100%
    height 280px
    box-sizing border-box
    padding 30px
    text-align center
    .price-oil-num
      flex 1
      line-height 234px
      border-right 1px solid #ddd
      .icon-jiayouqia
        font-size 80px
        color #CE1B22
      .unit-text
        font-size 50px
    .price-oil-price
      flex 1
      line-height 234px
      .icon-youjiaguanli
        font-size 80px
        color rgb(255, 215, 0)
      .unit-text
        font-size 50px

  .price-time
    text-align center
    font-size 24px
    color: #999
    padding 20px 0 0 0
</style>
