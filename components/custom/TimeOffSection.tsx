import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import LeaveCard from "./LiveCard";
import { Separator } from "@/components/ui/separator";
import TimeListIcon from "@/public/icons/TimeListIcon";
import TravelIcon from "@/public/icons/TravelIcon";
import PlusIcon from "@/public/icons/PlusIcon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Clock } from "lucide-react";
import PigIcon from "@/public/icons/PigIcon";
import HistoryIcon from "@/public/icons/HistoryIcon";
import TimeOffSelect from "./TimeOffSelect";
import TimeOffTable from "./TimeOffTable";

// данные для тайм-офф карточек
const leaveData = [
  {
    title: "Sick",
    value: 3,
    subtitle: "Days Available",
    iconSrc: <PlusIcon />,
    additionalInfo: "1 dey scheduled",
    link: "Sick Full-time",
  },
  {
    title: "Annual Leave",
    value: 10.3,
    subtitle: "Days Available",
    iconSrc: <TravelIcon />,
    link: "Holiday Full-Time",
  },
  {
    title: "Comp/in Lieu Time",
    value: 0,
    subtitle: "Human Used(YTD)",
    iconSrc: <TimeListIcon />,
    link: "Comp/in Lieu Time Flexible Policy",
  },
];

//  Данные для селектов
const items = [
  {
    value: "sick",
    label: "Sick",
  },
  {
    value: "leave",
    label: "Leave",
  },
];

export default function TimeOffSection() {
  return (
    <div className="w-full  md:w-[calc(100vw-300px)] ">
      <div className="md:w-[96%] cursor-default w-full mb-10 mx-auto bg-white  rounded-b-2xl">
        {/* Секция  Time Off*/}
        <section className="w-[95%] mx-auto py-10">
          <div className="lg:flex justify-between my-5">
            <h2 className="text-[#204973] hidden lg:flex text-[24px] font-medium  items-center space-x-2">
              <span>
                <TimeListIcon className="inline h-7 w-7" />
              </span>
              <span>Time Off</span>
            </h2>
            <div className="flex  gap-4 flex-wrap justify-end items-center">
              <p>
                Accural Level Start Date
                <Link href="#" className="text-[#3758AB] inline">
                  <span> 03/09-2020</span>
                </Link>
              </p>
              <Button
                variant="ghost"
                className="border border-black rounded-xl"
              >
                Add Time Off Policy
              </Button>
            </div>
          </div>
          <Separator className="h-[3px] bg-[#7C96B1]" />
          <ScrollArea>
            <div className="mx-5 flex flex-nowrap gap-10 items-center justify-center my-10 font-semibold text-black">
              {leaveData.map((leave, index) => (
                <LeaveCard
                  key={index}
                  title={leave.title}
                  value={leave.value}
                  subtitle={leave.subtitle}
                  iconSrc={leave.iconSrc}
                  additionalInfo={leave.additionalInfo}
                  link={leave.link}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Секция  Upcoming Time Off*/}
        <section className="w-[95%] mx-auto ">
          <div className="flex justify-between my-5">
            <h2 className="text-[#204973] flex text-[18px] font-medium justify-center items-center space-x-2">
              <Clock className="inline h-5 w-5" />

              <span>Upcoming Time Off</span>
            </h2>
          </div>
          <Separator className="h-[3px] bg-[#7C96B1]" />
          <div className="flex justify-start items-center font-medium ml-3 my-5">
            <PlusIcon className="text-[#092642]" />
            <div className="ml-3">
              <p>Jan 27</p>
              <p className="relative pl-2 before:content-['•'] before:absolute before:left-0 before:text-black">
                1 day of Sick
              </p>
            </div>
          </div>
          <Separator className="h-[3px] bg-[#7C96B1]" />
          <div className="flex justify-start items-center font-medium ml-3 my-5">
            <PigIcon className="text-[#204973]" />
            <div className="ml-3">
              <p>Jul 4</p>
              <p>Independence Day</p>
            </div>
          </div>
          <Separator className="h-[3px] bg-[#7C96B1]" />
        </section>

        {/* Секция History */}
        <section className="w-[95%] mx-auto py-10">
          <div className="flex justify-between my-5">
            <h2 className="text-[#204973] flex text-[18px] font-medium justify-center items-center space-x-2">
              <HistoryIcon className="inline h-5 w-5" />
              <span>History</span>
            </h2>
          </div>
          <div className="grid grid-cols-4 items-center gap-3 ">
            <div className="col-span-4 lg:col-span-1 ">
              <TimeOffSelect
                items={items}
                itemPlaceholder="Sick"
                className="w-full "
                cleaning={true}
              />
            </div>
            <div className="col-span-2 lg:col-span-1  grid ">
              <TimeOffSelect
                items={items}
                itemPlaceholder="All"
                className="w-full lg:w-[150px] place-self-start"
                cleaning={true}
              />
            </div>
            <div className="col-span-2 lg:col-span-2 w-full  grid ">
              <TimeOffSelect
                items={items}
                itemPlaceholder="Balance History"
                className="w-full lg:w-fit place-self-end "
                cleaning={false}
              />
            </div>
          </div>

          <TimeOffTable />
        </section>
      </div>
    </div>
  );
}
