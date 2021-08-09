<template>
	<div class="goodlistitem">
		<img :src="showImage" />
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
		},
		computed:{
			showImage(){
				return this.gooditem.show.img || this.gooditem.image
			}
		},
		methods:{
			imgLoad(){
				this.$bus.$emit('itemImgLoad')
			},
			itemClick(){
				this.$router.push({
					path:'/detail',
					query:{
						text:this.gooditem.text
					}
				})
			}
		}
	}
</script>

<style>
</style>
