import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginApp from "@/views/LoginApp.vue";
import CreateColaboradorApp from "@/views/colaboradores/createColaboradorApp.vue";
import IndexColaboradorApp from "@/views/colaboradores/indexColaboradorApp.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginApp,
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/colaboradores/create",
    name: "create-colaborador",
    component: CreateColaboradorApp,
  },
  {
    path: "/colaboradores/index",
    name: "index-colaborador",
    component: IndexColaboradorApp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
