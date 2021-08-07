<template>
	<div id="home">
		<nav-bar class="home-bar"><div slot="center" class="title">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view />
		<tab-control class="tab-control" 
		:titles="['流行','新款','精选']" 
		@listClick="listClick(index)"></tab-control>
		<!-- <good-list :good="showGood"></good-list> -->
		
		<ul @click="ulClick">
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>标签</li>
			<li>标签</li>
			<li>标签</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
		</ul>
	</div>
</template>

<script>
	import HomeSwiper from './childComp/HomeSwiper'
	import RecommendView from './childComp/RecommendView'
	import FeatureView from './childComp/FeatureView.vue'
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/TabControl/TabControl.vue'
	import GoodList from 'components/content/goodList/GoodList.vue'
	
	import {getHomeMultidata,getHomeGood} from 'network/home.js'
	
	export default {
		name:'Home',
		components:{
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodList
		},
		data(){
			return{
				// result:null
				banners:[],
				recommends:[],
				good:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				// currentType:'pop'
				saveY:0
			}
		},
		// computed:{
		// 	showGood(){
		// 		return this.good[currentType].list
		// 	}
		// },
		created(){
			//请求多个数据
			this.getHomeMultidata()
			//请求商品数据
			// this.getHomeGood('pop')
			// this.getHomeGood('new')
			// this.getHomeGood('sell')
		},
		// activated() {
		// 	this.$refs.scroll.scrollTo(0,this.saveY,0)
		// 	this.$refs.scroll.refresh()
		// },
		// deactivated() {
		// 	this.saveY = this.$refs.scroll.getScrollY()
		// },
		methods:{ 
			/*
				事件监听相关方法
			*/
			// listClick(index){
			// 	switch(index){
			// 		case 0:
			// 			this.currentType = 'pop'
			// 			break
			// 		case 1:
			// 			this.currentType = 'new'
			// 			break
			// 		case 2:
			// 			this.currentType = 'sell'
			// 			break
			// 	}
			// },
			
			/* 
				网络请求相关方法
			*/
			//做封装，简化生命周期函数
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					// this.result=res
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
	// 		getHomeGood(type){
	// 			const page = this.good[type].page+1
	// 			getHomeGood(type,page).then(res=>{
	// 				//将上一个商品列表数组添加到下一个商品列表数组中
	// //没有接口，无法请求到商品数据
	// 				this.good[type].list.push(...res.data.list)
	// 				this.good[type].page+1 //页面数加一
	// 			})
	// 		}
			ulClick(){
				this.$router.push('/detail')
			}
		}
	}
</script>

<style>
	#home{
		padding-top:44px;
	}
	.title{
		margin-top: 12px;
	}
	.home-bar{
		position:fixed;
		left:0;
		right:0;
		top:0;
		z-index:9
	}
	.tab-control{
		position:sticky;
		top:44px;
	}
</style>


