<template>
  <div class="back-top" @click="backTopClick">
    <img alt="" src="~assets/img/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods:{
	  backTopClick(){
		  //设置返回顶部
	  }
  }
};
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 70px;
}
.back-top img {
  width: 50px;
  height: 50px;
}
</style>
