import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/custom/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HarmonyHR test task",
  description: "HarmonyHR test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-bodybg h-[100vh] w-[100vw] overflow-x-hidden  ${montserrat.className} `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
