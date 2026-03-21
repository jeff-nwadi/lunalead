import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const isAuthorized = request.cookies.get('sanity-studio-auth');
    if (!isAuthorized) {
      const url = request.nextUrl.clone();
      url.pathname = '/studio-login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/studio/:path*'],
};
