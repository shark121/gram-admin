"use client";
import { useEffect } from "react";
// export type StorageDataType = {

// }

export default function SetStorage(data: { [key: string]: string }[]) {
  console.log("data", data);
  useEffect(() => {
    sessionStorage.setItem("pricesData", JSON.stringify(data));
    console.log("data stored");
  }, []);
  return <></>
}
