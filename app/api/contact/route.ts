
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://mp-pharma.vercel.app',
  'https://mppharmaceuticals.com',
];

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

// Simple validation endpoint - actual email sending happens on client side
export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');

  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message) {
      return withCORS(origin, NextResponse.json({ error: 'Missing required fields' }, { status: 400 }));
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return withCORS(origin, NextResponse.json({ error: 'Invalid email format' }, { status: 400 }));
    }

    // Log the submission (you can add database storage here if needed)
    console.log('Contact form submission:', { name, email, phone, message: message.substring(0, 50) + '...' });

    return withCORS(origin, NextResponse.json({ success: true, message: 'Form validated successfully' }, { status: 200 }));
  } catch (error) {
    console.error('Contact form error:', error);
    return withCORS(origin, NextResponse.json({ error: 'Server error' }, { status: 500 }));
  }
}

export const runtime = "edge";