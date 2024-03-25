"use client";
import { FileUploadDialog } from "../../../src/components/ui/fileUploadDialog";
import Image from "next/image";
import { useState, useEffect } from "react";
import GenerateGenericTable, { tableDataType } from "./generateGenericTable";
import { genericImageUrlsType } from "@/app/airpods/page";

export default function GenericImageTableComponent({
  imageObject,
  tableData,
  collectionType,
}: {
  tableData: tableDataType[];
  collectionType: string;
  imageObject: genericImageUrlsType;
}) {
  const keyOfFirstElement = Object.keys(imageObject)[0];
  const [currentImage, setCurrentImage] = useState(keyOfFirstElement);
  const [currentImageName, setCurrentImageName] = useState("");
  const [shouldDisplayEditWindow, setShouldDisplayEditWindow] = useState(false);
  const imagesMap: Record<string, JSX.Element> = {};

  console.log(currentImage);
  Object.keys(imageObject).map(
    (key) =>
      (imagesMap[key] = (
        <Image
          src={imageObject[key]}
          alt={key}
          width={100}
          height={100}
          key={key}
          onClick={() => setCurrentImage(key)}
        />
      ))
  );

  return (
    <div className="h-full w-[full] p-4 ">
      <div className="flex items-center justify-center">
        {shouldDisplayEditWindow ? (
          <div className="flex">
            <div className="h-[10rem] w-[10rem] m-4">
              {" "}
              {imagesMap[currentImage]}
            </div>
            <div className="h-[10rem] w-[10rem] m-4 flex flex-col items-between justify-between">
              <div>{currentImageName}</div>
              {
                <FileUploadDialog
                  nameID={currentImage}
                  collectionType={collectionType}
                  numberUpdatePath={`airpods/${currentImageName}`}
                  priceUpdatePath={`prices/airpods/${currentImageName}`}
                />
              }
            </div>
          </div>
        ) : (
          <div  className="h-[10rem] flex justify-center items-center">choose item to display</div>
        )}
      </div>
      <GenerateGenericTable
        data={tableData}
        setCurrentImage={setCurrentImage}
        collectionType={collectionType}
        setCurrentImageName={setCurrentImageName}
        setShouldDisplayEditWindow={setShouldDisplayEditWindow}
      />
    </div>
  );
}
