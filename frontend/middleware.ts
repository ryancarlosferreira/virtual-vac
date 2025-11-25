import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/signup",
  "/forgot",
  "/api",
  "/favicon.ico",
  "/_next",
  "/static",
];
const PROTECTED_PREFIXES = ["/admin", "/vaccines", "/profile"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // permite recursos públicos
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p)))
    return NextResponse.next();

  // só aplica proteção aos prefixos definidos
  if (!PROTECTED_PREFIXES.some((p) => pathname.startsWith(p)))
    return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  // token presente — o backend irá validar assinatura/expiração ao buscar dados
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/vaccines/:path*",
    "/profile/:path*",
  ],
};
