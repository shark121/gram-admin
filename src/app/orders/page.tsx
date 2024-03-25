import { getDocs, doc, collection } from "firebase/firestore";
import { database } from "@/app/firebase.config";
import GenerateOrdersTable from "../../../components/orderComponents/generateOrdersTable";

async function getOrders() {
  const collectionRef = collection(database, "ORDERS");
  const data = await getDocs(collectionRef).then((response) =>
    response.docs.map((data) => ({ orderID: data.id, orderData: data.data() }))
  );
  return data;
}

async function getUsers() {
  const collectionRef = collection(database, "USERS");
  const data = await getDocs(collectionRef).then((response) => {
    console.log(response.docs, "response.docs");
   return response.docs.map((data) => ({ userID: data.id, userData: data.data() }));
  });
  return data;
}

export default async function Orders() {
  const DATA = await getOrders();
  const USERS = await getUsers();
  console.log(USERS, "USERS");

  console.log(DATA, "DATA");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <GenerateOrdersTable ordersData={DATA} />;
      </div>
    </div>
  );
}
