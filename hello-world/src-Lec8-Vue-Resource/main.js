import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-learner.firebaseio.com/';
Vue.http.headers.common['Content-Type'] = 'application/json';

Vue.http.interceptors.push((req, next) => {
  console.log({ req });

  next(response => {
    console.log('In next', { response })
    return response
  })
});

new Vue({
  render: h => h(App),
}).$mount('#app')
