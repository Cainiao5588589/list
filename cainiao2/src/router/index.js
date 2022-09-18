import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/Home',
    name: 'Home',
    component: Home,
    
    children:[
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }, 
    ]
  },
 {
    path:"/",
    redirect:{
      path:'/login'
    }
  },
 {
    path: "/login",
    name: "login",
    meta:{
      title:"登录页面"
    },
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 访问的白名单, 可以直接通行
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  if (whiteList.includes(to.path.toLowerCase())) {
    next()
  } else {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
