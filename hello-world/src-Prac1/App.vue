

<script>
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Servers from "./components/Server/Servers";

export default {
  name: "App",
  components: {
    Header,
    Servers,
    Footer
  }
};
</script>

<template>
  <div class="container">
    <Header />
    <hr />
    <Servers />
    <hr />
    <Footer />
  </div>
</template>

<style>
</style>
