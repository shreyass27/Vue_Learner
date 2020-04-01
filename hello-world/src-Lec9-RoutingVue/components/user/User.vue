<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button @click="navigatetoHome">Go to home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    navigatetoHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>