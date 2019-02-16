<template>
  <transition name="move">
    <div v-show="showFlag" class="wrapper">
      <div class="add-title">
        <div class="back" @click="hide">
          <i class="iconfont icon-houtui"></i>
        </div>
        {{refuelLog.refuel_id ? '编辑' : '新增'}}记录
      </div>
      <div>
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue"
          @confirm="handleConfirm"
        >
        </mt-datetime-picker>
      </div>
      <div ref="add" class="add">
        <div class="add-wrapper">
          <mt-field label="加油日期" placeholder="" v-model="refuelTimeshow" @click.native="openPicker()"
                    :readonly=true></mt-field>
          <mt-field label="付款金额" placeholder="" v-model="refuelLog.pay_money"></mt-field>
          <mt-radio
            title="付款方式"
            v-model="refuelLog.pay_type"
            :options="payTypeOptions">
          </mt-radio>
          <mt-radio
            title="油号"
            v-model="refuelLog.oil_type"
            :options="[92,95,98]">
          </mt-radio>
          <mt-field label="升" placeholder="" v-model="refuelLog.liters"></mt-field>
          <mt-radio
            title="加油站"
            v-model="refuelLog.refuel_station_id"
            :options="stationOptions">
          </mt-radio>
          <mt-field label="里程" placeholder="" v-model="refuelLog.mileage"></mt-field>
          <div class="refuel-save" @click="save">保存</div>
          <div class="refuel-del" v-if="refuelLog.refuel_id" @click="del">删除</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll';
  import {timeFormate} from '../../filters/time'
  import {getStationAll, updateRefuelLogById, delRefuelLogById, newRefuelLog} from '../../http/api'
  import split  from  '../common/split.vue'
  export default{
    props: ['refuelLog', 'pickerValue'],
    data: function () {
      return {
        showFlag: false,
        payTypeOptions: [
          {
            label: '现金',
            value: 'cash'
          },
          {
            label: '微信',
            value: 'wechat',
          },
          {
            label: '支付宝',
            value: 'alipay'
          },
          {
            label: '银行卡',
            value: 'card'
          }
        ],
        stationOptions: []
      }
    },
    mounted: function () {
      getStationAll().then(res => {
        let {code, data, errMsg} = res.data;
        if (code == 200) {
          this.stationOptions = data.map((st) => {
            return {value: st.station_id, label: st.station_name}
          })
        } else {
          this.$notify({
            title: 'wrong',
            message: errMsg || 'getStationAll error!',
            type: 'error'
          })
        }
      })
    },
    methods: {
      save(){
        let form = Object.assign({}, this.refuelLog);
        form.refuel_time = new Date(form.refuel_time).getTime();
        if (!this.refuelLog.refuel_id) {
          newRefuelLog(form).then(res => {
            let {code, data, errMsg} = res.data;
            if (code == 200) {
              form.refuel_id = data.refuel_id;
              this.stationOptions.forEach(st=>{
                  if(st.value == form.refuel_station_id){
                    form.station_name = st.label;
                  }
              })
              this.$emit("newRefuel", form);
              this.hide();
            } else {
            }
          })
        } else {
          form.id = this.refuelLog.refuel_id;
          updateRefuelLogById(form).then(res => {
            let {code, data, errMsg} = res.data;
            if (code == 200) {
              this.stationOptions.forEach(st=>{
                if(st.value == form.refuel_station_id){
                  form.station_name = st.label;
                }
              })
              this.$emit('updateRefuel', form);
              this.hide()
            } else {
            }
          })
        }
      },
      del(){
        delRefuelLogById({id: this.refuelLog.refuel_id}).then(res => {
          let {code, data, errMsg} = res.data;
          if (code == 200) {
            this.$emit('delRefuel', this.refuelLog.refuel_id);
            this.hide();
          } else {
          }
        })
      },
      handleConfirm(date){
        this.refuelLog.refuel_time = date;
      },
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
    components: {},
    computed: {
      refuelTimeshow(){
        return timeFormate(new Date(this.refuelLog.refuel_time).getTime(), 'YYYY年MM月DD日')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 100px;
    z-index: 1200;
    width: 100%;
    background-color: #fff;
  }

  .add {
    position: fixed;
    top: 120px;
    left: 0;
    bottom: 200px;
    width: 100%;
    background-color: #fff;
  }

  .add-title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 90px;
    line-height: 96px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    z-index: 1300;
    background-color: #F8F8F8;
  }

  .add-title .back {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    line-height: 54px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    text-align: center;
  }

  .add-title .back .icon-houtui {
    color: #fff;
    display: block;
    font-size: 32px;
  }

  .add .add-wrapper {
    padding: 0 26px 0 26px;
  }

  .move-enter-active, .move-leave-active {
    transition: all 0.2s linear;
  }

  .move-enter, .move-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .refuel-save, .refuel-del {
    margin: 60px auto;
    width: 50%;
    height: 80px;
    color: #fff;
    background-color: #000;
    opacity: 0.5;
    border-radius: 10px;
    line-height: 80px;
    text-align: center;
    opacity: 0.8;
    font-size: 32px;
  }

  .refuel-del {
    background-color: #CE1B22;
  }
</style>
