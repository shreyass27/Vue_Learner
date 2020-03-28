<template>
  <div class="container">
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-xs-12">
        <h3>Global Highlight Dir</h3>
        <p v-highlight:background.delayed="'green'" v-highlight:color="'cyan'">Custom Directive</p>
        <br />
        <br />
        <h3>Local Highlight Dir using function.</h3>
        <p
          v-local-highlight:background.delayed="'blue'"
          v-local-highlight:color="'lightgray'"
        >Custom Directive</p>
      </div>
    </div>
  </div>
</template>

<script>
import { highLightDir } from "./directives/highLight";

export default {
  directives: {
    "local-highlight": highLightDir()
  }
};
</script>

<style>
</style>
