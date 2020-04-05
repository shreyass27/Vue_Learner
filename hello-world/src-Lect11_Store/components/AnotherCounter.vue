<template>
  <div>
    <h3>Another Counter</h3>
    <button class="btn btn-primary" @click="increment(1)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>