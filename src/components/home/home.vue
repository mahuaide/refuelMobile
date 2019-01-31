<template>
  <div class="home-wrapper">
    <ai-header></ai-header>
    <router-view></router-view>
    <ai-footer></ai-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  export default{
    data(){
      return {}
    },
    methods: {},
    mounted(){

    },
    computed: {},
    components: {
      'ai-header': header,
      'ai-footer':footer
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-wrapper
    width 100%
    height 100%
    .common-wrapper
      padding-top:90px
      padding-bottom 100px
</style>
