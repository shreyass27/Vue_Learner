<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
      <h1>Animations.</h1>
      <hr />

      <button @click="show = !show" class="btn btn-primary">Show Alert</button>
      <br />
      <br />
      <select name="animation" v-model="animationSelected" class="form-control">
        <option value="infoFade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <transition :name="animationSelected" appear>
        <div v-show="show" class="alert alert-info">This is some info. Dynamic Animation.</div>
      </transition>
      <br />
      <br />
      <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
        appear-class="animated bounce"
      >
        <div v-if="show" class="alert alert-info">This is some info.</div>
      </transition>
      <transition name="slide" type="animation" appear>
        <div v-if="show" class="alert alert-info">This is some info.</div>
      </transition>
      <br />
      <br />

      <transition :name="animationSelected" type="animation" appear mode="out-in">
        <div v-if="show" class="alert alert-info" key="infoDiv">This is some info.</div>
        <div v-else class="alert alert-warning" key="warningDiv">This is some warning.</div>
      </transition>

      <br />
      <br />
      <button class="btn btn-primary" @click="addItem">Add Item</button>
      <br />
      <br />
      <ul class="list-group">
        <transition-group name="slide">
          <li
            class="list-group-item"
            v-for="num in numbers"
            :key="num"
            @click="removeItem(num)"
          >{{num}}</li>
        </transition-group>
      </ul>
    </div>
      <br />
      <br />
      <br />
      <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
    animationSelected: "slide",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }),
  methods: {
    addItem() {
      this.numbers = [
        ...this.numbers,
        this.numbers[this.numbers.length - 1] + 1
      ];
    },
    removeItem(num) {
      this.numbers = this.numbers.filter(itm => itm !== num);
    }
  }
};
</script>

<style>
.infoFade-enter {
  opacity: 0;
}

.infoFade-enter-active {
  transition: opacity 500ms ease-out;
}

.infoFade-leave-active {
  opacity: 0;
  transition: opacity 500ms ease-in;
}

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
