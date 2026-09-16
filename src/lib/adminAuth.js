import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  createSessionToken,
  getAdminPassword,
  sessionCookieOptions,
  verifySessionToken,
} from "./adminSession";

export {
  ADMIN_COOKIE,
  createSessionToken,
  getAdminPassword,
  sessionCookieOptions,
  verifySessionToken,
};

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}
