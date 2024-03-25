// "use client"
import SetStorage from "./setStorage/page";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  const DATA = await fetch("http://localhost:3000/api/getPrices/phones")
    .then((response) => response.json())
    .then((data) => data.message)
    .catch((error) => console.log(error));

  return (
    <div className={` h-screen w-screen flex items-center justify-center `}>
      <div className="h-[10rem] w-[10rem] flex flex-col justify-between items-center">
        <Link href="/phones">Phones</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/airpods">Airpods</Link>
        <Link href="/create">Create</Link>
        <Link href="/orders">Orders</Link>
        <SetStorage {...DATA} />
      </div>
    </div>
  );
}
