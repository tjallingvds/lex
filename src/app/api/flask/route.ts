import { NextRequest, NextResponse } from 'next/server';

// The base URL for the Flask backend
const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

/**
 * This route handler proxies requests from the Next.js frontend to the Flask backend
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  
  try {
    const response = await fetch(`${FLASK_API_URL}${path}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying to Flask backend:', error);
    return NextResponse.json(
      { error: 'Failed to connect to Flask backend' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  
  try {
    const body = await request.json();
    const response = await fetch(`${FLASK_API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying to Flask backend:', error);
    return NextResponse.json(
      { error: 'Failed to connect to Flask backend' },
      { status: 500 }
    );
  }
}