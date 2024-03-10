import { getDocs, collection } from "firebase/firestore";
import { database } from "@/app/firebase.config"
;

const collectionRef = collection(database, "airpods");

function getAirpods(){
    let airpodsData = getDocs(collectionRef).then((response) => response.docs.map((data) => data.data())); 
    console.log(airpodsData);
    return "Airpods";
}




export default function Airpods(){
    return(<div>airpods</div>)
}