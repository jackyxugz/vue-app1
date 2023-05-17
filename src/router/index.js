import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home', //首页
    name: 'home',
    component: () => import( '../views/module/Home/index.vue')
  },
  {
    path: '/detail/:id', //详情页
    name: 'detail',
    component: () => import( '../views/module/Detail/index.vue')
  },
  {
    path: '/find', //发现
    name: 'find',
    component: () => import( '../views/module/Find/index.vue')
  },
  {
    path: '/order', //订单
    name: 'order',
    component: () => import( '../views/module/Order/index.vue')
  },
  {
    path: '/my', //我的
    name: 'my',
    component: () => import( '../views/module/My/index.vue')
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
