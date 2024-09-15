import MyInfoHero from "@/components/custom/MyInfoHero";
import type { Metadata } from "next";
import { getUser } from "../services/getUser";

export const metadata: Metadata = {
  title: "HarmonyHR My Info",
  description: "HarmonyHR test task",
};

export default async function MyInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getUser();
  return (
    <>
      <MyInfoHero data={data} />
      {children}
    </>
  );
}
