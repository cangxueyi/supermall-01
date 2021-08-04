<template>
	<div class="wrapper" ref="wrapper">
		  <ul class="content">
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
			  <li>列表123</li>
		  </ul>
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
				this.scroll = new BScroll(this.$refs.wrapper,{})
			})
		}
	}
</script>

<style>
/* 	.wrapper{
		background-color: greenyellow;
		height: 200px;
		overflow: hidden;
	} */
</style>
