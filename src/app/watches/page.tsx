import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { database } from "@/app/firebase.config";
import GenerateWatchesTable from "../../../components/products/watchesComponents/generateWatchesTable";
import { WatchDataType } from "../../../components/products/watchesComponents/generateWatchesTable";
import WatchesImageTableComponent from "../../../components/products/watchesComponents/watchImageTableComponent";

export type watchImageUrlsType = {
    objects:{
    name: string;
    image: string;
    }[]
}


async function getWatches() {
  const collectionRef = collection(database, "watches");
  const data = await getDocs(collectionRef).then((response) =>
    response.docs.map((data) => [data.id, data.data()])
  );
  return data;
}

async function getImages() {
  const collectionRef = collection(database, "Collection");
  const docRef = doc(collectionRef, "watches");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default async function Watches() {
  let DATA: WatchDataType[] = (await getWatches()).map((data) => data);
  let watchImageUrls: watchImageUrlsType = await getImages();
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
          />
        </div>
      </div>
    </div>
  );
}
