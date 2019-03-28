/**
 * Created by Administrator on 2019/3/13 0013.
 */

import Vue from 'vue'

import VueRouter  from 'vue-router'

import Home from '../pages/home.vue'
import Shop from '../pages/shop.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes :[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]

})
