import { NextResponse, NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
  
    const publicRoutes = ['/', '/login', '/dashboard'];

    const isLoggedIn = request.cookies.get('token') || '';
  
    if (isLoggedIn && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url))
    }
  
    if (!isLoggedIn && !publicRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
  
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login', '/dashboard'],
};
