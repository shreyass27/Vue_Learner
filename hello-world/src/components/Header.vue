<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/" active-class="active" exact>
            <a>Home</a>
          </router-link>
          <router-link tag="li" to="/stocks" active-class="active">
            <a>Stocks</a>
          </router-link>
          <router-link tag="li" to="/portfolio" active-class="active">
            <a>Portfolio</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{open: isDropDownOpen}"
            @click="isDropDownOpen= !isDropDownOpen"
            @blur="isDropDownOpen = false"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Save Data</a>
              </li>
              <li>
                <a href="#">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>

        <strong class="navbar-text">Funds: {{funds | currency}}</strong>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { GET_FUND_PROTFOLIO } from "../store/constants/portfolio";
import { SET_RND_STOCKS } from "../store/constants/stocks";

export default {
  data() {
    return {
      isDropDownOpen: false
    };
  },
  computed: {
    ...mapGetters({
      funds: GET_FUND_PROTFOLIO
    })
  },
  methods: {
    ...mapActions({
      setRandomStocks: SET_RND_STOCKS
    }),
    endDay() {
      this.setRandomStocks();
    }
  }
};
</script>