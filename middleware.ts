import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/signin";
  const token = req.cookies.get("SPOTIFY_CLONE_ACCESS_TOKEN");

  if (!token) {
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/", "/playlist", "/library"],
};
