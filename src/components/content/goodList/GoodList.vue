<template>
	<div class="goodlist">
		<good-list-item v-for="item in good" :gooditem="item"></good-list-item>
	</div>
</template>

<script>
	import GoodListItem from './GoodListItem.vue'
	export default {
		name:'GoodList',
		components:{
			GoodListItem
		},
		props:{
			good:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style>
</style>
