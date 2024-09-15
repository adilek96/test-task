'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const config = {
    path: "/",
    domain: process.env.HOST ?? "localhost",
    maxAge: -1
  };

export async function logoutAction() {

    cookies().set("refresh_token", "", config);
    cookies().set("access_token", "", config);
    redirect("/login")

  
}
