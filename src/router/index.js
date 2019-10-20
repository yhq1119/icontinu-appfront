import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import User from '../views/User.vue'
import More from '../views/More.vue'
import Index from '../views/Index.vue'
// import MainView from '../views/MainView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


import TestView from '../views/TestView.vue'
import Account from '../views/Account.vue'
import Profile from '../views/Profile.vue'
import Suggest from '../views/Suggest.vue'
import Upcoming from '../views/Upcoming.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: 'login',
    component: Login

  }, 
  {
    path: "/signup",
    name: 'sign up',
    component: SignUp

  },
  {
    path: "/test",
    name: 'test',
    component: TestView
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'suggest',
        name: 'suggest',
        component: Suggest
      }
      ,
      {
        path: 'upcoming',
        name: 'upcoming',
        component: Upcoming
      }, {
        path: 'account',
        name: 'account',
        component: Account
      }, {
        path: 'more',
        name: 'more',
        component: More
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
