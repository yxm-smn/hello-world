import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Default from "../components/Default.vue";
import Son from "../components/Son.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: { flag: true },
    children: [
      {
        path: "son",
        component: Son,
      },
    ],
  },
  {
    path: "/cart",
    component: HelloWorld,
  },
  {
    path: "/default/:id",
    component: Default,
    props: true,
  },
];
export const router = new VueRouter({
  routes,
});
//全局前置守卫
router.beforeEach((to, from, next) => {
  /* if (to.matched.some((item) => item.meta.flag === true)) {
    next();
  } else {
    alert("你无权访问");
  } */
  next();
});
