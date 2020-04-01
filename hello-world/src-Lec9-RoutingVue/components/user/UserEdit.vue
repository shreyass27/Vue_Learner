<template>
  <div>
    <h3>Edit the User</h3>

    <p>Loaded Query Param (query.locale): {{$route.query.locale}}</p>
    <p>Loaded Query q (query.q): {{$route.query.q}}</p>
    <button class="btn btn-primary" @click="confirm = true">Confirm</button>

    <div style="height: 700px"></div>
    <p id="data">Some data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirm: false
    };
  },

  beforeRouteLeave(to, from, next) {
    //   Will be executed before Navigating away from component
    if (this.confirm) {
      next();
    } else if (confirm("Are you sure ?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>