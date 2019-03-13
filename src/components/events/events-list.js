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
    description: 'TEST',
    registration: true,
    registrationLink: '',
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
