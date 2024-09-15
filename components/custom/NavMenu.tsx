"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavMenu({
  menuItem,
  className,
  itemClass,
}: {
  menuItem: { link: string; title: string }[];
  className: string;
  itemClass: string;
}) {
  let pathname = usePathname();
  if (pathname === "/") {
    pathname = pathname;
  } else {
    pathname = pathname.replace(/[/]/g, " ");
  }

  return (
    <>
      <nav
        className={cn(
          " gap-6  font-medium md:flex md:flex-row md:items-end md:gap-5  lg:gap-6 ",
          className
        )}
      >
        <ul className="flex-row flex-nowrap flex items-end  md:ml-10 h-full ">
          {menuItem.map((item, i) => {
            return (
              <li
                key={i}
                className={`h-12  px-3 flex justify-center items-center rounded-t-md ${
                  (item.link !== "/" &&
                    pathname.includes(item.link.replace(/[/]/g, " "))) ||
                  item.link === pathname
                    ? `${itemClass}`
                    : ""
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
