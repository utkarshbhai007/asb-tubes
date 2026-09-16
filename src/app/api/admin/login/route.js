import { NextResponse } from "next/server";
import {
  createSessionToken,
  getAdminPassword,
  sessionCookieOptions,
} from "../../../../lib/adminAuth";

export async function POST(request) {
  try {
    const body = await request.json();
    const password = String(body.password || "");

    if (password !== getAdminPassword()) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = createSessionToken();
    const response = NextResponse.json({ ok: true });
    const cookie = sessionCookieOptions(token);
    response.cookies.set(cookie.name, cookie.value, cookie);
    return response;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
