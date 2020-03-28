<template>
  <div>
    <h2>Filter and Mixins</h2>
    <input type="text" v-model="filterText" />

    <ul>
      <li v-for="fruit in filterdFruits" :key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./mixins/fruitMixin";
export default {
  mixins: [fruitMixin]
};
</script>

<style>
</style>
