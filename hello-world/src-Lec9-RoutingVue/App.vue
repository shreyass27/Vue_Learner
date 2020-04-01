<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
      <Header />
      <h1>Routering</h1>
      <hr />
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
.slide-enter {
  opacity: 0;
  transform: translateY(20px);
}

.slide-enter-active {
  animation: slideIn 500ms ease-in;
  transition: opacity 500ms ease-in;
}

.slide-leave {
  transform: translateY(0px);
}

.slide-leave-active {
  opacity: 0;
  animation: slideOut 500ms ease-out;
  transition: opacity 500ms ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
