<template>
	<div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		<main-tabbar></main-tabbar>
		
		<button>点击</button>
		<a>我是张三</a>
		<button>我是按钮</button>
		
		<button>不要点</button>
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
