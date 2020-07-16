<template>
  <div class="m-about">
    <div class="m-about_container">
      <h1>Hey there.</h1>
      <p class="m-about_description">
        My name is Marcos Frutos. I am a UX Engineer / Full Stack Designer.
      </p>
      <!-- <p class="m-about_description">
        <strong>{{ timestamp }} (GMT+2)</strong> - Rotterdam, Netherlands.
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      timestamp: '',
    }
  },

  created() {
    setInterval(() => {
      this.getNow()
    })
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
