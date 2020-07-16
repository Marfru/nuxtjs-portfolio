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
      timestamp: '',
      aboutData: null,
    }
  },

  created() {
    setInterval(() => {
      this.getNow()
    })
  },

  mounted() {
    this.$axios
      .$get('data/api.json')
      .then((res) => (this.aboutData = res.about))
  },

  methods: {
    getNow() {
      const today = new Date()
      const time =
        (today.getHours() < 10 ? '0' : '') +
        today.getHours() +
        ':' +
        (today.getMinutes() < 10 ? '0' : '') +
        today.getMinutes() +
        ':' +
        (today.getSeconds() < 10 ? '0' : '') +
        today.getSeconds()
      const dateTime = time
      this.timestamp = dateTime
    },
  },
}
</script>
