<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="increment">Increment</button>
    <HelloWorld msg="Welcome to Your Vue.js App" :age="age" />
    <p>Age plus 3 computed: {{plusOne}}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    age: 18
  }),
  methods: {
    increment() {
      this.age++;
    }
  },
  computed: {
    plusOne: function() {
      return this.age + 3;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
