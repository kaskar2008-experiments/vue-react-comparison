import './styles.styl';

import Vue from 'vue';
import VueApp from './vue/App.vue';
import vueRouter from './vue/router';
import vueStore from './vue/store';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './react/App.js';

Vue.config.productionTip = false;

new Vue({
  router: vueRouter,
  store: vueStore,
  render: (h) => h(VueApp),
}).$mount('#vue-app');

ReactDOM.render(
  React.createElement(ReactApp),
  document.getElementById('react-app'),
);
