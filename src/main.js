// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';

import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: '#41CEE8', // (65,206,232)
    secondary: '#BBE1FF', //(187,225,255)
    accent: '#AAE8C8',
    error: '#FF5252',
    info: '#BEFFFC', //(190,255,252)
    success: '#AAE8C8',
    warning: '#FFC107',

    //AAE8C8(170,232,200)
    //BBFFD2 (187,55,210)
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
  components: { App },
  template: '<App/>',
});
