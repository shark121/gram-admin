import { database, app } from "@/app/firebase.config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import PhoneCard from "./phoneCard";
import GeneratePhoneTable from "./generatePhoneTable";
import CreateCarousel from "../../createCarousel";
import GeneratePhonePage from "./generatePhonePage";

let collectionRef = collection(database, "phones");

export type convertedObjectsType = {
  [key: string]: string;
};

export type dataObjectsType = {
  [key: string]: {
    [key: string]: number;
  };
};

export type carouselDataType = {
  [key: string]: JSX.Element;
};
export type genteratePhonePageDataType = {
  [key: string]: JSX.Element;
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
  let phoneInfoObject = {};
  const generatePhonePageData = {};
  const carouselData: carouselDataType = {};
  for (let el of phoneInfo) {
    carouselData[el[0]] = <GeneratePhonePage nameID={el[0]} phoneData={el} imageUrl={el[2]!} />;
  }
  return (
    <div className=" bg-white m-0 flex justify-center items-center flex-col gap-4 overflow-x-hidden  w-screen">
      <div className="min-w-[45rem] ">
        <CreateCarousel
          nameIDS={Object.keys(carouselData)}
          data={Object.values(carouselData)}
        />
      </div>
    </div>
  );
}
