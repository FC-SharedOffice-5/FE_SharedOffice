import { auth } from '@/auth';
import { match } from 'path-to-regexp';
import { NextResponse } from 'next/server';

const matchersForAuth = ['/'];

export default auth((req) => {
  if (req.auth) {
    return NextResponse.next();
  }

  if (isMatch(req.nextUrl.pathname, matchersForAuth)) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';

    url.searchParams.set('callbackUrl', `${req.url}`);

    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|mockServiceWorker.js|fonts/.*|icons/.*).*)',
  ],
};

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}
