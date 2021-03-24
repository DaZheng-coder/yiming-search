import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import User from '@/views/User'
import Admin from '@/views/Admin'
import Search from '@/views/Search'

import BaseFunction from '@/components/BaseFunction'
import AdminManage from '@/components/AdminManage'
import UserManage from '@/components/UserManage'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/user/login', name: 'UserLogin', component: Login },
  { path: '/user/register', name: 'UserRegister', component: Login },
  { path: '/admin/login', name: 'AdminLogin', component: Login },
  { path: '/user', name: 'User', component: User },
  { path: '/search', name: 'Search', component: Search },
  { path: '/search/:keyWords', name: 'Search', component: Search },
  { path: '/admin', name: 'Admin', component: Admin,
    children: [
      {path: '/admin/base/function', component: BaseFunction},
      {path: '/admin/admin/manage', component: AdminManage},
      {path: '/admin/user/manage', component: UserManage}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
