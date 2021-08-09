<template>
	<div name="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper></detail-swiper>
		<p>商品详细信息</p>
		<detail-image-info></detail-image-info>
		<detail-params-info :params-item="paramInfo"></detail-params-info>
		<detail-comment-info></detail-comment-info>
		<good-list :good="recommends"></good-list>
	</div>
</template>

<script>
	import DetailNavBar from './childComp/detailNavBar.vue'
	import DetailSwiper from './childComp/detailSwiper.vue'
	import {getDetail} from 'network/detail.js'
	
	import DetailImageInfo from './childComp/detailImageInfo.vue'
	import DetailParamsInfo from './childComp/detailParamsInfo.vue'
	import DetailCommentInfo from './childComp/dateilCommentInfo.vue'
	
	import GoodList from 'components/content/goodList/GoodList.vue'
	
	export default {
		name:'Detail',
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailImageInfo,
			DetailParamsInfo,
			DetailCommentInfo,
			GoodList
		},
		data() {
			return{
				text:'详细信息···',
				topImages:[],
				goodsInfo:{},
				shopInfo:{},
				detailInfo:{},
				itemParams:{},
				commentInfo{}
			}
		},
		created() {
			//获取数据id
			// this.text = this.$route.query.text
			//获取具体详细数据
			// getDetail(this.text).then(res => {
			// 	1获取数据
			// 	const data = res.result
			// 	2取出轮播图数据
			// 	this.topImages = data.itemInfo.topImages
			// 	3创建商品对象
			// 	this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			// 	4取出店铺信息
			// 	this.shopInfo = data.shopInfo
			// 	5获取详细数据
			// 	this.detailInfo = data.detailInfo
			// 	6取出参数信息
			// 	this.itemParams = data.itemParams
			// 	7获取评论信息
			// 	if(data.rate.cRate!==0){
			// 		this.commentInfo = data.rate.list[0]
			// 	}
			// })
		}
	}
</script>

<style>
</style>
