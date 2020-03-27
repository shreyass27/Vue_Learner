<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>