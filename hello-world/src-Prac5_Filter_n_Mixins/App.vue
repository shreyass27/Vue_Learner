<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>Filters and Mixins</h2>
        <h4>Filter Local</h4>
        <p>{{text | reverseText}}</p>
        <h4>Filter Global</h4>
        <p>{{text | withCount}}</p>

        <h4>Computed Properties Global</h4>
        <p>{{textFlip}}</p>
        <p>{{letterCount}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./mixins/textMixin";
export default {
  mixins: [textMixin],
  data() {
    return { text: "Just a Test." };
  },
  filters: {
    reverseText(value) {
      if (typeof value !== "string") {
        return "";
      }

      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
