export type RsvpPayload = {
  name: string
  attending: boolean
  guests: number
  message: string
}

/**
 * Apps Script web apps commonly require a no-cors POST from a static frontend.
 * The browser cannot read the response in no-cors mode, so a resolved request
 * means it was sent, not that the spreadsheet has independently confirmed it.
 */
export async function submitRsvp(payload: RsvpPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_RSVP_ENDPOINT?.trim()
  if (!endpoint) throw new Error('RSVP is not connected yet. Please try again later.')

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
}
