<template>
  <div>
    <nav-menu></nav-menu>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import NavMenu from './NavMenu'
  export default {
    components: {
      NavMenu
    },
    name: 'home',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
