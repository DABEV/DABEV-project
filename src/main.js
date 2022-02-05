import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'

// router setup
import routes from "./routes/routes";

Vue.config.productionTip = false


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  vuetify,
  router,
}).$mount('#app')
