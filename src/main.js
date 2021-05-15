import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./assets/css/style.css";
import "./assets/css/style2.css";
import "./assets/js/interactionVideo.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
// import "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
