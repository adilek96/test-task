import { getUser } from "@/app/services/getUser";
import MyInfoAside from "@/components/custom/MyInfoAside";
import TimeOffSection from "@/components/custom/TimeOffSection";
import React from "react";

export default async function TimeOff() {
  return (
    <div className="flex ">
      <MyInfoAside />
      <TimeOffSection />
    </div>
  );
}
