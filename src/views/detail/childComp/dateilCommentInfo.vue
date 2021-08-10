<template>
	<div>
		<h4>商品评论</h4>
		<div class="comment-info">
			<!-- 后面添加时间戳转换 -->
			<!-- <span class="data">{{ | }}</span> -->
		</div>
	</div>
</template>

<script>
	// import {formatData} from 'components/common/formatData.js'
	// :{
	// 	showData(time){
	// 		//将时间戳转化成data
	// 		const data = new Data(time*1000)
	// 		//将data进行格式化
	// 		return formateDate(data,'yyyy-MM-dd hh:mm:ss')
	// 	}
	// },
	// ￥moment时间戳转化插件
	// 	showData(){
	// 		this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
	// 	}
	export default{
		name:"DetailCommentInfo",
		props:{
			commentInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
	
</script>

<style>
</style>
