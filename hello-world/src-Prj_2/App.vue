<template>
  <div class="container">
    <Header :count="quotes.length" :maxCount="maxQuotes" />
    <NewQuote @addQuote="addNewQuote($event)" />
    <QuoteGrid :deleteQuote="deleteQuote" :quotes="quotes" />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import Header from "./components/Header";

export default {
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  data() {
    return {
      maxQuotes: 10,
      quotes: ["Just a quote to see something"]
    };
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotes.length === this.maxQuotes) {
        alert(
          `Max quote count of ${this.maxQuotes} reached. Please delete some quotes.`
        );
      } else {
        this.quotes = [...this.quotes, quote];
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
