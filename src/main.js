// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import filters from './filters'
import './common/font/font.css'
import '../static/css/reset.css'
import './common/css/common.styl'
import 'lib-flexible'
import 'animate.css'
import  i18n from './common/lang/index'
import fastclick from 'fastclick'
import loading from './components/loading'
import {Loadmore, Popup, Switch,DatetimePicker,Field,Radio } from 'mint-ui';

fastclick.attach(document.body);
var t = null;
Vue.config.productionTip = false
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.component(Loadmore.name, Loadmore);
Vue.component(Popup.name, Popup);
Vue.component(Switch.name, Switch);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.use(loading);

Vue.directive('delay-loading', {componentUpdated:function (el, binding) {
   t = setTimeout(() => {
    if (binding.value.show && t) {
      el.style.display = "block"
    }
  }, binding.value.time);
  if(!binding.value.show){
    setTimeout(()=>{
      el.style.display = "none";
    },5100)
    clearTimeout(t);
    t=null;
  }
}})

router.beforeEach((to, from, next) => {
  store.state.loading=[];
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})
