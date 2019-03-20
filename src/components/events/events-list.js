//This file holds stores the event information
export default [
  //JGM Soccer Tournament

 {
    id: 0,
    title: 'JGM Memorial Soccer Tournament',
    date: {
      dayOfWeek: 'Saturday',
      month: 'June',
      day: '22nd',
      year: '2019',
    },
    time: '8:00am',
    isFree: false,
    cost:'15.00',
    location: {
      name: 'Fred Wolfe Soccer Park',
      street: '300 Hollow Road',
      city: 'Orange',
      state: 'CT',
      zip: '06477',
    },
    description: 'The JGM Memorial Soccer Tournament is an annual soccer competition held in honor of the late Jacob Gibbons-Morales. Throughout his life, Jacob’s insatiable love for soccer brought together hundreds of people from different cultures and backgrounds by organizing numerous events. From local pick-up games in Connecticut to transporting groups of people to professional games both domestic, as well as on the international stage, Jacob spread his passion for the game throughout the United States as well as abroad. With this honorary tournament, we aim to carry on Jacob’s spirit and mission to bridge cultural barriers.',
    summary: 'The JGM Memorial Soccer Tournament is an annual soccer competition held in honor of the late Jacob Gibbons-Morales.',
    registration: true,
    registrationLink: '/events/soccer-tournament-registration-form',
    socialMedia: true,
    socials: [
      {
        item: 'facebook',
        icon: 'fab fa-facebook',
        link: '',
      },
    ],
    images: [
      {
        id: '0',
        link: 'JGMT-Ball.jpg',
        lazy: '',
        alt: 'image of soccer ball',
      }
    ]
  },
];
