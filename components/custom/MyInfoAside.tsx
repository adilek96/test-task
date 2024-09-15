import React from "react";
import { Card, CardTitle } from "../ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  Globe,
  MapPin,
  Users,
  Clock,
  Hash,
  CircleUserRound,
} from "lucide-react";
import Link from "next/link";

export default function MyInfoAside() {
  return (
    <aside className="relative w-[300px] hidden md:block">
      <div className="absolute -top-10 w-full">
        <Card className="w-[250px] mb-4 py-7 px-7 shadow-none mx-auto  bg-white  rounded-2xl">
          <ul>
            <li className="mb-2">
              <Link href="#">
                <span>
                  <Phone className="inline w-5 h-5" />
                </span>
                <span> 07911 654321</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#">
                <span>
                  <Mail className="inline w-5 h-5" />
                </span>
                <span className="text-sm"> avd.yana@videorollnet</span>
              </Link>
            </li>
            <ul className="flex gap-3 ">
              <li>
                <Link href="#">
                  <Linkedin className="inline w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Facebook className="inline w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter className="inline w-5 h-5" />
                </Link>
              </li>
            </ul>
          </ul>
        </Card>
        <Card className="w-[250px] cursor-default mb-4 py-7 px-7  shadow-none mx-auto  bg-white  rounded-2xl">
          <CardTitle className="mb-5 ">Hire Date</CardTitle>
          <p>Sep. 3,2020</p>
          <p>3y-9m-20d</p>
        </Card>
        <Card className="w-[250px] mb-4 py-7 px-7  shadow-none mx-auto  bg-white  rounded-2xl">
          <ul className="flex flex-col gap-1 cursor-default ">
            <li>
              <Hash className="inline w-5 h-5" />
              <span> 5</span>
            </li>
            <li>
              <Clock className="inline w-5 h-5" />
              <span> Full-Time</span>
            </li>
            <li>
              <Users className="inline w-5 h-5" />
              <span> Operations</span>
            </li>
            <li>
              <Globe className="inline w-5 h-5" />
              <span> Europe</span>
            </li>
            <li>
              <MapPin className="inline w-5 h-5" />
              <span> London,Uk</span>
            </li>
          </ul>
        </Card>
        <Card className="w-[250px] mb-4  py-7 px-7   shadow-none mx-auto  bg-white  rounded-2xl">
          <CardTitle className="mb-5">Direct Reports</CardTitle>
          <ul className="flex flex-col gap-1 ">
            <li>
              <Link href="#">
                <CircleUserRound className="inline w-5 h-5" />
                <span> Shane</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <CircleUserRound className="inline w-5 h-5" />
                <span> Nathan</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <CircleUserRound className="inline w-5 h-5" />
                <span> Mitchell</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <CircleUserRound className="inline w-5 h-5" />
                <span> Phillip</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Users className="inline w-5 h-5" />
                <span> 4 More...</span>
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </aside>
  );
}
