"use client"
import Image from "next/image";
import { useState } from "react";
import ComponentMap from "./Global/componentMap";
import { Comfortaa } from "next/font/google";
import Drawer from "../../components/ui/drawer";
import Accordion from "../../components/ui/accordion";
import Airpods from "../../components/airpods/airpods";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(ComponentMap.Phones);

  return (
    <div className={` h-screen w-screen `}>
      <Drawer
        SidebarConetent={
          <Accordion />
        }
        pageContent={currentComponent}
      />
    </div>
  );
}
