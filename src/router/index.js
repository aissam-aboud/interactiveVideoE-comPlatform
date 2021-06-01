import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import dashboard from "../views/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
