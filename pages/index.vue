<template>
  <section class="container">
    <Logo/>
    <h1 class="title">
      {{ msg }}
    </h1>
    <div>
      <nuxt-link to="/counter">Counter</nuxt-link>
      <nuxt-link to="/everyone" exact>Welcome who ?</nuxt-link>
    </div>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
    </div>
  </section>
</template>

<script>
import Logo from '../components/Logo';

export default {
  name: 'Home',
  components: {
    Logo,
  },
  data () {
    return {
      msg: 'Welcome',
    };
  },
  head () {
    return {
      title: `Dynamic head title : ${this.msg}`,
    };
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

  .links {
    padding-top: 15px;
  }

  a {
    margin: 10px;
  }
</style>
