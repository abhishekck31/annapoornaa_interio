import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 501 });
}
