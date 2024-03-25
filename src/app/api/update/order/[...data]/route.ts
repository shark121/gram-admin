import { NextRequest, NextResponse } from "next/server";
import { updateDoc, doc, collection } from "firebase/firestore";
import { database } from "@/app/firebase.config";

export async function PATCH(
  req: NextRequest,
  context: { params: { data: string[] } }
) {
  const body = await req.json();

  const orderID = context.params.data;

  const collectionRef = collection(database, "ORDERS");

  const documentRef = doc(collectionRef, orderID[0]);

  await updateDoc(documentRef, {
    deliveryOnRoute: body.deliveryOnRoute,
    orderConfirmed: body.orderConfirmed,
    pickupAvailable: body.pickupAvailable,
    packageReady: body.packageReady,
    paymentReceived: body.paymentReceived,
    pending  : body.pending,
  }).catch((err) => console.log(err));

  return NextResponse.json({ message: "success" });
}
