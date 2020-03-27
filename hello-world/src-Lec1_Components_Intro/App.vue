

<script>
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Server from "./components/Server/Server";
import ServerDetails from "./components/Server/ServerDetails";

export default {
  name: "App",
  components: {
    Header,
    Server,
    ServerDetails,
    Footer
  }
};
</script>

<template>
  <div class="container">
    <Header />
    <hr />
    <div class="row">
      <Server />
      <ServerDetails />
    </div>
    <hr />
    <Footer />
  </div>
</template>

<style>
</style>
