<template>
  <div class="hello">
    <h1>{{ msg }} {{ qwe }}</h1>
    <input type="text" :value="qwe" @input="onInput">
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      qwe: 'dfgdfgfd',
    };
  },
  mounted() {
    this.qwe += this.msg;
  },
  methods: {
    onInput(value) {
      this.qwe = value;
    },
  },
  inject: ['fast'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
