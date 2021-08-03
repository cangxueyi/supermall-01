<template>
	<div id="app">
		<router-view></router-view>
		<main-tabbar></main-tabbar>
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
