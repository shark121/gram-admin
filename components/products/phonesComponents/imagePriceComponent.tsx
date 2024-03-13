import ChangePrice from "../../changePrice";
import { database } from "@/app/firebase.config";
import Image from "next/image";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { connectStorageEmulator } from "firebase/storage";
import { navigationArrayType } from "./generatePhonePage";

export type ImagePriceComponentType = {
  navigation: navigationArrayType;
  nameID: string;
  imageURL: string;
};

async function GetPrice({ itemId }: { itemId: string }) {
  const collectionRef = collection(database, "prices");
  const docRef = doc(collectionRef, itemId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default async function ImagePriceComponent({
  nameID,
  navigation,
  imageURL
}: ImagePriceComponentType) {
  let currentPrice;

  await GetPrice({ itemId: navigation[1] }).then((response) => {
    currentPrice = response;
  });

  console.log(currentPrice);

  console.log(navigation);
  return (
    <div className="flex ">
      <div className="w-[50%] h-[10rem] relative">
        <Image fill src={imageURL} alt="phone Image "  className="object-contain"/>
      </div>
      <div className="w-[50%] h-[10rem] flex items-center justify-center">
        <ChangePrice
          itemId={nameID}
          currentPrice={currentPrice!}
          navigation={navigation}
        />
      </div>
    </div>
  );
}
