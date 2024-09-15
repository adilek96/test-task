import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NavMenu from "@/components/custom/NavMenu";

const menuItem = [
  {
    link: "#",
    title: "Personal",
  },
  {
    link: "#",
    title: "Job",
  },
  {
    link: "/myInfo/timeOff",
    title: "Time off",
  },
  {
    link: "#",
    title: "Emergency",
  },
  {
    link: "#",
    title: "Documents",
  },
  {
    link: "#",
    title: "Notes",
  },
  {
    link: "#",
    title: "Benifits",
  },
  {
    link: "#",
    title: "Training",
  },
  {
    link: "#",
    title: "Assets",
  },
];

export default function MyInfoScrollMenu() {
  return (
    <ScrollArea className=" h-16">
      <div className="flex-row flex flex-nowrap   ">
        <NavMenu
          menuItem={menuItem}
          className={"text-sm h-15 "}
          itemClass="bg-white"
        />
        <div className="flex items-end">
          <Select>
            <SelectTrigger className="h-12 border-0   px-3 flex justify-center items-center rounded-t-md text-sm text-muted-foreground hover:text-foreground font-medium">
              <SelectValue placeholder="More" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Test item 1</SelectItem>
              <SelectItem value="dark">Test item 2</SelectItem>
              <SelectItem value="system">Test item 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
