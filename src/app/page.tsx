"use client";
import Image from "next/image";
import { useState } from "react";
import ComponentMap from "./Global/componentMap";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {

  return (
    <div className={` h-screen w-screen `}>
      <div className="h-full w-full flex justify-center items-center">
        <Link href="/phones">Phones</Link>
        <Link href="/watches">Watches</Link>
      </div>
    </div>
  );
}
