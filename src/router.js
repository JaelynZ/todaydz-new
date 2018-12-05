import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hot from './views/Hot.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: "homeLink",
    component: Home
  }, {
    path: '/hot',
    name: "hotLink",
    component: Hot
  }, {
    path: '*',
    redirect: '/home'
  }]
})