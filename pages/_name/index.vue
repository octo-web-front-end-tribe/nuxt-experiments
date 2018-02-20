<template>
  <section class="container">
    <h1 class="title">
      {{ selectedOption }} {{ nameParam }}
    </h1>

    <Multiselect
      v-model="selectedOption"
      :options="options"
      :searchable="false"
      :allow-empty="false"
      select-label=""
      selected-label=""
      deselect-label=""
    />

    <div>
      <nuxt-link to="/counter">Counter</nuxt-link>
      <nuxt-link to="/" exact>Back to home</nuxt-link>
    </div>
  </section>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'Welcome',
  components: {
    Multiselect,
  },
  data () {
    return {
      options: ['Welcome', 'Bonjour', 'Ciao'],
      selectedOption: 'Welcome',
    };
  },
  computed: {
    nameParam () {
      return this.$route.params.name;
    },
  },
};
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  a {
    margin: 10px;
  }

  .multiselect {
    max-width: 200px;
    margin: 10px;
  }
</style>
