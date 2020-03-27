<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="10"
          :style="{width: ((count/maxCount) * 100) + '%'}"
        >{{count}} / {{maxCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    maxCount: Number
  }
};
</script>