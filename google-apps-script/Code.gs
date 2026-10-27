/**
 * Google Apps Script endpoint for the wedding invitation RSVP form.
 * Create a Google Sheet with a tab named "RSVP", then paste this script
 * into Extensions > Apps Script. Deploy as a Web app:
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the /exec URL into VITE_RSVP_ENDPOINT in your local .env file.
 */
const SHEET_NAME = 'RSVP';
const HEADERS = ['Timestamp', 'Name', 'Attending', 'Guests', 'Message'];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const name = String(body.name || '').trim().slice(0, 120);
    const message = String(body.message || '').trim().slice(0, 500);
    const attending = body.attending === true;
    const guests = attending ? Math.max(1, Math.min(8, Number(body.guests) || 1)) : 0;

    if (!name) return json_({ ok: false, error: 'Name is required.' });

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([new Date(), safeCell_(name), attending ? 'Yes' : 'No', guests, safeCell_(message)]);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Could not save RSVP.' });
  }
}

function doGet() {
  return json_({ service: 'Wedding RSVP endpoint', ready: true });
}

// Prevent user-provided strings beginning with formula characters from being evaluated.
function safeCell_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
