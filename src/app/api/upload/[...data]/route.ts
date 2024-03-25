import { NextResponse, NextRequest } from "next/server";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateDoc, collection, doc } from "firebase/firestore";
import { database, storage } from "@/app/firebase.config";
import { Context } from "vm";
import { get } from "http";


 async function fileUploadFunc(buffer:Buffer, collectionType:string, nameID:string, fileType:string) {
  const nameIDTrim = nameID.trim();
  console.log(nameIDTrim, fileType);

  const storageRef = ref(storage,  `${nameIDTrim}.${fileType}`)
  const uploadTask = uploadBytesResumable(storageRef, buffer);
  uploadTask.on(
    "state_changed",
    (snapshot) => {

      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
     console.log("an error occured while uploading the file")
    },
    () => {
      const collectionRef = collection(database, "Collection");
      
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateDoc(doc(collectionRef, collectionType), {
          [nameID]: downloadURL,
        });
        
      });
    }
  );
 }



export async function GET(params: { data: string[] }, request: NextRequest) {
  return NextResponse.json({data:"HEllo"});
}


export async function POST(request: NextRequest, context:Context) {
  
  const contextData = context.params;
  console.log(contextData);
  const data = await request.formData()
  const File : File = data.get("file") as File;
  const getFileTypeStartIndex = File.type.indexOf("/") + 1; 
  const fileType = File.type.slice(getFileTypeStartIndex);
  const bytes = await File.arrayBuffer();
  const buffer = Buffer.from(bytes);

  if(!File){
    return
  }

  fileUploadFunc(buffer, contextData.data[0], contextData.data[1], fileType);

  return NextResponse.json({response:"success_1"});
}