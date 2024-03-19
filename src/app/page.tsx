// "use client"
import SetStorage from "./setStorage/page";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  let DATA =   await fetch(
      "http://localhost:3000/api/getPrices/phones"
    ).then(async (response) => {
      let getData = await response.json();
      return getData;
    });
  
  return (
    <div className={` h-screen w-screen `}>
      <div className="h-full w-full flex justify-center items-center">
        <Link href="/phones">Phones</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/airpods">Airpods</Link>
      <SetStorage {...DATA} />
      </div>
    </div>
  );
}
