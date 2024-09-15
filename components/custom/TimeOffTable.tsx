"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useTableStore } from "@/store/tableStore";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

// ! В этом компоненте используется два типа данных для демонстрации работы с стейт менеджером zustand

const sickData = [
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "-0",
    earnedDays: "",
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "-0",
    earnedDays: "",
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Accural fro 23/05/2024 to 20/11/2024",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
];

const leaveData = [
  {
    date: "23/05/2024",
    description: "Some text",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Some text",
    usedDays: "-0",
    earnedDays: "",
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Some text",
    usedDays: "",
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    date: "23/05/2024",
    description: "Some text",
    usedDays: "-0",
    earnedDays: "",
    balance: 3.0,
  },
];

export default function TimeOffTable() {
  const [data, setData] = useState(sickData);
  const { value, setValue } = useTableStore();

  // В зависимости от значения из стейт менеджера, данные в таблице будут меняться

  useEffect(() => {
    if (value === "sick") {
      setData(sickData);
    } else if (value === "leave") {
      setData(leaveData);
    } else {
      setData(sickData);
    }
  }, [value]);

  return (
    <ScrollArea>
      <Table className="mt-5 min-w-[1200px] border-b-2 border-[#7C96B1]">
        <TableHeader className="bg-headerbg h-14 ">
          <TableRow>
            <TableHead className="w-[200px] font-bold ">
              <span>Date </span>
              <span>&#8595;</span>
            </TableHead>
            <TableHead className="w-[400px] font-bold">Description</TableHead>
            <TableHead className="w-[200px] font-bold">Used days (-)</TableHead>
            <TableHead className="w-[200px] font-bold ">
              Earned days (+)
            </TableHead>
            <TableHead className="w-[200px] font-bold">Balance (-)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="pt-10">
          {data.map((item, i) => {
            return (
              <TableRow
                className=" border-b-2 font-medium border-[#7C96B1] hover:bg-headerbg/35 hover:border-none"
                key={i}
              >
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.usedDays}</TableCell>
                <TableCell>{item.earnedDays}</TableCell>
                <TableCell>{item.balance}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
