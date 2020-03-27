<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="compSelected = 'Blue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="compSelected = 'Green'" class="btn btn-success">Load Green Template</button>
        <button @click="compSelected = 'Red'" class="btn btn-danger">Load Red Template</button>
        <hr />

        <component :is="compSelected">
          <span slot="title">{{compSelected}} Component is Selected</span>
          {{compSelected}} Component was selected, render it as dynamic component with Slot content.
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    Blue,
    Green,
    Red
  },
  data() {
    return {
      compSelected: "Blue"
    };
  }
};
</script>

<style>
</style>
