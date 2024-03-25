"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FileDeleteDialog from "@/components/ui/fileDeleteDialog";

export type tableDataType = [nameID: string, { [key: string]: number }];

export default function GenerateGenericTable({
  data,
  setCurrentImage,
  setShouldDisplayEditWindow,
  collectionType,
  setCurrentImageName,
}: {
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
  setCurrentImageName: React.Dispatch<React.SetStateAction<string>>;
  setShouldDisplayEditWindow: React.Dispatch<React.SetStateAction<boolean>>;
  data: tableDataType[];
  collectionType: string;
}) {
  const itemIndexMap: Record<string, string> = { watches: "2", airpods: "1" };
  const [pricesData, setPricesData] = useState();
  const itemIndex = itemIndexMap[collectionType];

  function handleMouseDown() {}

  useEffect(() => {
    let pricesData = sessionStorage.getItem("pricesData");
    pricesData && setPricesData(JSON.parse(pricesData));
  }, []);
  console.log(pricesData, "pricesData");
  const itemPricesData = pricesData && pricesData[itemIndex];
  console.log(itemPricesData, "itemPricesData");
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data[0]}</TableCell>
            <TableCell>{Object.values(data[1])[0]}</TableCell>
            <TableCell>{itemPricesData && itemPricesData[data[0]]}</TableCell>
            <TableCell>
              <Button
                onMouseDown={() => {
                  setCurrentImage(data[0]);
                  setShouldDisplayEditWindow(true);
                  setCurrentImageName(data[0]);
                }}
              >
                Select
              </Button>
            </TableCell>{" "}
            <TableCell>
              <FileDeleteDialog />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
