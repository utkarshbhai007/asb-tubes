import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "./lib/adminCookie";

export function middleware(request) { 
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const hasSession = Boolean(request.cookies.get(ADMIN_COOKIE)?.value);

  if (pathname === "/admin/login") {
    if (hasSession) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (!hasSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
