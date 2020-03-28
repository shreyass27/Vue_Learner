<template>
  <div class="form-group">
    <label for="age">{{ label }}</label>
    <input :value="value" @input="onInput($event)" type="text" id="firstName" class="form-control" />
  </div>
</template>

<script>
export default {
  props: ["value", "label"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>