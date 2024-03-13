"use client";
import Image from "next/image";
import { useState } from "react";
import { database } from "@/app/firebase.config";
import { getDoc, collection, doc } from "firebase/firestore";
import GenerateWatchesTable, { WatchDataType } from "./generateWatchesTable";
import { watchImageUrlsType } from "@/app/watches/page";

export default function WatchesImageTableComponent({
  imageObject,
  tableData,
}: {
  tableData: WatchDataType[];
  imageObject: watchImageUrlsType 
}) {
  const firstElement = Object.values(imageObject.objects)[0].name;
  const [currentImage, setCurrentImage] = useState(firstElement);
  const imagesMap: Record<string, JSX.Element> = {}
  
  Object.values(imageObject.objects).map((data) => 
  imagesMap[data.name] =
      <Image
        src={data.image}
        alt={data.name}
        width={100}
        height={100}
        key={data.name}
        onClick={() => setCurrentImage(data.name)}
      />
  
  )
  return (
    <div className="h-full w-[full] p-4">
      <div className="h-[10rem] m-4">{imagesMap[currentImage]}</div>;
      <GenerateWatchesTable data={tableData} setCurrentImage={setCurrentImage}/>
    </div>
  );
}
