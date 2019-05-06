import Vue from 'vue'
import Router from 'vue-router'


const Home = ()=> import ('../views/Home/Home.vue')
const Company = ()=> import ('../views/Company/Company.vue')
const Order = ()=> import ('../views/Order/Order.vue')
const Profile = ()=> import ('../views/Profile/Profile.vue')

import Havepaid from '../views/Order/Havepaid/Havepaid.vue'
import Haverate from '../views/Order/Haverate/Haverate.vue'
import Notpaid from '../views/Order/Notpaid/Notpaid.vue'
import Notrate from '../views/Order/Notrate/Notrate.vue'

import Login from '../views/Login/Login.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopRating from '../views/Shop/ShopRating/ShopRating.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo.vue'
import Course from '../views/Course/Course.vue'
import AppoinOk from '../views/AppoinOk/AppoinOk.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        FooterShow:true
      }
    },
      {
      path: '/company',
      name: 'company',
      component: Company,
      meta:{
        FooterShow:true
      }
    },
      {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        FooterShow:true
      }
    },
      {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        FooterShow:true
      },
      children:[{
         path: '/order/havepaid',
         component: Havepaid   
          },
          {
         path: '/order/haverate',
         component: Haverate     
          },
          {
         path: '/order/notpaid',
         component: Notpaid     
          },
          {
         path: '/order/notrate',
         component: Notrate    
          },
          {
          path: '/',
          redirect: '/order/notpaid'
          }
          ]
    },
    {
      path: '/',
      redirect: '/home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
 
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: Shop,
      children:[{
         path: '/shop/goods/:id',
         component: ShopGoods     
          },
          {
         path: '/shop/rating',
         component: ShopRating      
          },
          {
         path: '/shop/info',
         component: ShopInfo      
          },{
          path: '/',
          redirect: '/shop/goods/:id'
          }
          ]
    },
    {
      path:'/course/:id',
      name:'course',
      component:Course
    },
    {
      path:'/appoint',
      name:'appoint',
      component:AppoinOk
    }

  ],
    linkActiveClass:'mui-active'
})
