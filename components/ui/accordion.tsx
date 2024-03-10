import React, { MouseEventHandler } from "react";
import ComponentMap from "@/app/Global/componentMap";
export type contenType = {
  [key: string]: JSX.Element;
};

export type AccordionChildren = {
  itemName: string;
  content?: string[];
};

let dummy: AccordionChildren[] = [
  {
    itemName: "Products",
    content: ["Phones", "Airpods", "Watches", "Other"],
  },
  {
    itemName: "Orders",
    content: ["Pending", "Delivered", "Cancelled"],
  },
  {
    itemName: "Transactions",
    content: ["phones", "airpods"],
  },
];

export default function Accordion({
  setCurrentComponent
}: {
  setCurrentComponent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}) {
  function handleOnClick(item: string) {
    setCurrentComponent(ComponentMap[item]);
  }

  function Division({ itemName, content }: AccordionChildren): JSX.Element {
    return (
      <div className="collapse collapse-arrow " key={itemName}>
        <input type="radio" name="my-accordion-2" defaultChecked={false} />
        <div className="collapse-title text-lg ">{itemName}</div>
        <div className="collapse-content mr-8 flex items-center flex-col ">
          <div className="w-[80%] h-full">
            {content?.map((item) => (
              <li
                onClick={(e)=>handleOnClick(item)}
                key={item}
              >
                <button className="h-full w-full bg-red-300"
                onClick={()=>console.log("clicked")}
                >{item}</button>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }

  let list: ReturnType<typeof Division>[] = dummy.map(
    ({ itemName, content }) => (
      <Division itemName={itemName} content={content} key={itemName} />
    )
  );

  return <div className="h-full w-full font-bold " >{...list}</div>;
}
