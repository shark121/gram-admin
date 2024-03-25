"use client";
import ChangePrice from "../../ui/changePrice";
import { database, storage } from "@/app/firebase.config";
import Image from "next/image";
import { useEffect } from "react";
import { navigationArrayType } from "./generatePhonePage";
import { FileUploadDialog } from "@/components/ui/fileUploadDialog";
import CardComponent, { cardPropsType } from "../../ui/card";

export type ImagePriceComponentType = {
  navigation: navigationArrayType;
  nameID: string;
  imageURL: string;
  phoneColorState: string;
  phoneStorageState: string;
  phoneNumberState: number;
  phonePriceState: number;
  phoneNameIdState: string;
};

// async function GetPrice({ itemId }: { itemId: string }) {
//   const collectionRef = collection(database, "prices");
//   const docRef = doc(collectionRef, itemId);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }

export default function ImagePriceComponent({
  nameID,
  navigation,
  imageURL,
  phoneColorState,
  phoneStorageState,
  phoneNumberState,
  phonePriceState,
  phoneNameIdState,
}: ImagePriceComponentType) {
  let currentPrice;

  // await GetPrice({ itemId: navigation[1] }).then((response) => {
  //   currentPrice = response;
  // });

  console.log();

  const cardItems: cardPropsType[] = [
    { displyName: "name", value: nameID },
    { displayName: "color", value: phoneColorState },
    { displayName: "storage", value: phoneStorageState },
    { displayName: "number", value: phoneNumberState },
    { displayName: "price", value: phonePriceState },
  ];

  useEffect(() => {}, []);

  console.log(currentPrice);

  console.log(navigation);
  return (
    <div className="flex w-[50rem] h-full py-4 items-center justify-center">
      <div className="w-[50%] h-[15rem] relative">
        <Image
          fill
          src={imageURL}
          alt="phone Image "
          className="object-contain"
        />
      </div>
      <div className="w-[50%] h-[20rem] flex items-center justify-center">
        <div className="flex flex-col w-full p-2 items-center justify-center">
          <CardComponent cardProps={cardItems} />
          <FileUploadDialog
            collectionType="phones"
            nameID={nameID}
            numberUpdatePath={`phones/${nameID}/${phoneStorageState}/${phoneColorState}`}
            priceUpdatePath={`prices/PHONES/${nameID}/${phoneStorageState}`}
          />
        </div>
      </div>
    </div>
  );
}
