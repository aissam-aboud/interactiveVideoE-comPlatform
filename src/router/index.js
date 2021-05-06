import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import page from "../views/page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/page",
    name: "page",
    component: page,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
