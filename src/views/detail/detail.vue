<template>
	<div name="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper></detail-swiper>
		<p>商品详细信息</p>
	</div>
</template>

<script>
	import DetailNavBar from './childComp/detailNavBar.vue'
	import DetailSwiper from './childComp/detailSwiper.vue'
	import {getDetail} from 'network/detail.js'
	
	export default {
		name:'Detail',
		components:{
			DetailNavBar,
			DetailSwiper
		},
		data() {
			return{
				text:'详细信息···'
			}
		},
		created() {
			//获取数据id
			// this.text = this.$route.query.text
			//获取具体详细数据
		// 	getDetail(this.text).then(res => {
		// 		console.log(this.text)
		// 	})
		}
	}
</script>

<style>
</style>
