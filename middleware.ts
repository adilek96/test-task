import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "@/app/services/getUser";

export async function middleware(request: NextRequest) {
  const user = await getUser(); 

  const currentPath = request.nextUrl.pathname;


  if (currentPath.startsWith("/myInfo") && user === null) {
    return NextResponse.redirect(new URL("/login", request.url)); // Перенаправляем на страницу входа
  }

  if (currentPath.startsWith("/login") && user !== null) {
    return NextResponse.redirect(new URL("/myInfo/timeOff", request.url)); // Если юзер в системе ихочет открыть страницу входа
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/myInfo/:path*', '/login'],
};
