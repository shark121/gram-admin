import {} from "firebase/firestore";
import { database } from "@/app/firebase.config";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { ChangePriceDialog } from "./changepriceDialog";
import { navigationArrayType } from "../products/phonesComponents/generatePhonePage"

export default function ChangePrice({
  itemId,
  currentPrice,
  navigation
}: {
  itemId: string;
  currentPrice: {[key : string]: number};
  navigation: navigationArrayType ;
}) {

  let getCurrentPrice = currentPrice[itemId];
  

  return (
    <div className="w-[10px] h-[10px]">
      <div className="flex w-[10rem] items-center justify-center font-bold">GH₵{getCurrentPrice}</div>
      <ChangePriceDialog nameID={itemId} oldValue={getCurrentPrice} navigation={navigation} />
    </div>
  );
}
