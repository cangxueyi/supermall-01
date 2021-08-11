import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-types.js'

export default {
	  // mutation唯一的目地就是修改state中的状态
	  // mutation中的每个方法尽可能完成的事件单一一点
	  [ADD_COUNTER](state,payload){
		  payload.count +=1
	  },
	  [ADD_TO_CART](state,payload){
		  state.cartList.push(payload)
	  }
}