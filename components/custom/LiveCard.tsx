import React, { ReactNode } from "react";
import { Card } from "../ui/card";
import Link from "next/link";

interface LeaveCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  iconSrc: ReactNode;
  additionalInfo?: string;
  link: string;
}

const LeaveCard: React.FC<LeaveCardProps> = ({
  title,
  value,
  subtitle,
  iconSrc,
  additionalInfo,
  link,
}) => {
  return (
    <div className="flex-col justify-center items-center">
      <Card className="flex shadow-none flex-col justify-center self-stretch my-auto text-sm rounded-lg bg-slate-100 min-h-[138px] min-w-[240px] w-[264px]">
        <h2 className="text-xl text-center">{title}</h2>
        <div className="flex gap-2.5 items-center self-center mt-1 text-3xl whitespace-nowrap text-slate-800">
          {iconSrc}
          <span className="self-stretch my-auto">{value}</span>
        </div>
        <p className="mt-1 text-center">{subtitle}</p>
        {additionalInfo && (
          <p className="mt-1 text-center text-slate-400">{additionalInfo}</p>
        )}
      </Card>
      <div className="flex justify-center">
        <Link href="#" className="text-slate-400 ">
          {link}
        </Link>
      </div>
    </div>
  );
};

export default LeaveCard;
