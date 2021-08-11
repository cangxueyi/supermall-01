<template>
  <div class="cart">
	  <nav-bar>
		  <div slot='center' class="nav-bar">购物车({{cartLengh}})</div>
	  </nav-bar>
	  <cart-bottom-bar/>
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import CartBottomBar from './childComp/cartBottomBar.vue'
	import {mapGetters} from 'vuex'
	
  export default {
    name:'Cart',
	components:{
		NavBar,
		CartBottomBar
	},
	computed:{   //mapGetters辅助函数仅仅是将store中的getters映射到部分计算属性中
		// 方法一
		...mapGetters(['cartLengh'])
		// 方法二  上面用lengh即可
		// ...mapGetters({
		// 	lengh:'cartLengh',
		// 	list:'cartList'
		})
	}
  }
</script>

<style scoped>
	.nav-bar{
		background-color: var(--color-tint);
		color: #fff;
	}
</style>
