import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";

Vue.use(Notifications);
Vue.config.productionTip = false;
Vue.prototype.$url = "http://localhost:6007/api";
Vue.prototype.$token = localStorage.getItem("token");

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
