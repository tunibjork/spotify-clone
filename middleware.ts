import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("SPOTIFY_CLONE_ACCESS_TOKEN");
  const url = req.nextUrl.clone();

  if (
    req.nextUrl.pathname === "/" ||
    req.nextUrl.pathname.startsWith("/playlist") ||
    req.nextUrl.pathname.startsWith("/library")
  ) {
    if (!token) {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }

  if (
    req.nextUrl.pathname === "/signin" ||
    req.nextUrl.pathname === "/signup"
  ) {
    if (token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
}
