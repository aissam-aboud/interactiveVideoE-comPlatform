import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import ind from "../views/ind.vue";
import admin from "../views/admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/ind",
    name: "ind",
    component: ind,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
