import { NextResponse,NextRequest } from "next/server";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { database } from "@/app/firebase.config";


export async function PATCH(req: NextRequest, context: { params: { data: string[] } }) {
  const params = context.params.data;
  console.log(params);
  const collectionSection = params[0]; 
  const collectionType = params[1];
  const nameID = params[2];

  if (collectionType  === "PHONES"|| collectionType === "phones"){
    const storage = params[3];
    const price = Number(params[4]);
    await updateDoc(doc(collection(database, collectionSection), collectionType), {
      [`${nameID}(${storage})`]: price,
    }).catch((err) => console.log(err));  
  }

  if(collectionType === "airpods" || collectionType === "watches"){
    const price = Number(params[3]);
    await updateDoc(doc(collection(database, collectionSection), collectionType), {
      [`${nameID}`]: price,
    }).catch((err) => console.log(err));
  }


  return NextResponse.json({text : "success"});
}