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
import jgmPage from '@/components/events/pages/jgm-tournament.vue'
import jgmHome from '@/components/events/pages/jgm-home.vue'

// eslint-disable-next-line
import teamMain from '@/components/team/team-main.vue';
// eslint-disable-next-line
import teamHome from '@/components/team/team-home.vue';

// eslint-disable-next-line
import Contact from '@/components/contact/contact-main.vue';

// eslint-disable-next-line
import whyHome from '@/components/inspiration/inspiration-home.vue'
// eslint-disable-next-line
import whyMain from '@/components/inspiration/inspiration-main.vue'

// eslint-disable-next-line
import NotFound from '@/components/not-found.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
      component: teamHome,
      children: [
        {
          path: '',
          component: teamMain,
        }
      ],
    },
    {
      path: '/events',
      name: 'Events',
      component: EventsHome,
      children: [
        { path: '', component: eventMain }
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
    {
      path: '/jgm-soccer-tournament',
      component: jgmHome,
      children: [
        { path: '', component: jgmPage },
        { path: 'registration', component: jgmST }
      ]
    },
    { path: '*', component: NotFound },

  ],
});
