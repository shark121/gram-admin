import Image from "next/image";
import { useRouter } from "next/router";
import { idGenerator } from "../../src/app/Global/functions/idGenerator";

export type ElementProps = {
  name: string;
  price: number;
  image: string;
  initial?: number;
  newItem?: boolean;
};

export type ItemObjectType = {
  type: string;
  qty:  number;
  maximum: number;
  id: string;
  price: number;
  img: string;
};

export default function Element({
  name,
  price,
  image,
  initial,
  newItem,
  
}: ElementProps) {
  let router = useRouter();

  function addToSessionStorage(itemObject: ItemObjectType, ID: string) {
    let ObjectString = JSON.stringify(itemObject);

    sessionStorage.setItem(ID, ObjectString);
  }

  function HandleOnClick() {
    // let ID = idGenerator();

    // let itemObject: ItemObjectType = {
    //   type: name,
    //   id: ID,
    //   price: price,
    //   img: image,
    //   maximum: 1,
    //   qty: 1,
    // };

    // // addToID_ARRAY(ID);

    // addToSessionStorage(itemObject, ID);

    // router.push(`/addOther/addOther/?ID=${ID}`);
  }

  return (
    <button
      className=" relative my-2 h-[20rem]  w-[10rem] rounded-md border-gray-500 p-2 "
      onClick={HandleOnClick}
    >
      <div className="absolute -z-10 h-[65%] w-[80%] rounded-3xl bg-gray-200"></div>
      {initial ? (
        <div className="bg-[#9417e2 absolute right-0   top-0 rounded-sm bg-[#ff0066] px-[0.3rem] py-[0.1rem] font-bold text-white line-through">
          ₵{initial}
        </div>
      ) : null}
      {newItem ? (
        <div className="absolute right-0 top-0   animate-pulse rounded-sm bg-[#0fff50] px-[0.3rem] py-[0.1rem] font-bold text-white">
          new
        </div>
      ) : null}
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          fill
          alt="phone"
          className={`object-contain`}
          src={image}
        />
      </div>
      <div className="absolute bottom-0 z-10">
        <div className="text-[1.2rem] font-bold text-gray-600">{name}</div>
        <div className="font-bold text-[#ff0066]">₵{price}</div>
      </div>
    </button>
  );
}
