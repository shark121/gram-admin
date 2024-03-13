"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataObjectsType, dataTuple } from "./phones";
import { useEffect, useState } from "react";

export default function GeneratePhoneTable({
  phoneData,
}: {
  phoneData: dataObjectsType;
}) {
  const [shouldRender, setShouldRender] = useState(false);

  
  useEffect(() => {
    setShouldRender(true);
  }, []);
  
  if (!shouldRender) {
    return <div></div>;
  }

  
  console.log(phoneData);
  const availlableStorage = Object.keys(phoneData);
  const availlableColors: { [key: string]: string[] } = {};
  availlableStorage.map((storage) => {
    availlableColors[String(storage)] = Object.keys(phoneData[storage]);
  });
  //   console.log(availlableColors);
  //   console.log()
  //   const availlableColors = Object.keys(phoneData[availlableStorage[0]]);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Storage</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Pieces</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {availlableStorage.map((storage) =>
          availlableColors[storage].map((color, index) => (
            <TableRow key={index}>
              <TableCell >{storage + " GB"}</TableCell>
              <TableCell>{color}</TableCell>
              <TableCell onMouseDown={()=>console.log("number clicked")}>{phoneData[storage][color]}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
