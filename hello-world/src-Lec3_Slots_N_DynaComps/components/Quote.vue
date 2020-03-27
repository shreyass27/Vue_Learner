<template>
  <div>
    <h2>
      <slot name="title"></slot>
    </h2>
    <p>
      <slot></slot>
    </p>

    <slot name="content">Default Content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>