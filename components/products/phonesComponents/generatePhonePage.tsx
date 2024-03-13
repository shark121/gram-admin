import ImagePriceComponent, {ImagePriceComponentType} from "./imagePriceComponent";
import GeneratePhoneTable from "./generatePhoneTable";
import { dataObjectsType, dataTuple } from "./phones";
import { carouselDataType } from "./phones";
import IncrementComponent from "../../changePrice";
import ChangePrice from "../../changePrice";

export type navigationArrayType = [collectionName : string, DocName:string, ...fieldNames:string[]];


export default function GeneratePhonePage({
  phoneData,
  nameID,
  imageUrl
}: {
  phoneData: dataTuple;
  nameID: string;
  imageUrl: string;
}) {

  const PhoneNavigationData : navigationArrayType = ["prices","PHONES"];
  console.log(imageUrl);
 
  return (
    <div>
      <div className="flex w-full justify-center items-center"> {nameID} </div>
      <ImagePriceComponent navigation={PhoneNavigationData} nameID={nameID} imageURL={imageUrl} />
      <GeneratePhoneTable phoneData={phoneData[1]} />
    </div>
  );
}
