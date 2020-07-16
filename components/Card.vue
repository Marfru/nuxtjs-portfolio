<template>
  <div class="m-card">
    <div v-for="card in cards" :key="card.title" class="m-card_container">
      <h2 class="m-card_title">{{ card.title }}</h2>
      <p class="m-card_description">
        {{ card.desc }}
      </p>
      <nuxt-link to="#" class="m-card_link"> {{ card.url }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  data() {
    return {
      cards: null,
    }
  },

  mounted() {
    this.$axios.$get('data/api.json').then((res) => (this.cards = res.data))
  },
}
</script>
