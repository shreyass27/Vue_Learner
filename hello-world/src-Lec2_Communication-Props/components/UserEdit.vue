<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age is: {{age}}</p>
    <button @click="$emit('resetAgeFn', 25)">Reset Age</button>
  </div>
</template>

<script>
export default {
  props: {
    age: Number
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
