import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
