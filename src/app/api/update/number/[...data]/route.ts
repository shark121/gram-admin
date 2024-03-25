import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  collectionGroup,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
  runTransaction,
} from "firebase/firestore";
import { database } from "@/app/firebase.config";
import { AwardIcon } from "lucide-react";

export async function PATCH(
  req: NextRequest,
  context: { params: { data: string[] } }
) {
  const params = context.params.data;
  console.log(params);
  const collectionType = params[0];
  const nameID = params[1];

  if (collectionType === "phones") {
    const storage = params[2];
    const color = params[3];
    const number = Number(params[4]);

    await runTransaction(database, async (transaction) => {
      const docRef = doc(collection(database, collectionType), nameID);

      const infoExists = (await transaction.get(docRef)).exists();

      if (infoExists) {
        await updateDoc(docRef, {
          [`${storage}.${color}`]: number,
        }).catch((err) => console.log(err));
      } else {
        await setDoc(docRef, {
          [`${storage}.${color}`]: number,
        }).catch((err) => console.log(err));
      }
    }).catch((err) => console.log(err));
  }

  if (collectionType === "watches" || collectionType === "airpods") {
    const number = Number(params[2]);
    const docRef = doc(collection(database, collectionType), nameID);

    await setDoc(docRef, {
      number: number,
    }).catch((err) => console.log(err));
  }

  return NextResponse.json({ text: "success" });
}
