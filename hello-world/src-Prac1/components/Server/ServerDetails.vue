<template>
  <div class="col-xs-12 col-sm-6">
    <template v-if="server">
      <p>Server with ID - {{server.id}} is in {{server.status}} state.</p>
      <hr />
      <button @click="changeStatus">Set to Normal</button>
    </template>
    <p v-else>Server Details are currently not updated</p>
  </div>
</template>

<script>
export default {
  props: {
    server: Object,
    changeStatus: Function
  }
};
</script>