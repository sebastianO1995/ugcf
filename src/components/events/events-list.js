// This file holds stores the event information
export default [
  // JGM Soccer Tournament
  {
    id: 0,
    title: 'JGM Memorial Soccer Tournament 2019',
    date: {
      dayOfWeek: 'Saturday',
      month: 'June',
      day: '22nd',
      year: '2019',
    },
    rain: {
      dayOfWeek: 'Sunday',
      month: 'June',
      day: '23rd',
      year: '2019',
    },
    time: '8:00am',
    isFree: false,
    cost: '20.00 per player',
    location: {
      name: 'Fred Wolfe Soccer Park',
      street: '300 Hollow Road',
      city: 'Orange',
      state: 'CT',
      zip: '06477',
    },
    description: 'The JGM Memorial Soccer Tournament is an annual soccer competition held in honor of the late Jacob Gibbons-Morales. Throughout his life, Jacob’s insatiable love for soccer brought together hundreds of people from different cultures and backgrounds by organizing numerous events. From local pick-up games in Connecticut to transporting groups of people to professional games both domestic, as well as on the international stage, Jacob spread his passion for the game throughout the United States as well as abroad. With this honorary tournament, we aim to carry on Jacob’s spirit and mission to bridge cultural barriers.',
    summary: 'The JGM Memorial Soccer Tournament is an annual soccer competition held in honor of the late Jacob Gibbons-Morales. Teams can register by following the registration link. T-shirt, lunch and water will be provided. Concessions will be available. Registration ends: May 15, 2019',
    page: '/jgm-soccer-tournament',
    registration: true,
    registrationLink: '/jgm-soccer-tournament/registration',
    registrationDeadline: 'May 15, 2019',
    socialMedia: true,
    socials: [
      {
        item: 'facebook',
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/events/2340865522850102',
      },
    ],
    images: [
      {
        id: '0',
        link: 'JGMT-Ball.jpg',
        lazy: '',
        alt: 'image of soccer ball',
      },
    ],
    gallery: [
      {
        id: '1',
        link: 'JGM2018-6.jpg',
        lazy: '',
        alt: 'family',
      },
      {
        id: '2',
        link: 'JGM2018-5.jpg',
        lazy: '',
        alt: 'event 2018',
      },
      {
        id: '3',
        link: 'JGM2018-1.jpg',
        lazy: '',
        alt: 'event 2018',
      },
      {
        id: '4',
        link: 'JGM2018-4.jpg',
        lazy: '',
        alt: 'event 2018',
      },
      {
        id: '5',
        link: 'JGM2018-2.jpg',
        lazy: '',
        alt: 'event 2018',
      },
      {
        id: '6',
        link: 'JGM2018-3.jpg',
        lazy: '',
        alt: 'event 2018',
      },
      {
        id: '7',
        link: 'JGM2018-7.jpg',
        lazy: '',
        alt: 'event 2018',
      },
    ],
  },
];
