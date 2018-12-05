import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ckq from 'vue-ckq-layer'
import VueResource from 'vue-resource'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs=qs

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ckq)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
