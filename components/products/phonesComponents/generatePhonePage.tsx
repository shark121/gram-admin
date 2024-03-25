"use client";
import { cardPropsType } from "../../ui/card";
import ImagePriceComponent, {
  ImagePriceComponentType,
} from "./imagePriceComponent";
import GeneratePhoneTable from "./generatePhoneTable";
import { dataTuple } from "../../../src/app/phones/page";
import { useState, useEffect } from "react";
import CardComponent from "../../ui/card";

export type navigationArrayType = [
  collectionName: string,
  DocName: string,
  ...fieldNames: string[]
];
export type PhoneInfoObjectType = {
  nameID: string;
  storage: string;
  number: string;
  price: string;
  color: string;
};

export default function GeneratePhonePage({
  phoneData,
  nameID,
  imageUrl,
}: {
  phoneData: dataTuple;
  nameID: string;
  imageUrl: string;
}) {
  const [pricesData, setPricesData] = useState<
    { [key: string]: number } | undefined
  >();

  useEffect(() => {
    setPricesData(
      JSON.parse(window.sessionStorage.getItem("pricesData") ?? "{}")
    );
  }, []);

  const [phoneNameIdState, setPhoneNameIdState] = useState(nameID);
  const [phoneStorageState, setPhonesStorageState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState(0);
  const [phonePriceState, setPhonePriceState] = useState(0);
  const [phoneColorState, setPhoneColorState] = useState("");
  const [displayImagePriceComponent, setDisplayImagePriceComponent] =
    useState(false);
  const PhoneNavigationData: navigationArrayType = ["prices", "PHONES"];

  console.log(pricesData);

  return (
    <div>
      {displayImagePriceComponent ? (
        <ImagePriceComponent
          navigation={PhoneNavigationData}
          nameID={phoneNameIdState}
          imageURL={imageUrl}
          phoneColorState={phoneColorState}
          phoneStorageState={phoneStorageState}
          phoneNumberState={phoneNumberState}
          phonePriceState={phonePriceState}
          phoneNameIdState={phoneNameIdState}
        />
      ) : (
        <div className="h-[10rem] w-full flex justify-center items-center font-medium capitalize">
          {" "}
          chose item to edit{" "}
        </div>
      )}
      <GeneratePhoneTable
        phoneData={phoneData[1]}
        setPhoneColorState={setPhoneColorState}
        setPhonesStorageState={setPhonesStorageState}
        setPhoneNumberState={setPhoneNumberState}
        setPhonePriceState={setPhonePriceState}
        setPhoneNameIdState={setPhoneNameIdState}
        pricesData={pricesData && pricesData["0"]}
        nameID={nameID}
        setDisplayImagePriceComponent={setDisplayImagePriceComponent}
      />
    </div>
  );
}
