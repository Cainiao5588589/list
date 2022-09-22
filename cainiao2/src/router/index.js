import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout';


//首页下面的跳转页面
import goods from '../views/goods' //商品管理
import indexs from "../views/index"//首页
import member from "../views/member" //会员管理
import staff from "../views/staff" //员工管理
import supplier from "../views/supplier" //供应商管理
Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录页面"
    },
    component: () => import('../views/login/login.vue')
  },
  {
    path: "/",
    name:'home',
    component: Home,
   
    children: [
      // 子路由中的path前面不要加 /
     {
      path:'/',
      redirect: {
        path: '/indexs',
      },
     },
      {
        path: 'goods',
        name: 'goods',
        component: goods,
        meta: { // 路由元信息   
          title:"商品管理",
        },
      },
      {
        path: 'indexs',
        name: 'indexs',
        component: indexs,
        meta: { // 路由元信息
          title:"首页",
        },
      },
      {
        path: 'member',
        name: 'member',
        component: member,
        meta: { // 路由元信息
          title:'会员管理'
        },
      },
      {
        path: 'staff',
        name: 'staff',
        component: staff,
        meta: { // 路由元信息
          title:'员工管理'
        },
      }, {
        path: 'supplier',
        name: 'supplier',
        component: supplier,
        meta: { // 路由元信息
          title:'供应商管理'
        },
      },
    ],
  },
 
]

const router = new VueRouter({
  routes
})

// 访问的白名单, 可以直接通行
// const whiteList = ['/login']
// router.beforeEach((to, from, next) => {
//   // 访问的路径在白名单
//   if (whiteList.includes(to.path.toLowerCase())) {
//     next()
//   } else {
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
