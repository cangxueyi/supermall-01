<template>
	<div>
		<h2>分类</h2>
		<div class="wrapper" ref="wrapper">
			<ul>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
				<li>列表￥</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'Category',
		data() {
			return{
				scroll:null
			}
		},
		mounted() {
			this.$nextTick(()=>{
				this.scroll = new BScroll(this.$refs.wrapper,{
					probeType:3,
					pullUpLoad:true
				})
			})
			// this.scroll.on('scroll',(position)=>{
			// 	console.log(position)
			// })
			// this.scroll.on('pullUpLoad',()=>{
			// 	console.log('上拉加载更多')
			// })
		},
		methods:{
			btnClick(){
				console.log('点击次数加一')
			}
		}
	}
</script>

<style>
	.wrapper{
		background-color: greenyellow;
		height: 200px;
		overflow: hidden;
	}
</style>
