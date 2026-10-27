# Visakh & Aiswarya — Wedding Invitation (React)

A static React + TypeScript + Vite invitation frontend. Photos, CSS, JavaScript and music are bundled with the site; Google Sheets is used only to collect RSVP responses and optional wishes/messages.

## 1. Run locally

Install Node.js (LTS), open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Build for deployment with `npm run build`; the output is in `dist/`.

## 2. Add your own assets

Place images in `public/assets/`. Replace `groom.svg`, `bride.svg`, and `story-1.svg` to `story-3.svg` with your real photos (or change the paths in `src/data/invitation.ts`). Use paths such as `/assets/groom.jpg`. Add `music.mp3` only if you have permission to use the track.

Recommended: compress photos before committing them. The site does not require a separate image-hosting service.

## 3. Configure invitation content

Edit `src/data/invitation.ts` for the names, date, quote, family details, story, ceremony/reception, venue, map link, and RSVP copy. The existing details are a starting point; replace every venue/event placeholder before publishing. Wedding date currently set to 31 December 2026 at 10:30 AM IST, based on the earlier invitation configuration.

## 4. Connect RSVP to Google Sheets

1. Create a Google Sheet. Open **Extensions → Apps Script**.
2. Copy the code from `google-apps-script/Code.gs` into the script editor.
3. Save and choose **Deploy → New deployment → Web app**.
4. Set **Execute as: Me** and **Who has access: Anyone**. Deploy and authorize the script when prompted.
5. Copy the deployed Web app URL ending in `/exec`.
6. Copy `.env.example` to `.env` and set:

   ```env
   VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

7. Restart `npm run dev` and test a submission. Apps Script creates a tab called `RSVP` and adds headers automatically. Each row stores timestamp, name, attendance, guest count and message.

**Privacy note:** anyone with the endpoint can submit a response, so do not store private guest details beyond what is needed. The sheet itself should remain private; never publish its sharing link or embed credentials in frontend code. Apps Script's browser response is opaque in this simple no-CORS setup, so the UI confirms that the request was sent, not that the sheet independently acknowledged it. Verify the first test in the spreadsheet.

## 5. Deploy to Render as a Static Site

Push the project to a Git repository, then in Render create **New → Static Site** and connect the repository.

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Add environment variable: `VITE_RSVP_ENDPOINT` with your Apps Script `/exec` URL.

Vite embeds `VITE_` variables at build time, so after changing that value, trigger a new deployment. No Java server is required for the invitation frontend.

## Project structure

```text
public/assets/              Images and optional music
src/components/Envelope.tsx Envelope-opening animation
src/components/RsvpForm.tsx RSVP form
src/data/invitation.ts      Invitation content to edit
src/lib/rsvp.ts             Google Apps Script request
src/App.tsx                 Invitation page
src/styles.css              Theme and responsive layout
google-apps-script/Code.gs  Google Sheets endpoint
```
