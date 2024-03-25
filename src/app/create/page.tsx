"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import DropDownMenu from "../../../components/ui/dropDownMenu";
import { collections, Phones, Watches, Airpods } from "@/lib/dropDownData";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  sedFileReq,
  updateNumber,
  updatePrice,
} from "@/components/ui/fileUploadDialog";

export default function CreateItem() {
  const [collectionState, setCollectionState] = useState<string>("phones");
  const [colorState, setColorState] = useState<string>("");
  const [currentItemState, setCurrentItemState] = useState<string>("iPhone X");
  const [storageState, setStorageState] = useState<string>("");
  const [priceState, setPriceState] = useState<number>(0);
  const [numberState, setNumberState] = useState<number>(0);
  const [disableStorageColor, setDisableStorageColor] = useState<boolean>(true);
  const [fileState, setFileState] = useState<File | null>(null);
  const collectionPlaceHolder = "Select Collection";

  const collectionsMap = {
    phones: Phones,
    watches: Watches,
    airpods: Airpods,
  };

  useEffect(() => {
    collectionState === "phones"
      ? setDisableStorageColor(true)
      : setDisableStorageColor(false);
  }, [collectionState]);

  async function createItem({
    file,
    collection,
    nameID,
    priceState,
    numberState,
    colorState,
    storageState,
  }: {
    file: File | null;
    collection: string;
    nameID: string;
    priceState: number;
    numberState: number;
    storageState?: string;
    colorState?: string;
  }) {
    await sedFileReq({
      File: file,
      collectionType: collection,
      nameID: nameID,
    });

    await updateNumber(
      numberState,
      `${collection}/${nameID}/${storageState}/${colorState}`
    );
    await updatePrice(priceState, `prices/${collection}/${nameID}/${storageState}`);
     
    window.location.reload();
  }

  return (
      <div className="flex items-center justify-center p-4 min-h-screen">
        <div className="w-[20rem] ">
          <h1 className="font-bold flex justify-center items-center my-4">
            Create Entry
          </h1>
          <DropDownMenu
            collectionsData={collections}
            setCurrentItemState={setCollectionState}
            placeholder={collectionPlaceHolder}
          />
          <DropDownMenu
            collectionsData={Object.keys(
              collectionsMap[collectionState as keyof typeof collectionsMap]
            )}
            setCurrentItemState={setCurrentItemState}
            placeholder={"Select Item "}
          />
          <Label htmlFor="Price">Price</Label>
          <Input
            id="Price"
            placeholder="1200"
            onChange={(e) => setPriceState(Number(e.target.value))}
          />
          <Label htmlFor="Number">Number</Label>
          <Input
            id="Number"
            placeholder="10"
            onChange={(e) => setNumberState(Number(e.target.value))}
          />
          <Label htmlFor="Image">Image</Label>
          <Input
            id="Image"
            type={"file"}
            accept=".png,.jpg"
            onChange={(e) => {
              e.target.files && setFileState(e.target.files[0]);
            }}
          />
          {disableStorageColor && (
            <DropDownMenu
              collectionsData={
                Phones[currentItemState]["storage options"] || ""
              }
              setCurrentItemState={setStorageState}
              placeholder={"Select Storage"}
            />
          )}
          {disableStorageColor && (
            <DropDownMenu
              collectionsData={Phones[currentItemState]["colors"] || ""}
              setCurrentItemState={setColorState}
              placeholder={"Select Color"}
            />
          )}
          <div className="full flex justify-center items-center my-4">
            <Button
              onClick={async (e) => {
                e.preventDefault();
                createItem({
                  file: fileState,
                  collection: collectionState,
                  nameID: currentItemState,
                  priceState: priceState,
                  numberState: numberState,
                  storageState: storageState,
                  colorState: colorState,
                });
              }}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
  );
}
