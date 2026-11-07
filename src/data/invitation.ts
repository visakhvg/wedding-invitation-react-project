export type Person = {
  name: string
  fullName: string
  photo: string
  about: string,
  address: string
}

export const invitation = {
  groom: {
    name: "Visakh",
    fullName: "Visakh Venugopal",
    photo: "/assets/groom.svg",
    about: "S/o Smt. S.S Devi Priya & Shri. G Venugopalan Nair",
    address: "Punartham, Nadukkadu, Thiruvananthapuram",
  } satisfies Person,
  bride: {
    name: "Aiswarya",
    fullName: "Aiswarya P Anil",
    photo: "/assets/bride.svg",
    about: "D/o Smt. Preetha Kumari C.P & Shri. Anil Shankar R.S",
    address: "Karthika, Eanchakkal, Thiruvananthapuram",
  } satisfies Person,
  envelopeTagline: "Our Forever Begins Here",
  tagline: "We are tying the knot",
  quote:
    "And so, beneath the same sky that watched our story unfold, we gather the people we love to witness the day our two tomorrows become one.",
  weddingDateTime: "2026-12-31T10:30:00+05:30",
  weddingDateLabel: "Thursday, 31st December 2026",
  closingLine: "With love, Visakh & Aiswarya",
  families: [
    {
      title: "The Groom's family",
      text: "Together with family and friends, invite you to bless the union.",
    },
    {
      title: "The Bride's family",
      text: "Together with family and friends, invite you to bless the union.",
    },
  ],
  story: [
    {
      title: "How we met",
      date: "Our beginning",
      text: "We met during our post-graduation days. Though our journeys took different turns, our hearts stayed close. What began as a friendship blossomed into a beautiful love story.",
      photo: "/assets/firstimageEves.jpg",
    },
    {
      title: "The first yes",
      date: "A special moment",
      text: "It took a little time for our hearts to find the right moment, but when it finally happened, it was nothing short of beautiful, a moment that made our love story even more special.",
      photo: "/assets/sxcImage.jpg",
    },
    {
      title: "The Engagement",
      date: "May of 2026",
      text: "A day close to our hearts, filled with love, laughter and blessings. The day we celebrated our promise to forever and began counting down to the beautiful journey of marriage.",
      photo: "/assets/engCute.jpeg",
    },
  ],
  engagementPhotos: [
    { src: "/assets/eng8.JPG", caption: "A Promise of Forever" },
    // { src: '/assets/eng3.JPG', caption: 'A special moment' },
    // { src: '/assets/eng4.JPG', caption: 'Together with family' },
    { src: "/assets/eng5.JPG", caption: "Our Favourite People" },
    { src: "/assets/eng7.JPG", caption: "Side by Side" },
    { src: "/assets/engaeOtdoor.JPG", caption: "Wherever, Together" },
    { src: "/assets/sidebySide.JPG", caption: "A Moment of Us" },
    // { src: '/assets/eng9.JPG', caption: 'A special moment' },
  ],
  events: [
    // { name: 'Wedding ceremony', date:'Thursday, 31st December 2026',time: 'Muhurtham :  Between 12 pm & 12:23 pm', place: 'RDR Wedding Auditorium, Edapazhinji, Thiruvaananthapuram', note: 'Reception : 11 am' },
    {
      name: "Wedding Ceremony",
      place: "RDR Wedding Auditorium",
      address: "Edapazhinji, Thiruvananthapuram",
      date: "Thursday, 31st December 2026",
      time: "12:00 pm – 12:23 pm",
      note: "Reception · 11:00 am",
    },
    {
      name: "Groom Side Reception",
      place: "Ramya Kalyanamandapam",
      address: "Pallichal, Thiruvananthapuram",
      date: "Friday, 1st January 2027",
      time: "5 pm to 8:30 pm",
      note: "",
    },
    // { name: 'Groom Side Reception', date:'',time: 'From 5pm to 8:30pm', place: 'Ramya Kalyanamandapam, Pallichal, Thiruvananthapuram', note: 'We look forward to celebrating with you.' },
  ],
  venue: [
    {
      name: "Wedding venue",
      address: "RDR Wedding Auditorium, Edapazhinji, Thiruvananthapuram",
      mapLink: "https://www.google.com/maps/place/RDR+Convention+Centre/@8.5036568,76.9660759,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05ba4a6959e6c9:0xcb867b71b24e2b48!8m2!3d8.5036515!4d76.9686508!16s%2Fg%2F1tn4wlr4?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "",
    },
    {
      name: "Reception venue",
      address: "Ramya Kalyanamandapam,Ayanimoodu Jn, Pallichal, Thiruvananthapuram",
      mapLink: "https://www.google.com/maps/place/Ramya+Kalyanamandapam/@8.4355268,77.0238181,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05afe43f440bfb:0xb1e35adff1c8ef3c!8m2!3d8.4355215!4d77.026393!16s%2Fg%2F11xbrq6tm?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "",
    },
  ],
  rsvp: {
    enabled: true,
    heading: "Will you be joining us?",
    deadline: "Kindly let us know if you can celebrate with us.",
  },
  music: { file: "/assets/eemizhikallong.mp3", credit: "" },
} as const;
