import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import AddPaymentForm  from '../components/AddPaymentForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  },
  {
    path: '/dashboard/:page',
    name: 'dashboard',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add/payment/:category',
    name: 'addpaymentForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddPaymentForm
  },

  {
    path: '/404',
    name: "Page404",
    component: Page404,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const userAuthExists = true

const getTitleByRouteName = routeName => {
  return {
    'dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'Page404': 'Oops! Seems like we lost this page :('
  }[routeName]
}

router.beforeEach((to, from, next)=>{
  if(to.name !== 'Page404' && !userAuthExists) {
    next({
      name: 'Page404'
    })
  }else {
    next()
  }
})


router.afterEach((to)=>{
  document.title = getTitleByRouteName(to.name)
})

export default router