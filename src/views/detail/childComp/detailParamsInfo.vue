<template>
	<div class="">
		<!-- 展示参数信息 -->
		<!-- 遍历table时外层不加div -->
		<table>
			<tr>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:"DetailParamsInfo",
		props:{
			paramsInfo:{
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
