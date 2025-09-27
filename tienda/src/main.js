import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'
const  socketIO  = require("socket.io-client");

const socketConnection = socketIO('http://localhost:6007/')

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.prototype.$envio = 10000
Vue.prototype.$paises = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay']
Vue.prototype.$url = "http://localhost:6007/api";
Vue.prototype.$token = localStorage.getItem("token");
Vue.use(BootstrapVue)

Vue.use(new VueSocketIO({
  debug: true, 
  connection: socketConnection,
  vuex: {
    store, 
    actionProfix: "SOCKET_",
    mutationPrefix: 'SOCKET_'
  }, 

}))
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
