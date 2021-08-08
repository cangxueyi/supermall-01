<template>
	<div>
		<swiper class="detail-swiper">
			<swiper-item v-for="(item,index) in DetailImges" :key="index">
				<img :src="item.imges" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default{
		name:'DetailSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			DetailImges:[
				{imges:'~assets/img/DetailImges/eye.jpg'},
				{imges:'~assets/img/DetailImges/pink.jpg'},
				{imges:'~assets/img/DetailImges/table.jpg'}
			]
		}
	}
</script>

<style>
	.detail-swiper{
		height: 300px;
		overflow: hidden;
		background-color: darkgrey;
	}
</style>
