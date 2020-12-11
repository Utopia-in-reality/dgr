import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import quanguo from '../views/1/quanguo'
import diqu from '../views/1/diqu.vue'
import gaopin from '../views/1/gaopin'
import customer from '../views/customer'
import information from '../views/information'
import register from '../views/register'
import location from '../views/2/location'
import tools from '../views/2/tools'
import schedule from '../views/2/schedule'
import frends from '../views/2/frends'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/quanguo", //全国为首页
    children:[      //二级嵌套路由
      {
        path: 'quanguo',
       component: quanguo 
     },
     {
       path: 'diqu',
       component: diqu
     },
     {
       path: 'gaopin',
       component: gaopin
     }
    ] },
    {
      path: '/customer',
        component: customer //注册
     },
     {
      path: '/information',
        component: information 
     },
     {
      path: '/register',
        component: register
     },
     {
      path:'/404',
      name:'404',
      component: () => import( '../views/eorr.vue')
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: '/location',
      component: location
    },
    {
      path: '/schedule',
      component: schedule
    },
    {
      path: '/tools',
      component: tools
    },
    {
      path: '/frends',
      component: frends
    }
 ]

const router = new VueRouter({
  mode:'hash', //取消*
  routes,
  redirect: "/quanguo"
})

export default router
