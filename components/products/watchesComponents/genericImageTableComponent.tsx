"use client"
import { FileUploadDialog } from "../../../src/components/ui/fileUploadDialog";
import Image from "next/image";
import { useState } from "react";
import { database } from "@/app/firebase.config";
import { getDoc, collection, doc } from "firebase/firestore";
import GenerateWatchesTable, { tableDataType } from "./generateWatchesTable";
// import { watchImageUrlsType } from "@/app/watches/page";
import { Button } from "@/components/ui/button";
import { genericImageUrlsType } from "@/app/airpods/page";

export default function GenericImageTableComponent({
  imageObject,
  tableData,
  collectionType
}: {
  tableData: tableDataType[];
  collectionType: string;
  imageObject: genericImageUrlsType;
}) {
  // console.log(imageObject);
  const keyOfFirstElement = Object.keys(imageObject)[0];

  const [currentImage, setCurrentImage] = useState(keyOfFirstElement);
  const imagesMap: Record<string, JSX.Element> = {};

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
        <div className="h-[10rem] w-[10rem] m-4"> {imagesMap[currentImage]}</div>
        <div className="h-[10rem] w-[10rem] m-4 flex items-center justify-center">{<FileUploadDialog nameID={currentImage} collectionType={collectionType} />}</div>
      </div>
      <GenerateWatchesTable
        data={tableData}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
}
