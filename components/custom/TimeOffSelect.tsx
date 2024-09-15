"use client";
import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { useTableStore } from "@/store/tableStore";

export default function TimeOffSelect({
  items,
  className,
  itemPlaceholder,
  cleaning,
}: {
  items: { value: string; label: string }[];
  className: string;
  itemPlaceholder: string;
  cleaning: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setValue: setTableValue } = useTableStore(); // Глобальный стейт для смены данных в таблице

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(`justify-between relative `, className)}
        >
          {value ? (
            items.find((item) => item.value === value)?.label
          ) : itemPlaceholder.startsWith("icon") ? (
            <Settings className="text-[#1C3144] w-5 h-5" />
          ) : (
            itemPlaceholder
          )}
          {cleaning ? (
            <div className=" h-8 w-7">
              <X
                type="button"
                onClick={() => {
                  setValue("");
                  setTableValue("");
                }}
                className="absolute right-8  h-full w-5   "
              />
            </div>
          ) : (
            ""
          )}

          <div className=" h-8 w-7">
            <ChevronDown className="ml-4 h-full w-full shrink-0  bg-headerbg" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setTableValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
