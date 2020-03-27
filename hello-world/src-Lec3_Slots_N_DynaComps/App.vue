<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>Slots</h2>
        <Quote>
          <!-- Goes to named slot -->
          <span slot="title">{{quoteTitle}}</span>

          <!-- <span slot="title"></span> -->
          <!-- Goes to default slot  -->
          <span>A wonderful Quote!</span>

          <!-- <span slot="content">Not Default Content</span> -->
        </Quote>
        <br />

        <h2>Dynamic Components</h2>
        <button @click="compName = 'Quote'">Quote</button>
        <button @click="compName = 'Author'">Author</button>
        <button @click="compName = 'Publish'">Publish</button>

        <h4>Dynamic Components are destroyed by default.</h4>
        <h4>keep-alive wrapper can be used to avoid destroying of components and to keep them in memory</h4>
        <keep-alive>
          <component :is="compName">
            <span slot="title">{{quoteTitle}}</span>
            <!-- <span slot="title"></span> -->
            <span>A wonderful Quote!</span>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import Publish from "./components/Publish";

export default {
  components: {
    Quote,
    Author,
    Publish
  },
  data() {
    return {
      quoteTitle: "A great Quote.",
      compName: "Quote"
    };
  }
};
</script>

<style>
h3 {
  color: blue;
}
</style>
