import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/home-home';

import homeMain from '@/components/home/home-main';

import EventsHome from '@/components/events/events-home';

import eventMain from '@/components/events/events-main';

// import jgmST from '@/components/events/forms/jgm-registration';
// import jgmPage from '@/components/events/pages/jgm-tournament';
import jgmHome from '@/components/events/pages/jgm-home';

import teamMain from '@/components/team/team-main';

import teamHome from '@/components/team/team-home';

import Contact from '@/components/contact/contact-main';

// import whyHome from '@/components/inspiration/inspiration-home';

// import whyMain from '@/components/inspiration/inspiration-main';

import cancelled from '@/components/events/cancelled';

import NotFound from '@/components/not-found';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: homeMain,
          name: 'Home',
        },
      ],
    },
    {
      path: '/who-we-are',
      component: teamHome,
      children: [
        {
          path: '',
          component: teamMain,
          name: 'Team',
        },
      ],
    },
    {
      path: '/events',
      component: EventsHome,
      children: [{ path: '', component: eventMain, name: 'Events' }],
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    // {
    //   path: '/our-inspiration',
    //   component: whyHome,
    //   children: [
    //     { path: '', component: whyMain, name: 'Why' },
    //   ],
    // },
    {
      path: '/jgm-soccer-tournament',
      component: jgmHome,
      children: [
        { path: '', component: cancelled },
        { path: 'registration', component: cancelled },
      ],
      // children: [{ path: '', component: jgmPage }, { path: 'registration', component: jgmST }],
    },
    { path: '*', component: NotFound },
  ],
});
