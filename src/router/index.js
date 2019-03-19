import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line
import Home from '@/components/home/home-home.vue';
// eslint-disable-next-line
import homeMain from '@/components/home/home-main.vue';

// eslint-disable-next-line
import EventsHome from '@/components/events/events-home.vue';
// eslint-disable-next-line
import eventMain from '@/components/events/events-main.vue'
// eslint-disable-next-line
import jgmST from '@/components/events/forms/jgm-registration.vue'

// eslint-disable-next-line
import Team from '@/components/team/team-main.vue';
// eslint-disable-next-line
import Contact from '@/components/contact/contact-main.vue';

// eslint-disable-next-line
import whyHome from '@/components/inspiration/inspiration-home.vue'
// eslint-disable-next-line
import whyMain from '@/components/inspiration/inspiration-main.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: homeMain
        }
      ],
    },
    {
      path: '/who-we-are',
      name: 'Team',
      component: Team,
    },
    {
      path: '/events',
      name: 'Events',
      component: EventsHome,
      children: [
        { path: '', component: eventMain },
        { path: 'soccer-tournament-registration-form', component: jgmST }
      ],
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/our-inspiration',
      name: 'Why',
      component: whyHome,
      children: [
        { path: '', component: whyMain },
      ],
    },
  ],
});
