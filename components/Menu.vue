<template>
  <nav class="m-menu_nav">
    <ul>
      <li v-for="social in socials" :key="social">
        <a href="social.url" target="_blank">{{ social.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
      socials: null,
    }
  },

  mounted() {
    this.$axios.$get('data/api.json').then((res) => (this.socials = res.ext))
  },
}
</script>
