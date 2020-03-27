<template>
  <div>
    <p>Server Status: {{ isCritical ? 'Critical' : 'Normal' }}</p>
    <button @click="toggleStatus">Toggle Status</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      isCritical: true
    };
  },
  methods: {
    toggleStatus() {
      this.isCritical = !this.isCritical;
    }
  }
};
</script>

<style scoped>
</style>