"use client"

import axios from "axios";
import { CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type FileUploadDialogProps = {
  collectionType : string,
  nameID :string
}

async function sedFileReq({
  File,
  collectionType,
  nameID
}: {
  File: File;
  collectionType: string;
  nameID: string;
}) {
  const formData = new FormData();
   formData.append('file', File);
   await fetch(`/api/upload/${collectionType}/${nameID}`, {
     method: 'POST',
     body: formData,
   })
    .catch((err) => console.log("there a was an err ", err))
    .then((response) => console.log(response, "resolved"));
}

export function FileUploadDialog({
collectionType,
nameID
}: FileUploadDialogProps) {
  const [currentFileState, setCurrentFileState] = useState<File | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              File
            </Label>
            <Input
              id="link"
              type="file"
              onChange={async (e) => {
                e.target.files && e.target.files.length > 0 && setCurrentFileState(e.target.files[0]);
                console.log(e.target.files[0].name, "file");
              }}
              accept=".gif,.jpg,.jpeg,.png"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                currentFileState &&
                sedFileReq({ File: currentFileState, collectionType, nameID})
              }
            >
              Upload
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
