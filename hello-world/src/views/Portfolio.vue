<template>
  <div>
    <portfolio-stocks v-for="stock in stocks" :key="stock.id" :stock="stock"></portfolio-stocks>
  </div>
</template>

<script>
import PortfolioStocks from "../components/PortfolioStocks";
import { mapGetters } from "vuex";
import { GET_STOCK_PROTFOLIO } from "../store/constants/portfolio";

export default {
  components: {
    PortfolioStocks
  },
  computed: {
    ...mapGetters({
      stocks: GET_STOCK_PROTFOLIO
    })
  }
};
</script>