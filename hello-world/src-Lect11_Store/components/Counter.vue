<template>
  <div>
    <h3>Counter</h3>
    <button class="btn btn-primary" @click="increment(10)">Increment by 10</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>