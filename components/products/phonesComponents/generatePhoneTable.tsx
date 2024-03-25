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
import { dataObjectsType, dataTuple } from "../../../src/app/phones/page";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function GeneratePhoneTable({
  phoneData,
  setPhonesStorageState,
  setPhoneColorState,
  setPhoneNumberState,
  setPhonePriceState,
  setPhoneNameIdState,
  setDisplayImagePriceComponent,
  pricesData,
  nameID,
}: {
  phoneData: dataObjectsType;
  setDisplayImagePriceComponent: React.Dispatch<React.SetStateAction<boolean>>;
  setPhonesStorageState: React.Dispatch<React.SetStateAction<string>>;
  setPhoneColorState: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumberState: React.Dispatch<React.SetStateAction<number>>;
  setPhonePriceState: React.Dispatch<React.SetStateAction<number>>;
  setPhoneNameIdState: React.Dispatch<React.SetStateAction<string>>;
  pricesData: { [key: string]: number };
  nameID: string;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  console.log(pricesData, nameID);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return <div></div>;
  }

  const availlableStorage = Object.keys(phoneData);
  const availlableColors: { [key: string]: string[] } = {};
  availlableStorage.map((storage) => {
    availlableColors[String(storage)] = Object.keys(phoneData[storage]);
  });

  function handleOnClick(
    storage: string,
    color: string,
    number: number,
    price: number
  ) {
    setDisplayImagePriceComponent(true);
    setPhonesStorageState(storage);
    setPhoneColorState(color);
    setPhoneNumberState(phoneData[storage][color]);
    setPhonePriceState(price);

    console.log("number clicked");
  }

  return (
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead>Storage</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Pieces</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {availlableStorage && availlableStorage.map((storage) =>
          availlableColors[storage].map((color, index) => (
            <TableRow key={index}>
              <TableCell>{storage + " GB"}</TableCell>
              <TableCell>{color}</TableCell>
              <TableCell >
                {phoneData[storage][color]}
              </TableCell>
                <TableCell>
                  {pricesData && pricesData[`${nameID.trim()}(${storage.trim()})`]}
                </TableCell>
              <TableCell>
                <Button
                  onClick={() =>
                    handleOnClick(storage, color, phoneData[storage][color], pricesData[`${nameID.trim()}(${storage.trim()})`])
                  }
                >
                  Select
                </Button>
              </TableCell>
            </TableRow>
          
          ))
        )}
       
      </TableBody>
    </Table>
  );
}
