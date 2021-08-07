import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const Mine = () => import('views/mine/mine.vue')
const Cart = () => import('views/cart/cart.vue')
const Detail = () => import('views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/cart',
    component:Cart
  },
  {
	  path:'/detail',
	  component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
