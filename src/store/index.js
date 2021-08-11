import Vue from 'vue'
import Vuex from 'vuex'

import mutation from './mutation.js'
import action from './actions.js'
import getter from './getter.js'

Vue.use(Vuex)

const state = {
	cartList:[],
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

export default store