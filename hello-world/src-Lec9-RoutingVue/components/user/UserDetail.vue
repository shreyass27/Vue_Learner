<template>
  <div>
    <h3>Some User Details</h3>

    <p>Loaded Id: {{id}}</p>
    <p>Loaded Id (computedId): {{computedId}}</p>
    <p>Loaded Id (From $route ibject directlt): {{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-primary" :to="link">Edit User</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  mounted() {
    console.log("this.$route", this.$route);
  },
  watch: {
    $route: function(to, from) {
      console.log({ to, from });
      this.id = to.params.id;
    }
  },
  computed: {
    computedId() {
      return this.$route.params.id;
    }
  },
  beforeRouteEnter(to, from, next) {
    //Is invoked before component is created
    //Need to call next for component to get created
    next();
  }
};
</script>