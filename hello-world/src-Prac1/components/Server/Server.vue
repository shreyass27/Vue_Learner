<template>
  <li @click="$emit('select')" class="list-group-item">Server #{{ id }} with status {{status}}</li>
</template>

<script>
export default {
  props: {
    id: Number,
    status: String
  }
};
</script>