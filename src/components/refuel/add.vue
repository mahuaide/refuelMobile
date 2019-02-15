<template>
  <transition name="move">
    <div v-show="showFlag" class="add" ref="add">
      <div class="back" @click="hide">
        <i class="iconfont icon-houtui"></i>
      </div>
      <div class="add-title">{{refuelLog.refuel_id?'编辑':'新增'}}记录</div>
      <div style="padding-top:44px">
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue">
        </mt-datetime-picker>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll';
  export default{
    props: ['refuelLog'],
    data: function () {
      return {
        showFlag: false,
        pickerValue:"",
      }
    },
    mounted: function () {
        this.openPicker();
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      show: function () {
        this.showFlag = true;
        this.$nextTick(function () {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.add, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        })
      },
      hide: function () {
        this.showFlag = false;
      },
    },
    components: {
    }
  }
</script>

<style scoped>
  .add {
    position: fixed;
    top: 0px;
    left: 0;
    height: 1200px;
    bottom: 100px;
    z-index: 1200;
    width: 100%;
    background-color: #fff;
  }

  .back {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 50px;
    height: 50px;
    line-height: 54px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    text-align: center;
    z-index: 2;
  }
  .back .icon-houtui {
    color: #fff;
    display: block;
    font-size: 32px;
  }
  .add-title {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 90px;
    line-height: 96px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    background-color:#F8F8F8;
    z-index: 1;
  }
  .move-enter-active, .move-leave-active {
    transition: all 0.2s linear;
  }

  .move-enter, .move-leave-active {
    transform: translate3d(100%,0, 0);
  }

</style>
