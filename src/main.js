// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';

import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: '#006DA6', //
    secondary: '#BEFFFC', //
    accent: '#27D0E8',
    error: '#FF5252',
    info: '#264b51',
    success: '#4CAF50',
    warning: '#FFC107',
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
