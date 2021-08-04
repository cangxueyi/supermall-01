<template>
	<div class="goodlistitem">
		<img :src="gooditem.show.img" />
		<div>
			<p>{{gooditem.title}}</p>
			<span class="price">{{gooditem.price}}</span>
			<span class="collect">{{gooditem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'GoodListItem',
		props:{
			gooditem:{
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
