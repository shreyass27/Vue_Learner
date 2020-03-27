<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetail :name="name" :age="age" @resetName="name = $event" :resetFn="resetName" />
      </div>
      <div class="col-xs-12 col-sm-6">
        <UserEdit :age="age" @resetAgeFn="age = $event" />
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data: () => ({
    name: "Shreyas",
    age: 18
  }),
  methods: {
    changeName() {
      this.name = "Shreyas Shetty";
    },
    resetName() {
      this.name = "Shreyas Reset";
    }
  }
};
</script>

<style scoped>
div.component {
  background-color: lightblue;
}
</style>
