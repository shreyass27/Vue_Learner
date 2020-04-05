<template>
  <div>
    <h3>Another Results</h3>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>String Counter : {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>