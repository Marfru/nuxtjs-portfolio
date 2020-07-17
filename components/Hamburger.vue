<template>
  <div
    class="m-menu_hamburger"
    :class="hamburgerOpen ? 'm-menu_hamburger--is-open' : ''"
    @click="hamburgerOpen = !hamburgerOpen"
  ></div>
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
