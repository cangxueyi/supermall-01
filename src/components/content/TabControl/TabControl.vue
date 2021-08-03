<template>
	<div class="tabcontrol">
		<div v-for="(item,index) in titles" 
		class="tabcontrol-item" 
		:class="{active:index===currentIndex}" @click="currentClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			currentClick(index){
				this.currentIndex=index
			}
		}
	}
</script>

<style scoped>
	.tabcontrol{
		display:flex;
		text-align:center;
		height:40px;
		line-height:40px;
		font-size:15px;
		background-color:#fff;
	}
	.tabcontrol-item{
		flex:1;
	}
	.tabcontrol-item span{
		padding:5px;
	}
	.active{
		color: var(--color-height-text);
	} 
	.active span{
		border-bottom:3px solid var(--color-tint);
	}
</style>
