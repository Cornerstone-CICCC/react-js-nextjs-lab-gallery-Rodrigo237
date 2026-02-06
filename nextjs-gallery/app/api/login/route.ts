import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = body.username ?? '';

    const res = NextResponse.redirect(new URL('/gallery', req.url));
    res.cookies.set({
      name: 'gallery-user',
      value: username,
      httpOnly: true,
      maxAge: 10 * 60,
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
