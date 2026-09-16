import { createHmac, timingSafeEqual } from "crypto";
import { ADMIN_COOKIE } from "./adminCookie";

export { ADMIN_COOKIE };

function getSecret() {
  return (
    process.env.ADMIN_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "asb-admin-change-me"
  );
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "asbtubes-admin";
}

export function createSessionToken() {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = `admin:${exp}`;
  const sig = createHmac("sha256", getSecret()).update(payload).digest("hex");
  return `${payload}:${sig}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [role, expStr, sig] = parts;
  if (role !== "admin") return false;
  const exp = Number(expStr);
  if (!exp || Date.now() > exp) return false;

  const payload = `${role}:${expStr}`;
  const expected = createHmac("sha256", getSecret()).update(payload).digest("hex");

  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function sessionCookieOptions(token) {
  return {
    name: ADMIN_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}
