import { database, app } from "@/app/firebase.config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import CreateCarousel from "../../../components/ui/createCarousel";
import GeneratePhonePage from "../../../components/products/phonesComponents/generatePhonePage";
import SetStorage from "../setStorage/page";

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

  

  for (let element of data) {
    element[2] = imageData[element[0]]
  }

  return data;
}

export default async function PhoneProducts() {
  let phoneInfo: dataTuple[] = await getPhoneDocuments();
  console.log(phoneInfo, "phoneInfo");
  
  const DATA = await fetch("http://localhost:300/api/getPrices/phones")
    .then((response) => response.json())
    .then((data) => data.message)
    .catch((error) => console.log(error));

   <SetStorage {...DATA} /> 


  let phoneInfoObject = {};
  const generatePhonePageData = {};
  const carouselData: carouselDataType = {};
  for (let el of phoneInfo) {
    carouselData[el[0]] = <GeneratePhonePage nameID={el[0]} phoneData={el} imageUrl={el[2]!} />;
  }
  return (
    <div className=" bg-white flex justify-center items-center flex-col overflow-x-hidden ">
      <div className="">
        <CreateCarousel
          nameIDS={Object.keys(carouselData)}
          data={Object.values(carouselData)}
        />
      </div>
    </div>
  );
}
