import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const currencyLocal = function (value) {
  if (value && typeof (value) === 'number') {
    return `$${value.toLocaleString()}`;
  }
  return '';
};

Vue.filter('currency', currencyLocal);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 };
  },

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
