import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";
import VuePaginate from "vue-paginate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";

Vue.use(Notifications);
Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$url = "http://localhost:6007/api";
Vue.prototype.$token = localStorage.getItem("token");
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin);
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
