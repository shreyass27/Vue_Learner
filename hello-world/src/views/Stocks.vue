<template>
  <div>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "../components/Stock";
import { mapGetters } from "vuex";
import { GET_STOCKS } from "../store/constants/stocks";

export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters({
      stocks: GET_STOCKS
    })
  }
};
</script>