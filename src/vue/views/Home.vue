<template lang="pug">
.home
  img(alt="Vue logo" src="/static/logo.png" width="200")
  hello-world(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/vue/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  provide() {
    return {
      fast: true,
      record: false,
    };
  },
};
</script>
