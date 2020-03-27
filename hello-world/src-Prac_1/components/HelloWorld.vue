<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Age is {{ age + 1}}</h2>
    <ServerStatus v-for="num in 5" :key="num" />
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";

export default {
  name: "HelloWorld",
  components: {
    ServerStatus
  },
  props: {
    msg: String,
    age: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
