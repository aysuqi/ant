import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress"; //动画加载库
import "nprogress/nprogress.css";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts" */ "../components/layouts/BasicLayout.vue"
      ),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard/analysis",
        name: "Analysis",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue"
          )
      }
    ]
  },
  {
    path: "/user",
    component: () =>
      import(
        /* webpackChunkName: "layouts" */ "../components/layouts/UserLayout.vue"
      ),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//动画加载效果钩子函数
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
