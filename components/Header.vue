<template>
  <header class="m-header">
    <Logo />
    <button class="m-menu_icon" @click="showMenu">
      <Hamburger />
    </button>
    <transition name="fade">
      <Menu v-show="isMenuVisible" />
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuVisible: false,
    }
  },

  methods: {
    showMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
