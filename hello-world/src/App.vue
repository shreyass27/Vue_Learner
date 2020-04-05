<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import { INIT_STOCKS } from "./store/constants/stocks";
import { mapActions } from "vuex";
export default {
  components: {
    Header
  },
  methods: {
    ...mapActions({
      initStocks: INIT_STOCKS
    })
  },
  created() {
    this.initStocks();
  }
};
</script>

<style>
body {
  padding: 16px 0px;
}

.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
  transition: opacity 0.2s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 0.2s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>