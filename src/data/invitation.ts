export type Person = {
  name: string
  fullName: string
  photo: string
  about: string
}

export const invitation = {
  groom: {
    name: 'Visakh',
    fullName: 'Visakh Venugopal',
    photo: '/assets/groom.svg',
    about: 'S/o Shri. G Venugopalan Nair and Smt. S S Devi Priya',
  } satisfies Person,
  bride: {
    name: 'Aiswarya',
    fullName: 'Aiswarya P Anil',
    photo: '/assets/bride.svg',
    about: 'D/o Shri. Anil Shankar R.S and Smt. Preetha Kumari C.P',
  } satisfies Person,
  envelopeTagline:'Our Forever Begins Here',
  tagline: 'We are tying the knot',
  quote: 'And so, beneath the same sky that watched our story unfold, we gather the people we love to witness the day our two tomorrows become one.',
  weddingDateTime: '2026-12-31T10:30:00+05:30',
  weddingDateLabel: 'Thursday, 31st December 2026',
  closingLine: 'With love, Visakh & Aiswarya',
  families: [
    { title: "The Groom's family", text: 'Together with family and friends, invite you to bless the union.' },
    { title: "The Bride's family", text: 'Together with family and friends, invite you to bless the union.' },
  ],
  story: [
    { title: 'How we met', 
      date: 'Our beginning',
      text: 'We met during our post-graduation days. Though our journeys took different turns, our hearts stayed close. What began as a friendship blossomed into a beautiful love story.',
      photo: '/assets/firstimageEves.jpg' },
    { title: 'The first yes',
      date: 'A special moment',
      text: 'It took a little time for our hearts to find the right moment, but when it finally happened, it was nothing short of beautiful, a moment that made our love story even more special.',
      photo: '/assets/sxcImage.jpg' },
    { title: 'The Engagement', 
      date: 'May of 2026', 
      text: 'A day close to our hearts, filled with love, laughter and blessings. The day we celebrated our promise to forever and began counting down to the beautiful journey of marriage.', 
      photo: '/assets/engCute.jpeg' },
  ],
  engagementPhotos: [
  { src: '/assets/eng8.JPG', caption: 'A Promise of Forever' },
  // { src: '/assets/eng3.JPG', caption: 'A special moment' },
  // { src: '/assets/eng4.JPG', caption: 'Together with family' },
  { src: '/assets/eng5.JPG', caption: 'Our Favourite People' },
  { src: '/assets/eng7.JPG', caption: 'Side by Side' },
  { src: '/assets/engaeOtdoor.JPG', caption: 'Wherever, Together' },
  { src: '/assets/sidebySide.JPG', caption: 'A Moment of Us' },
  // { src: '/assets/eng9.JPG', caption: 'A special moment' },
],
  events: [
    { name: 'Wedding ceremony', time: 'Thursday, 31st December 2026 · 10:30 AM', place: 'RDR Wedding Auditorium', note: 'Please update the venue and timing before publishing.' },
    { name: 'Reception', time: 'Add reception time', place: 'Add reception venue', note: 'We look forward to celebrating with you.' },
  ],
  venue: {
    name: 'Wedding venue',
    address: 'Add the full venue address, Kerala',
    mapLink: 'https://www.google.com/maps',
    mapEmbedUrl: '',
  },
  rsvp: {
    enabled: true,
    heading: 'Will you be joining us?',
    deadline: 'Kindly let us know if you can celebrate with us.',
  },
  music: { file: '/assets/eemizhikallong.mp3', credit: '' },
} as const
