<template>
  <div id="app">
    <router-view/>
    <loading v-delay-loading="{show:isLoading,time:700}" ></loading>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      isLoading(){
        return this.$store.state.loading.filter(load => {
            return load.loading
          }).length > 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
