import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/signup",
  "/forgot",
  "/api",
  "/favicon.ico",
  "/_next",
  "/static",
];

// Função para decodificar JWT (sem validar assinatura - backend fará isso)
function decodeJWT(token?: string | null) {
  if (!token) return null;
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

  // Se o usuário está autenticado e tenta acessar a raiz ou login, redireciona
  if (token && (pathname === "/" || pathname === "/login")) {
    const decoded = decodeJWT(token);
    const userRole = decoded?.role || "USER";
    const redirectUrl = userRole === "ADMIN" ? "/admin" : "/vaccines";
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }

  // Redireciona para login se não tiver token e não for rota pública
  if (!token && pathname !== "/" && pathname !== "/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  // Se não tiver token, permite acesso à raiz/login
  if (!token) {
    return NextResponse.next();
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
  matcher: [
    "/login",
    "/admin/:path*",
    "/vaccines/:path*",
    "/profile/:path*",
  ],
};
