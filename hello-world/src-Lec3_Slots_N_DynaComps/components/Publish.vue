<template>
  <div>
    <h2>The Publisher</h2>
    <button @click="published++">Increase</button>
    <p>published : {{published}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      published: 0
    };
  },
  destroyed() {
    console.log("Destroyed Published Comp");
  },

  //   Life Cycle hooks offered by Dynamic Componenets
  activated() {
    console.log("Activated Published Comp");
  },
  deactivated() {
    console.log("DeActivated Published Comp");
  }
};
</script>