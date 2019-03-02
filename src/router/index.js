import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line
import Home from '@/components/home/home.vue';
// eslint-disable-next-line
import Events from '@/components/events/events-main.vue';
// eslint-disable-next-line
import Team from '@/components/team/team-main.vue';
// eslint-disable-next-line
import Contact from '@/components/contact/contact-main.vue';
// eslint-disable-next-line
import Why from '@/components/inspiration/inspiration-main.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/our-inspiration',
      name: 'Why',
      component: Why,
    },
  ],
});
