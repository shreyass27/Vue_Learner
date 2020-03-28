<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>Filter and Mixins</h2>
        <h4>{{text | toUpperCase}}</h4>

        <input type="text" v-model="filterText" />

        <ul>
          <li v-for="fruit in filterdFruits" :key="fruit">{{fruit}}</li>
        </ul>

        <List />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List";
import { toUpperCase } from "./filters/TextTransforms";
import { fruitMixin } from "./mixins/fruitMixin";

export default {
  components: {
    List
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello World"
    };
  },
  filters: {
    toUpperCase
  }
};
</script>

<style>
</style>
