import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const SHEET_ID = '1Vv8gYpT0aVqOgqzDFZXhs28y11fZWM5vYyCPnywZzbg';

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://mp-pharma.vercel.app',
  'https://mppharmaceuticals.com',
];

const getSheetsClient = () => {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!key) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY in environment');

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(key),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Shared CORS logic
function withCORS(origin: string | null, response: NextResponse) {
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

// Handle CORS preflight
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  return withCORS(origin, new NextResponse(null, { status: 200 }));
}

// Handle contact form POST
export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');

  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return withCORS(origin, NextResponse.json({ error: 'Missing required fields' }, { status: 400 }));
    }

    const sheets = getSheetsClient();

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:A',
    });

    const rows = res.data.values || [];
    const lastRow = rows.length;

    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `Sheet1!A${lastRow + 1}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phone, email, message, formattedDate]],
      },
    });

    return withCORS(origin, NextResponse.json({ success: true, message: 'Data saved successfully!' }, { status: 200 }));
  } catch (error) {
    console.error('Error saving data to Google Sheets:', error);
    return withCORS(origin, NextResponse.json({ error: 'Failed to save data' }, { status: 500 }));
  }
}
