<template>
	<!-- 判断接口内的数据是否为空 -->
	<div v-if="" class="goods-info">
		<div class="">
			<div class="start"></div>
			<!-- 其他信息 -->
			<div class="desc">{{}}</div>
			<div class="end"></div>
		</div>
		<!-- 遍历数据中的图片 -->
		<div class="">
			<!-- 绑定key -->
			<div class=""></div>
			<!-- 遍历图片 -->
			<div class="">
				<img src="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailImageInfo",
		props:{
			//接口
			detailInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	
</style>
