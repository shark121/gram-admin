"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {setDoc, collection, doc, updateDoc} from "firebase/firestore"
import { database } from "@/app/firebase.config"
import { navigationArrayType } from "../products/phonesComponents/generatePhonePage"
import { useState, useRef, createRef } from "react"
import { DialogClose } from "@radix-ui/react-dialog"

export type changePriceDialogPropsType = {
  oldValue?: number;
  nameID: string;
  navigation: navigationArrayType;
}

async function changePrice({value, navigation, nameID} : {value : number ,navigation: navigationArrayType, nameID: string}) {

  const collectionRef = collection(database, navigation[0]);
  const docRef = doc(collectionRef, navigation[1]);

  await updateDoc(docRef, {[nameID] : value}) ;
  console.log("changed price");
}

export function ChangePriceDialog({oldValue, nameID, navigation }: changePriceDialogPropsType) {
   
    const inputRefOne = createRef<HTMLInputElement>()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Price</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Price</DialogTitle>
          {/* <DialogDescription>
           Change price
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Amount
            </Label>
            <Input id="name" defaultValue={oldValue}  ref={inputRefOne} type="number" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" onMouseDown={async ()=> changePrice({value: Number(inputRefOne.current?.value), nameID:nameID, navigation:navigation })}  disabled={false}>Change</Button>
        </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
