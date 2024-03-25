"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { collections } from "@/lib/dropDownData";
import React from "react";

export default function DropDownMenu({
  collectionsData,
  setCurrentItemState,
  placeholder,
  value
}: {
  collectionsData: string[];
  setCurrentItemState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value? : string
}) {
  return (
    <Select onValueChange={(e) => setCurrentItemState(e)} value={value} >
      <SelectTrigger className="w-full my-4">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {collectionsData.map((value, index) => {
          return (
            <div>
              <SelectItem value={value} placeholder={placeholder} key={index}>{value}</SelectItem>
            </div>
          );
        })}
      </SelectContent>
    </Select>
  );
}
