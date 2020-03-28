import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// Global mixin will be added or used by all the components within app. 
// Vue.mixin({
//   created() {
//     console.log('Global Mixin Created Event')
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
