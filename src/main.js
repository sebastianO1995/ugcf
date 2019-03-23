// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';

import App from './App';
import router from './router';

import { store } from './store/index';

Vue.use(Vuetify, {
  theme: {
    primary: '#41CEE8',
    secondary: '#BBE1FF',
    accent: '#AAE8C8',
    error: '#FF5252',
    info: '#BEFFFC',
    success: '#AAE8C8',
    warning: '#FFC107',
  },
  options: {
    customProperties: true,
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
