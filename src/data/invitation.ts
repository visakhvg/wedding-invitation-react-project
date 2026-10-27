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
    about: 'Son of Shri. G Venugopalan Nair and Smt. S S Devi Priya',
  } satisfies Person,
  bride: {
    name: 'Aiswarya',
    fullName: 'Aiswarya P Anil',
    photo: '/assets/bride.svg',
    about: 'Daughter of Shri. Anil Shankar R.S and Smt. Preetha Kumari C.P',
  } satisfies Person,
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
    { title: 'How we met', date: 'Our beginning', text: 'Add a few lines about the day your story began.', photo: '/assets/story-1.svg' },
    { title: 'The first yes', date: 'A special moment', text: 'Share the moment your journey together became official.', photo: '/assets/story-2.svg' },
    { title: 'The engagement', date: 'May 2026', text: 'A beautiful day celebrated with the people closest to your hearts.', photo: '/assets/eng1.JPG' },
  ],
  engagementPhotos: [
  { src: '/assets/eng2.JPG', caption: 'Our engagement' },
  { src: '/assets/eng3.JPG', caption: 'A special moment' },
  { src: '/assets/eng4.JPG', caption: 'Together with family' },
  { src: '/assets/eng5.JPG', caption: 'Together with family' },
  { src: '/assets/eng6.JPG', caption: 'A special moment' },
  { src: '/assets/eng7.JPG', caption: 'A special moment' },
  { src: '/assets/eng8.JPG', caption: 'A memory to cherish' },
  { src: '/assets/eng9.JPG', caption: 'A special moment' },
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
  music: { file: '/assets/music.mp3', credit: '' },
} as const
