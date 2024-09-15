"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BurgerNavMenu({
  menuItem,
}: {
  menuItem: { link: string; title: string }[];
}) {
  const pathname = usePathname();
  return (
    <>
      <nav className="grid gap-6 text-lg font-medium">
        <ul className=" flex flex-col justify-center items-center ">
          {menuItem.map((item, i) => {
            return (
              <li
                key={i}
                className={`h-9  w-full flex justify-center items-center rounded-md ${
                  pathname === item.link ? "bg-headerbg" : ""
                }`}
              >
                <Link
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground text-nowrap"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
