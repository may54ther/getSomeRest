import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: () => import(/* webpackChunkName: "search" */ "./views/Search.vue")
    },
    {
      path: "/movie/:id",
      name: "information",
      component: () => import(/* webpackChunkName: "information" */ "./views/Information.vue")
    },
    {
      path: "*",
      name: "notFound",
      component: () => import(/* webpackChunkName: "notFound" */ "./views/NotFound.vue")
    }
  ]
});
