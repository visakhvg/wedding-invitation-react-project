import { useEffect, useState } from 'react'
import { Envelope } from './components/Envelope'
import { RsvpForm } from './components/RsvpForm'
import { invitation } from './data/invitation'
import EngagementGallery from './components/EngagementGallery'


function Countdown() {
  const target = new Date(invitation.weddingDateTime).getTime()
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  const seconds = Math.max(0, Math.floor((target - now) / 1000))
  const values = [Math.floor(seconds / 86400), Math.floor((seconds % 86400) / 3600), Math.floor((seconds % 3600) / 60), seconds % 60]
  return <div className="countdown">{['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => <div className="count-cell" key={label}><strong>{String(values[i]).padStart(2, '0')}</strong><span>{label}</span></div>)}</div>
}

export default function App() {
  const [opened, setOpened] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const names = `${invitation.groom.name} & ${invitation.bride.name}`
  const [audio] = useState(() => typeof Audio === 'undefined' ? null : new Audio(invitation.music.file))

  useEffect(() => {
    if (audio) audio.loop = true
    return () => { audio?.pause() }
  }, [audio])

  async function toggleMusic() {
    if (!audio) return
    if (musicOn) {
      audio.pause()
      setMusicOn(false)
    } else {
      try { await audio.play(); setMusicOn(true) } catch { setMusicOn(false) }
    }
  }

  return <>
    {!opened && <Envelope names={names} tagline={invitation.tagline} date={invitation.weddingDateLabel} onOpen={() => setOpened(true)} />}
    <main className={`invitation ${opened ? 'invitation-visible' : 'invitation-hidden'}`}>
      <header className="topbar"><a className="brand" href="#top">{names}</a><nav><a href="#couple">The couple</a><a href="#story">Our story</a><a href="#celebrations">Celebrations</a><a href="#venue">Venue</a><a href="#rsvp">RSVP</a></nav></header>
      <section className="hero section-wrap" id="top">
        <p className="eyebrow">{invitation.tagline}</p><h1>{names}</h1><p className="hero-date">{invitation.weddingDateLabel}</p>
        <div className="divider-flourish">❦</div><p className="hero-quote">{invitation.quote}</p><Countdown />
        <a className="button button-outline" href="#rsvp">Kindly respond</a>
      </section>
      <section className="section-wrap" id="couple"><p className="eyebrow">Together with our families</p><h2 className="section-title">Two hearts, one family</h2>
        <div className="couple-grid">{[invitation.groom, invitation.bride].map((person) => <article className="person-card" key={person.name}><img src={person.photo} alt={person.fullName} loading="lazy"/><p className="script-name">{person.name}</p><h3>{person.fullName}</h3><p>{person.about}</p></article>)}</div>
      </section>
      <section className="soft-section"><div className="section-wrap"><p className="eyebrow">With the blessings of</p><h2 className="section-title">Our families</h2><div className="family-grid">{invitation.families.map((family) => <article className="family-card" key={family.title}><h3>{family.title}</h3><p>{family.text}</p></article>)}</div></div></section>
      <section className="section-wrap" id="story"><p className="eyebrow">Every love story is beautiful</p><h2 className="section-title">Our little story</h2><div className="story-grid">{invitation.story.map((chapter, index) => <article className="story-card" key={chapter.title}><img src={chapter.photo} alt={chapter.title} loading="lazy"/><div className="story-copy"><span>{chapter.date}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></div><span className="story-number">0{index + 1}</span></article>)}</div></section>
      <EngagementGallery photos={invitation.engagementPhotos} />
      <section className="soft-section" id="celebrations"><div className="section-wrap"><p className="eyebrow">Save the date</p><h2 className="section-title">The celebrations</h2><div className="events-grid">{invitation.events.map((event) => <article className="event-card" key={event.name}><span className="event-symbol">✦</span><h3>{event.name}</h3><p className="event-time">{event.time}</p><p>{event.place}</p><p className="muted">{event.note}</p></article>)}</div></div></section>
      <section className="section-wrap venue-section" id="venue"><p className="eyebrow">We would love to see you</p><h2 className="section-title">Find us on the map</h2><h3>{invitation.venue.name}</h3><p>{invitation.venue.address}</p>{invitation.venue.mapEmbedUrl && <div className="map-box"><iframe title="Wedding venue map" src={invitation.venue.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>}<a className="button button-outline" href={invitation.venue.mapLink} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></section>
      <section className="soft-section rsvp-section" id="rsvp"><div className="section-wrap rsvp-wrap"><p className="eyebrow">Kindly reply</p><h2 className="section-title">{invitation.rsvp.heading}</h2><p>{invitation.rsvp.deadline}</p><RsvpForm /></div></section>
      <footer className="footer"><p className="divider-flourish">❦</p><p className="footer-quote">“{invitation.quote}”</p><p className="script-name">{invitation.closingLine}</p><p className="footer-date">{invitation.weddingDateLabel}</p></footer>
      <button className="music-toggle" type="button" onClick={toggleMusic} aria-pressed={musicOn}>{musicOn ? '♫ Sound on' : '♫ Play music'}</button>
    </main>
  </>
}
