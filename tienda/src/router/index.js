import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '@/views/LoginApp.vue'
import IndexProductos from '@/views/Productos/IndexProductos.vue'
import ShowProductosApp from '@/views/Productos/ShowProductosApp.vue'
import Cart from '@/views/Productos/Cart.vue'
import DireccionesApp from '@/views/cuenta/DireccionesApp.vue'
import CheckoutApp from '@/views/Productos/CheckoutApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: "/login",
    name: "login",
    component: LoginApp,
   
  },
     {
    path: "/shop",
    name: "shop",
    component: IndexProductos,
   
  },
   {
    path: "/producto/:slug",
    name: "show-producto",
    component: ShowProductosApp,
   
  },
       {
    path: "/cart",
    name: "cart",
    component: Cart,
   
  },
  {
    path: "/cuenta/direcciones",
    name: "direcciones",
    component: DireccionesApp,
   
  },
    {
    path: "/checkout",
    name: "direcciones",
    component: CheckoutApp,
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
