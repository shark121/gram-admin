import { NextRequest, NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { database } from "@/app/firebase.config";

const collectionRef = collection(database, "prices");

export async function GET(params: { data: string[] }, request: NextRequest) {
  console.log("Params", params, request, "request");

  let priceData =  await getDocs(collectionRef).then((response) => {
   return response.docs.map((data) => data.data()) 
  });
 sessionStorage.setItem("pricesData", JSON.stringify(priceData));
  return NextResponse.json({message : priceData});
}
 