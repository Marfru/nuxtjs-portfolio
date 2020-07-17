<template>
  <div class="m-about">
    <div
      v-for="about in aboutData"
      :key="about.title"
      class="m-about_container"
    >
      <h1>{{ about.title }}</h1>
      <p class="m-about_description">
        {{ about.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      aboutData: null,
    }
  },

  mounted() {
    this.$axios
      .$get('data/api.json')
      .then((res) => (this.aboutData = res.about))
  },
}
</script>
