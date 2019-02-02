import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import home from '../components/home/home.vue'
import main from '../components/main/main.vue'
import refuel from '../components/refuel/refuel.vue'
import repair from '../components/repair/repair.vue'
import user from '../components/user/user.vue'
import price from '../components/main/subRoute/price.vue'
import limit from '../components/main/subRoute/limit.vue'
import lot from '../components/main/subRoute/lot.vue'
import know from '../components/main/subRoute/know.vue'
import picture from '../components/main/subRoute/picture.vue'
import second from '../components/main/subRoute/second.vue'
import ecar from '../components/main/subRoute/ecar.vue'
import welcome from '../components/home/welcome.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  linkExactActiveClass:"exactActive",
  routes: [
    {
      path: '/',
      component: welcome
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/home',
      component: home,
      children:[
        {path:'main',name:'首页',component:main,children:[
          {path:'',name:'今日油价',component:price},
          {path:'limit',name:'今日限号',component:limit},
          {path:'lot',name:'摇号政策',component:lot},
          {path:'know',name:'懂车帝',component:know},
          {path:'picture',name:'图片',component:picture},
          {path:'second',name:'二手车',component:second},
          {path:'ecar',name:'新能源',component:ecar},
        ]},
        {path:'refuel',name:'加油记录',component:refuel},
        {path:'repair',name:'保养维修',component:repair},
        {path:'user',name:'个人信息',component:user},
      ]
    },
  ]
})
