import { NextResponse } from 'next/server';
export function middleware(req) {
    const { pathname } = req.nextUrl;
    console.log(pathname)
  
    if (pathname.startsWith('/admin')) {
        const admin_token = req.cookies.get('admin_token');
        console.log(admin_token)
        if (!admin_token) {
            return NextResponse.redirect(new URL('/admin-login', req.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
