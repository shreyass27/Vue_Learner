import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


// Can be used as strem or event bus.
// eventBus.changeAge() or eventBus.$emit('ageWasChanged', age) to emit event
// eventBus.$on('ageWasChanged', age => /*Computation with Age */)
export const eventBus = new Vue({
  method: {
    changeAge(age) {
      this.$emit('ageWasChanged', age);
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
