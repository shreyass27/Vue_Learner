<template>
  <div>
    <h1>Trade or view Portfolio</h1>
    <h6>You may Save & load your Data</h6>
    <h6>Click on 'End Day' to begin new Day</h6>

    <hr />
    <p>Your funds {{funds | currency}}</p>
    <p />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_FUND_PROTFOLIO } from "../store/constants/portfolio";
export default {
  computed: {
    ...mapGetters({
      funds: GET_FUND_PROTFOLIO
    })
  }
};
</script>