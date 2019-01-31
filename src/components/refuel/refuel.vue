<template>
  <div class="common-wrapper">
    <div class="owner-info">
      <div class="refuel-owner">
        <span><i class="iconfont icon-anquandai "></i>车主：{{$store.state.user.license}}</span>
        <span><i class="iconfont icon-jingdong-jiayouqia-e"></i>加油：{{sum}}元</span>
        <span><i class="iconfont icon-gonglishu"></i>里程：{{$store.state.user.mileage}}公里</span>
        <span><i class="iconfont icon-maiche"></i>车型：{{$store.state.user.carType}}</span>
      </div>
      <div class="refuel-add" :class="[addColor?'touchE':'touchno']" @touchstart="touchS()" @touchend="touchE()">
        <i class="iconfont icon-shiyouhangye"></i>
      </div>
    </div>
    <split></split>
    <transition name="fade">
      <div v-show="dropDown" class="refresh">更新...<i class="iconfont icon-chebaba-jibencanshu rotating"></i></div>
    </transition>
    <div class="refuel-log" ref="log">
      <ul>
        <li v-for="(log,index) in refuelLog" :key="log.refuel_id">
          <p class="refuel-log-oil">
            <span class="refuel-log-staton">
              <i class="iconfont icon-zhongshiyou" v-if="log.refuel_station_id =='10001'"></i>
              <i class="iconfont icon-zhongshihua" v-if="log.refuel_station_id =='10002'"></i>
              <i class="iconfont icon-yangguang" v-if="log.refuel_station_id =='10003'"></i>
              {{log.station_name}}-{{log.station_address}}
            </span>
            <span class="refuel-log-oilType">{{log.oil_type}}#</span>
          </p>
          <p class="refuel-log-money">
            <span class="refuel-log-moneyNum">
              <i class="iconfont icon-zhifubao2" v-if="log.pay_type=='alipay'" style="color:#00A1E8"></i>
              <i class="iconfont icon-weixin" v-if="log.pay_type=='wechat'" style="color:#00BE3C"></i>
              <i class="iconfont icon-xinyongqiahuankuan" v-if="log.pay_type=='card'" style="color:#CEB37B"></i>
              <i class="iconfont icon-xianjin2" v-if="log.pay_type=='cash'" style="color:#AB4559"></i>
              {{log.pay_money}}元
            </span>
            <span class="refuel-log-oilli">{{log.liters ? log.liters : '--'}}升</span>
          </p>
          <p class="refuel-log-time">
            <span class="refuel-log-distance">{{log.mileage ? log.mileage : '--'}}公里</span>
            <span class="refuel-log-date">{{log.refuel_time | timeFormate('YYYY-MM-DD')}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="showMore" v-show="dropUp && !noMore">{{moreText}}...<i
      class="iconfont icon-chebaba-jibencanshu rotating"></i></div>
    <div class="showMore" v-show="noMore">没有更多</div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {getRefuelLogAll} from '../../http/api'
  import Bscroll from 'better-scroll';
  import split  from  '../common/split.vue'
  export default{
    data(){
      return {
        addColor: 0,
        dropDown: false,
        dropUp: false,
        noMore: false,
        page: 1,
        pageSize: 5,
        count: 0,
        sum: 0,
        refuelLog: [],
        moreText: '加载中...',
        vueScroll:{}
      }
    },
    methods: {
      _getRefuelLogAll(){
        getRefuelLogAll({page: this.page, pageSize: this.pageSize}).then(res => {
          let {code, log, count, sum, errMsg} = res.data;
          if (code == 200) {
            this.refuelLog = this.refuelLog.concat(log);
            this.count = count;
            this.sum = sum.toFixed(2);
            this.page++;
            this.dropUp = false;
            this.vueScroll.enable();
          } else {
            this.$notify({
              title: 'wrong',
              message: errMsg || 'getRefuelLogAll error!',
              type: 'error'
            })
          }
        })
      },
      touchS(){
        this.addColor = 1;
      },
      touchE(){
        this.addColor = 0;
      }
    },
    mounted(){
      let _this = this;
      this._getRefuelLogAll();
      this.$nextTick(() => {
        let footer = document.getElementById('footer');
        let header = document.getElementById('header');
        let log = this.$refs.log.offsetTop;
        this.$refs.log.style.height = (window.innerHeight - log - footer.clientHeight) + 'px'
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.log, {
            click: true,
            scrollY: true,
            probeType: 3,
            bounce: {
              top: true,
              bottom: true,
              left: false,
              right: false
            }
          })
          _this.vueScroll = this.scroll;
        } else {
          this.scroll.refresh();
        }
        this.scroll.on('scroll', (pos) => {
          if (pos.y > 50) {
            this.dropDown = true
          } else {
            this.dropDown = false
          }
          if (this.scroll.maxScrollY > pos.y + 10) {
            _this.dropUp = true;
            _this.moreText = '松开加载更多'
          } else {
            _this.dropUp = false;
            _this.moreText = '加载中...'
          }
        })
        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.dropDown = false
          }
          //上拉加载 总高度>下拉的高度+10 触发加载更多
          if (this.scroll.maxScrollY > pos.y + 10) {
            if ((this.page - 1) * this.pageSize < this.count) {
              this.scroll.disable();
              this._getRefuelLogAll();
              this.dropUp = true;
//              this.scroll.refresh()
            } else {
              this.noMore = true;
            }
          } else {
            this.dropUp = false;
            this.noMore = false;
          }
        })
      })

    },
    computed: {}
    ,
    components: {
      split
    }
  }
</script>
<style>
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/mixin.styl"
  .common-wrapper
    .owner-info
      display flex
      height 200px
      .refuel-owner
        flex: 1
        padding 20px 0 20px 40px
        overflow hidden
        > span
          display block
          box-sizing border-box
          height 44px
          font-size 28px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          .iconfont
            color #999
            margin-right 6px
            font-size 32px
      .refuel-add
        flex 0 0 200px
        text-align center
        line-height 212px
        border-left 2px solid #F8F8F8
        transition all 0.2s ease-in-out
        .iconfont
          font-size 120px
      .touchE
        color red
        background-color #ddd
      .touchno
        color #000
        background-color #fff
    .refresh
      width 100%
      height 30px
      text-align center
      font-size 24px
      line-height 32px
      color #999
      .iconfont
        font-size 26px
    .fade-enter-active, .fade-leave-active {
      transition: opacity .6s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
      opacity: 0;
    }
    .showMore
      position relative
      top -32px
      left 0
      width 100%
      height 30px
      text-align center
      font-size 24px
      line-height 32px
      color #999
      .iconfont
        font-size 26px
    .refuel-log
      width 100%
      font-size 26px
      letter-spacing 0
      overflow hidden
      > ul
        padding 28px 20px 28px 16px
        > li
          background-color #f6f6f6
          width 100%
          padding 20px
          box-sizing border-box
          height 220px
          margin-bottom 20px
          border-radius 20px
          box-shadow 5px 5px 5px #999
          .refuel-log-oil
            box-sizing border-box
            width 100%
            height 50px
            line-height 46px
            .refuel-log-staton
              display block
              float left
              font-size 30px
              .iconfont
                font-size 36px
                margin-right 8px
                color red
                vertical-align top
              .icon-zhongshihua, .icon-yangguang
                font-size 38px

            .refuel-log-oilType
              display block
              float right
              font-size 30px
          .refuel-log-money
            box-sizing border-box
            width 100%
            height 80px
            padding 0 50px
            line-height 76px
            .refuel-log-moneyNum
              display bolck
              float left
              font-size 32px
              .iconfont
                font-size 40px
                margin-right 8px
                vertical-align middle
            .refuel-log-oilli
              display block
              float right
              font-size 30px
          .refuel-log-time
            box-sizing border-box
            width 100%
            height 50px
            line-height 50px
            .refuel-log-distance
              display block
              float left
              font-size 30px
            .refuel-log-date
              display block
              float right
              font-size 30px
</style>

