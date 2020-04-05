<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="panel panel-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="pull-right">
          <button
            :disabled="insufficientFunds || quantity <= 0"
            class="btn btn-success"
            @click="buyStock"
          >{{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { BUY_STOCKS } from "../store/constants/stocks";
import { GET_FUND_PROTFOLIO } from "../store/constants/portfolio";

export default {
  props: {
    stock: Object
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters({
      funds: GET_FUND_PROTFOLIO
    }),
    insufficientFunds() {
      return this.funds < this.quantity * this.stock.price;
    }
  },
  methods: {
    ...mapActions({
      buyStocks: BUY_STOCKS
    }),
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.buyStocks(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>