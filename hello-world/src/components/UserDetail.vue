<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{name}}</p>
    <p>User Age: {{age}}</p>
    <p>User Gander: {{gender}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name | Callback Prop</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      default: "Male"
    },
    resetFn: Function
  },
  methods: {
    resetName() {
      this.$emit("resetName", "Shreyas");
    }
  }
};
</script>

<style scoped>
.component {
  background-color: lightcoral !important;
}
</style>
