import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { database, storage } from "@/app/firebase.config";
import GenerateWatchesTable from "../../../components/products/genericComponents/generateGenericTable";
import { tableDataType } from "../../../components/products/genericComponents/generateGenericTable";
import WatchesImageTableComponent from "../../../components/products/genericComponents/genericImageTableComponent";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const collectionType = "watches";

export type genericImageUrlsType = {
  [key :string] : string
};

async function getWatches() {
  const collectionRef = collection(database, "watches");
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

export default async function Watches() {
  let DATA: tableDataType[] = (await getWatches()).map((data) => data);
  let watchImageUrls: genericImageUrlsType= await getImages();
  console.log(watchImageUrls);

  console.log(DATA);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="imagePriceComp"></div>
        <div className="w-[50rem]">
          <WatchesImageTableComponent
            tableData={DATA}
            imageObject={watchImageUrls}
            collectionType="watches"
          />
        </div>
      </div>
    </div>
  );
}
