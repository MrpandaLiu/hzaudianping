import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/eatwhat'
  },
  {
    path: '/eatwhat',
    name: '今天吃啥',
    component: () => import('../views/EatWhat.vue'),
  },
  {
    path: '/list',
    name: '食堂一览',
    component: () => import('../views/List/List.vue'),
  },
  {
    path: '/liststore/:id',
    name: '档口一览',
    component: () => import('../views/List/Store.vue')
  },
  {
    path: '/listfood/:id',
    name: '美食一览',
    component: () => import('../views/List/Food.vue')
  },    
  {
    path: '/center',
    name: '个人中心',
    component: () => import('../views/Center/Center.vue')
  },
  {
    path: '/login',
    name: '用户登录',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: '用户注册',
    component: () => import('../components/Register.vue'),
  },
  {
    path: '/centeredit',
    name: '修改资料',
    component: () => import('../views/Center/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((from,to,next) => {
  window.document.title = from.name
  next()
})

export default router
