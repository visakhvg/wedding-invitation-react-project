import { useState } from 'react'
import type { FormEvent } from 'react'
import { submitRsvp } from '../lib/rsvp'

export function RsvpForm() {
  const [attending, setAttending] = useState('yes')
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<{ text: string; type: 'ok' | 'error' | '' }>({ text: '', type: '' })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    if (!name) {
      setStatus({ text: 'Please enter your name so we know who replied.', type: 'error' })
      return
    }

    setBusy(true)
    setStatus({ text: '', type: '' })
    try {
      await submitRsvp({
        name,
        attending: attending === 'yes',
        guests: attending === 'yes' ? Number(data.get('guests') ?? 1) : 0,
        message: String(data.get('message') ?? '').trim(),
      })
      form.reset()
      setAttending('yes')
      setStatus({ text: 'Thank you! Your reply has been sent. We look forward to celebrating with you.', type: 'ok' })
    } catch (error) {
      setStatus({ text: error instanceof Error ? error.message : 'We could not send your reply. Please try again.', type: 'error' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <label>Your name<input name="name" maxLength={120} required autoComplete="name" /></label>
      <fieldset>
        <legend>Can you join us?</legend>
        <label className="radio-line"><input type="radio" name="attending" value="yes" checked={attending === 'yes'} onChange={() => setAttending('yes')} /> Yes, I'll be there</label>
        <label className="radio-line"><input type="radio" name="attending" value="no" checked={attending === 'no'} onChange={() => setAttending('no')} /> Sorry, I can't make it</label>
      </fieldset>
      {attending === 'yes' && <label>Number of guests, including you
        <select name="guests" defaultValue="1">{Array.from({ length: 8 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select>
      </label>}
      <label>A note for the couple (optional)<textarea name="message" rows={4} maxLength={500} placeholder="Send your wishes…" /></label>
      <button className="button button-primary" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send your reply'}</button>
      {status.text && <p className={`form-status ${status.type}`} role="status">{status.text}</p>}
      {!import.meta.env.VITE_RSVP_ENDPOINT && <p className="setup-note">Setup note: connect the Google Apps Script URL in the project’s `.env` file to enable submissions.</p>}
    </form>
  )
}
