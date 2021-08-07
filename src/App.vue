<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<main-tabbar></main-tabbar>
		
		<button>点击</button>
		<p>张三李四王五</p>
	</div>
</template>

<script>
	import MainTabbar from './components/content/maintabbar.vue'
	import router from './router/index.js'

export default {
	name: 'App',
	components: {
		MainTabbar,
		router
	}
}
</script>

<style>
	@import './assets/css/base.css';
</style>
