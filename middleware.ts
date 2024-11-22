import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')
  const { pathname } = request.nextUrl

  const publicPaths = ['/', '/login']
  const isPublicPath = publicPaths.includes(pathname)

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/', '/login', '/home', '/config']
}