import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // Email sending logic removed. Implement new logic here.
  return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 501 });
}
