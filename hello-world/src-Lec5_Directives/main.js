import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding) {
    el.style.padding = '8px 16px';
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      el.style[binding.arg] = binding.value;
    }, delay)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
