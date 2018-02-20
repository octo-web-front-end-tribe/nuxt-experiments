<template>
  <button @click="incrementCounter" class="test">Button data: {{ counter }}</button>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data () {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      this.$emit('increment');
    },
  },
};
</script>

<style scoped>
  .test {
    font-size: 30px;
  }
</style>
