<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import "./assets/style.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
