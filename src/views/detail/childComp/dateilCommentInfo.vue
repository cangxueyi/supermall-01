<template>
	<div>
		<h4>商品评论</h4>
		<div>
			<span class="data">{{commentInfo.created|showData}}</span>
		</div>
	</div>
</template>

<script>
	import {formatData} from 'components/common/formatData.js'
	export default{
		name:"DetailCommentInfo",
		props:{
			commentInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			showData(){
				//将时间戳转化成data
				const data = new Data(value*1000)
				//将data进行格式化
				return formateDate(data,'yyyy-MM-dd hh:mm:ss')
			}
		}
	}
</script>

<style>
</style>
