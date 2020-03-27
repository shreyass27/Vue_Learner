<template>
  <div class="row quote-grid">
    <Quote v-for="(quote, idx) in quotes" :key="quote" @click.native="deleteQuote(idx)">{{quote}}</Quote>
  </div>
</template>


<script>
import Quote from "./Quote";

export default {
  components: {
    Quote
  },
  props: {
    quotes: Array,
    deleteQuote: Function
  }
};
</script>

<style scoped>
.quote-grid {
  margin-bottom: 16px;
}
</style>