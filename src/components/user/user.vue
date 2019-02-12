<template>
  <div class="common-wrapper">
    {{user}}
  </div>
</template>


<script type="text/ecmascript-6">
  import {getLoginUserInfo} from '../../http/api'
  export default{
    data(){
      return {
          user:{}
      }
    },
    mounted(){
      getLoginUserInfo().then(res => {
        let {code, data, errMsg} = res.data;
        if (code == 200) {
          this.user = data[0];
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

