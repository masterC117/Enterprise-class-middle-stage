import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import Layout from '@/layout'
import {Notification} from "element-ui";

const hasToken = "token"

//路由白名单
const routeWhiteList = ['/login','/dashboard']

NProgress.configure({ showSpinner: false }) // NProgress Configuration
Vue.use(VueRouter)


const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
  },
  {
    path:'/dashBoard',
    component: Layout,
    redirect: '/dashBoard/analysis',
    children: [
      {
        path:'/dashBoard/analysis',
        component: () => import('@/views/analysis'),
        name: 'Analysis',
        meta: {title:"分析"}
      },
      {
        path:'/dashboard/monitor',
        component: () => import('@/views/monitor'),
        name: 'Monitor',
        meta: {title:"监控"}
      },
      {
        path:'/dashboard/workplace',
        component: () => import('@/views/workplace'),
        name: 'Workplace',
        meta: {title:"工作台"}
      },
    ]
  },
  {
    path:'/login',
    name: 'Login',
    component: ()=> import('@/views/login'),
    meta:{title:"登录"}
  },
  {
    path:'/404',
    name:'404',
    component: ()=> import('@/views/error-page/404'),
    meta: {title: '404 not found'}
  },
  {
    path:'/401',
    name:'401',
    component: ()=> import('@/views/error-page/401'),
    meta: {title: '401 not allow'}
  },
  { path: '*', redirect: '/404', hidden: true }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if(hasToken){
    console.log("有token")
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      next()
    }
  }else{
    if(routeWhiteList.indexOf(to.path) !== -1){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
    }
  }

})

router.afterEach(async (to, from) => {
  document.title = to.meta.title
  NProgress.done()
})

export default router
