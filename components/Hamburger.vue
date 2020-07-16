<template>
  <button
    class="m-menu_hamburger"
    :class="hamburgerOpen ? 'm-menu_hamburger--is-open' : 'xxx'"
    @click="hamburgerOpen = !hamburgerOpen"
  ></button>
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      hamburgerOpen: false,
    }
  },
}
</script>
