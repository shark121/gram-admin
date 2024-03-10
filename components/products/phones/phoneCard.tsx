"use client";
import { dataTuple } from "./phones";
import Image from "next/image";
import { useState } from "react";
import Options from "../../ui/options";

export default function PhoneCard({ phoneInfo }: { phoneInfo: dataTuple[] }) {
console.log(phoneInfo[1]);
  

  const [currentPhoneState, setCurrentPhoneState] = useState(phoneInfo[0]);

  let optionsList = phoneInfo.map((element) => (
    <option
      onClick={(event: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
        setCurrentPhoneState(element);
        console.log("clicked");
      }}
    >
      <button onClick={() => console.log("clicked")}>{element[0]}</button>
    </option>
  ));

  function Details({ currentPhoneState }: { currentPhoneState: dataTuple }) {
    let storages = Object.keys(currentPhoneState[1]);

    const list = storages.map((storage) => {
      let colors = Object.keys(currentPhoneState[1][storage]);
      return (
        <div className="dropdown" key={storage}>
          <label tabIndex={0} className="btn m-1">
            {storage}
          </label>{" "}
          <ul tabIndex={0} className="dropdown-content z-[1] menu shadow">
            {colors.map((color) => (
              <li className="" key={color}>
                <a>
                  {" "}
                  {color} : {currentPhoneState[1][storage][color]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    });

    return <div className="flex gap-2">{...list}</div>;
  }

  return (
    <div className="h-[30rem] w-[40rem] rounded-md  flex justify-center items-center p-4 bg-inherit  transition-all ease-in-out duration-150 delay-100 cursor-pointer">
      <div className="w-[15rem] h-[20rem] relative">
        <Image
          src={currentPhoneState[2]!}
          alt="image"
          fill
          className="object-contain"
        />
      </div>
      <Options
        chosenItem={currentPhoneState}
        setChosenItem={setCurrentPhoneState}
        listData={phoneInfo}
      />
      <Details currentPhoneState={currentPhoneState} />
    </div>
  );
}
