import { auth } from '@/auth';
import { match } from 'path-to-regexp';
import { NextResponse } from 'next/server';

// 권한을 가진 사용자만 접근 가능한 경로
const matchersForAuth = [
  '/profile',
  '/settings',
  '/logout',
  '/',
  '/mypage',
  '/schedules',
  '/schedule',
  '/office',
];
// 권한이 없는 사용자만 접근 가능한 경로
const matchersForNoAuth = ['/login', '/signup'];

export default auth((req) => {
  const url = req.nextUrl.clone();
  if (req.auth?.accessToken) {
    if (isMatch(req.nextUrl.pathname, matchersForNoAuth)) {
      url.pathname = '/';

      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (isMatch(req.nextUrl.pathname, matchersForAuth)) {
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
