import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { database, storage } from "@/app/firebase.config";
import GenerateWatchesTable from "../../../components/products/watchesComponents/generateWatchesTable";
import { WatchDataType } from "../../../components/products/watchesComponents/generateWatchesTable";
import GenericImageTableComponent from "../../../components/products/watchesComponents/genericImageTableComponent";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const collectionType = "airpods";

export type genericImageUrlsType = {
  [key :string] : string
};

async function getAirpods() {
  const collectionRef = collection(database, "airpods");
  const data = await getDocs(collectionRef).then((response) =>
  response.docs.map((data) => [data.id, data.data()])
  );
  return data;
}

async function getImages() {
  const collectionRef = collection(database, "Collection");
  const docRef = doc(collectionRef, collectionType);
  const docSnap = await getDoc(docRef).then((response) => response.data());
  const docSnapMap = {}


  return docSnap;
   
}

export default async function Airpods() {
  let DATA: genericImageUrlsType[] = (await getAirpods()).map((data) => data);
  let airpodsImageUrls: airpodsImageUrlsType = await getImages();
  console.log(airpodsImageUrls);

  console.log(DATA);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="imagePriceComp"></div>
        <div className="w-[50rem]">
          <GenericImageTableComponent
            tableData={DATA}
            imageObject={airpodsImageUrls}
            collectionType={collectionType}
          />
        </div>
      </div>
    </div>
  );
}
