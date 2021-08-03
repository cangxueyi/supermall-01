<template>
  <div>
    <tabbar>
      <!-- 动态改变字体颜色 取别名 -->
      <tabbar-item path="/home">
        <img slot="item-icon" src="~assets/img/news.jpeg" />
        <img slot="item-icon-active" src="~assets/img/news_active.jpeg" />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="~assets/img/delete.jpeg" />
        <img slot="item-icon-active" src="~assets/img/delete_active.jpeg" />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icon" src="~assets/img/cart.jpeg" />
        <img slot="item-icon-active" src="~assets/img/cart_active.jpeg" />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="mine">
        <img slot="item-icon" src="~assets/img/mine.jpeg" />
        <img slot="item-icon-active" src="~assets/img/mine_active.jpeg" />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from '../common/tabbar/tabbar.vue'
  import TabbarItem from '../common/tabbar/tabbarItem.vue'
  export default {
    name:'MainTabbar',
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
</style>
