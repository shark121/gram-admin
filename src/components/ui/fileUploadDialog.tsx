"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type FileUploadDialogProps = {
  collectionType: string;
  nameID: string;
  numberUpdatePath: string;
  priceUpdatePath: string;
};

export async function sedFileReq({
  File,
  collectionType,
  nameID,
}: {
  File: File | null;
  collectionType: string;
  nameID: string;
}) {

  if (!File) {
    return;
  }
  const formData = new FormData();
  formData.append("file", File);
  await fetch(`/api/upload/${collectionType}/${nameID}`, {
    method: "POST",
    body: formData,
  })
    .catch((err) => console.log("there a was an err ", err))
    .then((response) => console.log(response, "resolved"));
}

export async function updateNumber(
  currentNumberState: number,
  numberUpdatePath: string
) {
  await fetch(`/api/update/number/${numberUpdatePath}/${currentNumberState}`, {
    method: "PATCH",
  })
    .then((response) => console.log(response, "resolved"))
    .catch((err) => console.log("there a was an err ", err));
}

export async function updatePrice(
  setCurrentPriceState: number,
  priceUpdatePath: string
) {
  await fetch(`/api/update/price/${priceUpdatePath}/${setCurrentPriceState}`, {
    method: "PATCH",
  })
    .then((response) => console.log(response, "resolved"))
    .catch((err) => console.log("there a was an err ", err));
}

export function FileUploadDialog({
  collectionType,
  nameID,
  numberUpdatePath,
  priceUpdatePath,
}: FileUploadDialogProps) {
  const [currentFileState, setCurrentFileState] = useState<File | null>(null);
  const [curentPriceState, setCurrentPriceState] = useState<number>(0);
  const [shouldUpdatePrice, setShouldUpdatePrice] = useState<boolean>(false);
  const [shouldUpdateNumber, setShouldUpdateNumber] = useState<boolean>(false);
  const [shouldUpdateImage, setShouldUpdateImage] = useState<boolean>(false);
  const [currentNumberState, setCurrentNumberState] = useState<number>(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="text-left font-bold">
              Image File
            </Label>
            <Input
              id="link"
              type="file"
              onChange={async (e) => {
                setShouldUpdateImage(true);
                e.target.files &&
                  e.target.files.length > 0 &&
                  setCurrentFileState(e.target.files[0]);
                console.log(e.target.files && e.target.files[0].name, "file");
              }}
              accept=".gif,.jpg,.jpeg,.png"
            />
          </div>
        </div>
        <Label htmlFor="price-input" className="text-left font-bold">
          Price
        </Label>
        <Input
          type="text"
          id="price-input"
          onChange={(e) => {
            setShouldUpdatePrice(true);
            setCurrentPriceState(Number(e.target.value));
          }}
        />
        <Label htmlFor="number-input" className="text-left font-bold">
          Number
        </Label>
        <Input
          type="text"
          id="number-input"
          onChange={(e) => {
            setShouldUpdateNumber(true);
            setCurrentNumberState(Number(e.target.value));
          }}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary" 
              onClick={() => {
                shouldUpdatePrice &&
                  updatePrice(curentPriceState, priceUpdatePath);
                shouldUpdateNumber &&
                  updateNumber(currentNumberState, numberUpdatePath);
                currentFileState &&
                  shouldUpdateImage &&
                  sedFileReq({
                    File: currentFileState,
                    collectionType,
                    nameID,
                  });
              }}
            >
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
