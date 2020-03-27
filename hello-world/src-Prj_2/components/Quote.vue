<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel-body quote">
      <slot></slot>
    </div>
  </div>
</template>


<script>
</script>

<style scoped>
.panel-body {
  font-family: cursive;
  font-size: 24px;
  color: #333;
  border: 1px solid lightgray;
  border-radius: 8px;
  margin: 4px 2px;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>