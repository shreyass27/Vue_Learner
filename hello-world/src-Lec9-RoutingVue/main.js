import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

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

router.beforeEach((to, from, next) => {
  console.log('Router beforeEach', { to, from, next });
  // To allow the route 
  next();
  // To not allow the route 
  // next(false);
  // To redirect with path or path config object
  // next('/path') or next({ path: 'pathname'  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
