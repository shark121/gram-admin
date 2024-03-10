import { database, app } from "@/app/firebase.config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import PhoneCard from "./phoneCard";
import GenerateTable from "../../generateTable";



let collectionRef = collection(database, "phones");

export type convertedObjectsType = {
  [key: string]: string;
};

export type dataObjectsType = {
  [key: string]: {
    [key: string]: number;
  };
};

export type dataTuple = [string, dataObjectsType, string?];

export async function getPhoneDocuments() {
  const convertedObjects: convertedObjectsType = {};

  const data: dataTuple[] = await getDocs(collectionRef).then((response) =>
    response.docs.map((data) => [data.id, data.data()])
  );

  const imageData = await getDoc(
    doc(collection(database, "Collection"), "phones")
  ).then((response) => response.data());

  for (let object of imageData?.objects) {
    Object.assign(convertedObjects, { [object.name]: object.image });
  }

  for (let element of data) {
    element[2] = convertedObjects[element[0]];
  }

  return data;
}

export default async function PhoneProducts() {
  let phoneInfo: dataTuple[] = await getPhoneDocuments();


  return (
    <div className=" bg-white pt-16 m-0 flex justify-center items-center flex-col gap-4   p-4 overflow-x-hidden h-screen w-screen">
   <div className="w-50rem">
    <GenerateTable data={phoneInfo} />
    </div> 
    </div>
  );
}
