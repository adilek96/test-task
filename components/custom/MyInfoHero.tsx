import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import MyInfoScrollMenu from "./MyInfoScrollMenu";
import HeroSelect from "./HeroSelect";

// данные для селектов
const items = [
  {
    value: "test 1",
    label: "Test 1",
  },
  {
    value: "test 2",
    label: "Test 2",
  },
];

interface User {
  __typename: string;
  name: string;
  avatar: string;
}

export default function MyInfoHero({ data }: { data: User }) {
  return (
    <div className="h-[200px] w-full bg-headerbg flex flex-row ">
      <div className="h-full  w-[300px] hidden  md:flex justify-center items-center">
        <Avatar className="w-[130px] h-[130px] z-30">
          {data?.avatar !== null ? (
            <AvatarImage src={data?.avatar} />
          ) : (
            <AvatarImage src="https://github.com/shadcn.png" />
          )}

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="h-full w-full md:w-[calc(100vw-300px)]  flex flex-col justify-between">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex justify-center items-center ">
            <Avatar className="w-[100px] h-[100px] z-30 md:hidden ml-10">
              {data?.avatar !== null ? (
                <AvatarImage src={data?.avatar} />
              ) : (
                <AvatarImage src="https://github.com/shadcn.png" />
              )}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="ml-10 font-semibold text-3xl">{data?.name}</h2>
          </div>
          <div className="md:hidden flex items-start mr-10 gap-3 ">
            <Button variant="outline" className="hover:bg-inherit">
              <EllipsisVertical className="w-5 h-5  text-[#1C3144]" />
            </Button>
          </div>

          <div className="md:flex items-center mr-10 gap-3 hidden">
            <HeroSelect
              items={items}
              className="border border-[#7C96B1] rounded-lg  text-sm hover:bg-headerbg"
              itemPlaceholder="Request a Change"
            />
            <HeroSelect
              items={items}
              className="border border-[#7C96B1] rounded-lg  hover:bg-headerbg"
              itemPlaceholder="icon.settings"
            />
          </div>
        </div>

        <MyInfoScrollMenu />
      </div>
    </div>
  );
}
