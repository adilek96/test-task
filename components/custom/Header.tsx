import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Bell,
  CircleUser,
  Menu,
  Search,
  Settings,
  CircleHelp,
} from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import NavMenu from "./NavMenu";
import BurgerNavMenu from "./BurgerNavMenu";
import { getUser } from "@/app/services/getUser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logoutAction } from "@/app/action/logoutAction";

const menuItem = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/myInfo",
    title: "My info",
  },
  {
    link: "#",
    title: "People",
  },
  {
    link: "#",
    title: "Hiring",
  },
  {
    link: "#",
    title: "Reports",
  },
  {
    link: "#",
    title: "Files",
  },
];

export default async function Header() {
  const data = await getUser();
  return (
    <header className="sticky top-0 bg-opacity-100 z-50 flex shadow-sm h-16 w-full items-center gap-4 border-b  bg-white px-4 md:px-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <h1 className="font-bold text-black text-[20px]">HarmonyHR</h1>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="flex h-full  items-center gap-5 flex-row-reverse md:flex-row w-[80%]">
        <NavMenu
          menuItem={menuItem}
          className={"hidden text-lg md:text-sm h-full"}
          itemClass="bg-headerbg"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-bodybg">
            <BurgerNavMenu menuItem={menuItem} />
          </SheetContent>
        </Sheet>
        <form className="ml-auto flex-1 sm:flex-initial xs:block hidden">
          <div className="relative ">
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground " />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 lg:w-[300px] mr-8   h-8 border border-black rounded-xl"
            />
          </div>
        </form>
        <button className="xs:hidden  border border-black rounded-xl w-8 h-8 flex justify-center items-center">
          <Search className=" h-4 w-4 text-muted-foreground  " />
        </button>
      </div>
      <div className="flex  items-center gap-1 md:ml-auto ">
        <ul className="hidden lg:flex">
          <li>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleHelp className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notification</span>
            </Button>
          </li>
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {data !== null ? (
                <Avatar className="w-6 h-6 ">
                  <AvatarImage src={data.avatar} />

                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ) : (
                <CircleUser className="h-5 w-5" />
              )}

              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="lg:hidden">Settings</DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">Help</DropdownMenuItem>
            <DropdownMenuItem className="lg:hidden">
              Notification
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {data !== null ? (
                <form action={logoutAction}>
                  <Button variant="outline" type="submit">
                    Logout
                  </Button>
                </form>
              ) : (
                <Link href="/login">Log In</Link>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
