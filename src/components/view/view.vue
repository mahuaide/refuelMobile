<template>
  <transition name="move">
  <div class="view-wrapper" v-show="show">
    <p>隐藏式跳转，无法回退</p>
    <button @click="close">返回</button>
  </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default{
      props:['show'],
      data(){
        return {
        }
      },
      methods:{
        close(){
            this.$emit('closeView')
        }
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
  .move-enter-active, .move-leave-active {
    transform:translate3d(0,0,0)
  }
  .move-enter, .move-leave-to {
    transform:translate3d(100%,0,0)
  }
  .view-wrapper
    position fixed
    top 80px
    left 0
    width 100%
    min-height 100%
    background-color #fff
    transition: all .4s;
    p
      text-align center
</style>
