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

// Função para decodificar JWT (sem validar assinatura - backend fará isso)
function decodeJWT(token: string) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // permite recursos públicos
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p)))
    return NextResponse.next();

  const token = req.cookies.get("token")?.value;

  // Redireciona para login se não tiver token
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  // Decodifica token para verificar role
  const decoded = decodeJWT(token);
  const userRole = decoded?.role || "USER";

  // ADMIN só acessa /admin
  if (userRole === "ADMIN") {
    if (!pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  // USER só acessa /vaccines e /profile (não acessa /admin)
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/vaccines", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/vaccines/:path*", "/profile/:path*"],
};
