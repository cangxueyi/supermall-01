import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-types.js'

export default {
	  addCart(context,payload){
	  		  // 1查找之前数组中是否有该商品
	  		  let oldProduct=context.cartList.find(item => item.id === payload.id)
	  		  // 2判断oldProduct
	  		  if(oldProduct){
	  			  // oldProduct.count += 1
				  context.commit(ADD_COUNTER,oldProduct)
	  		  }else{
	  			  payload.count = 1
	  			  // context.cartList.push(payload)
				  context.commit(ADD_TO_CART,payload)
	  		  }
	  }
}