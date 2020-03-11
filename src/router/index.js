import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress"; //动画加载库
import "nprogress/nprogress.css";
<<<<<<< HEAD
import Home from "../views/Home.vue";
=======
import NotFound from "../views/User/404";
>>>>>>> 初始版本

Vue.use(VueRouter);

const routes = [
  {
<<<<<<< HEAD
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
=======
    path: "/user",
    hideInMenu: true, //添加标置位，标置它，在加载生成的时候通过标置位过滤掉它
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
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
>>>>>>> 初始版本
      }
    ]
  },
  {
<<<<<<< HEAD
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
=======
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts" */ "../components/layouts/BasicLayout.vue"
      ),
    children: [
      //dashboard  递归寻找是否有name字段，dashboard作为一级菜单
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis", //约定有name字段的渲染在菜单上，没有name字段的不去渲染
            meta: { title: "分析页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue"
              )
          }
        ]
      },
      // from表单
      {
        path: "/form",
        name: "form",
        meta: { icon: "form", title: "表单" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicForm",
            meta: { title: "基础表单" },
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/Form/BasicForm.vue"
              )
          },
          {
            path: "/form/step-form",
            name: "stepForm",
            hideChildrenInMenu: true,
            meta: { title: "分步表单" },
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/Form/StepForm/Step1.vue"
              ),
            children: [
              {
                path: "/form/setp-form",
                redirect: "form/setp-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/"
                  )
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/Step2.vue"
                  )
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Form/StepForm/Step1.vue"
                  )
              }
            ]
          }
        ]
>>>>>>> 初始版本
      }
    ]
  },
  {
<<<<<<< HEAD
    path: "/",
    name: "Home",
    component: Home
=======
    path: "*",
    name: "404",
    hideInMenu: true,
    component: NotFound
>>>>>>> 初始版本
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//动画加载效果钩子函数
router.beforeEach((to, from, next) => {
<<<<<<< HEAD
  NProgress.start();
=======
  if (to.path !== from.path) {
    NProgress.start();
  }
>>>>>>> 初始版本
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
