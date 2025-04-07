import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginApp from "@/views/LoginApp.vue";
import CreateColaboradorApp from "@/views/colaboradores/createColaboradorApp.vue";
import IndexColaboradorApp from "@/views/colaboradores/indexColaboradorApp.vue";
import store from "@/store/index";

import Bienvenido from "@/views/colaboradores/Bienvenido.vue";
import { jwtDecode } from "jwt-decode";
import CreateProductoApp from "@/views/Productos/CreateProductoApp.vue";
import IndexProducto from "@/views/Productos/IndexProducto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginApp,
    meta: { requiresAuth: false },
  },
  {
    path: "/bienvenido",
    name: "bienvenido",
    component: Bienvenido,
    meta: { requiresAuth: false },
  },
  {
    path: "/colaboradores/create",
    name: "create-colaborador",
    component: CreateColaboradorApp,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaboradores",
    name: "index-colaborador",
    component: IndexColaboradorApp,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaboradores/edit/:id",
    name: "edit-colaborador",
    component: () => import("@/views/colaboradores/editColaborador.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/productos/create",
    name: "create-producto",
    component: CreateProductoApp,
    meta: { requiresAuth: true },
  },
  {
    path: "/producto",
    name: "index-producto",
    component: IndexProducto,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // ...
  // explicitly return false to cancel the navigation
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: "login",
      });
    }

    try {
      jwtDecode(store.state.token);
    } catch (error) {
      next({
        name: "login",
      });
    }

    if (jwtDecode(store.state.token).exp * 1000 <= new Date().getTime()) {
      next({
        name: "login",
      });
    }

    next();
  } else {
    next();
  }
});

/*

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: "login",
      });
    }

    try {
      jwt_decode(store.state.token);
    } catch (error) {
      next({
        name: "login",
      });
    }

    if (jwt_decode(store.state.token).exp * 1000 <= new Date().getTime()) {
      console.log("kjsdhfskdjfh");
      next({
        name: "login",
      });
    }
    next();
  } else {
    next();
  }
});

*/

export default router;
