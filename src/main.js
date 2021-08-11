import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
