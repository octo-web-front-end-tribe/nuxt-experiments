<template>
  <div class="container">
    <p class="text">Page data: {{ total }}</p>

    <div class="buttons-wrapper">
      <ButtonCounter @increment="incrementTotal"/>
      <ButtonCounter @increment="incrementTotal"/>
    </div>

    <div><nuxt-link to="/" exact>Home</nuxt-link></div>
  </div>
</template>

<script>
import ButtonCounter from '~/components/ButtonCounter';

export default {
  name: 'Counter',
  layout: 'other',
  components: {
    ButtonCounter,
  },
  asyncData ({app}) {
    return app.$axios.get('http://www.mocky.io/v2/5a01affc300000da45fac0cf')
      .then(response => ({
        total: response.data,
      }));
  },
  data () {
    return {
      total: 0,
    };
  },
  methods: {
    incrementTotal () {
      this.total += 1;
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
    color: #35495e;
    letter-spacing: 1px;
    font-size: 30px;
  }

  .container * {
    margin: 30px;
  }

  .buttons-wrapper * {
    margin: 10px;
  }

  a {
    margin: 10px;
  }
</style>
