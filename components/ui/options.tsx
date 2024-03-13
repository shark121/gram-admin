import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { dataTuple } from "../products/phonesComponents/phones";

export default function Options({
  chosenItem,
  setChosenItem,
  listData,
}: {
  chosenItem: dataTuple;
  setChosenItem: React.Dispatch<React.SetStateAction<dataTuple>>;
  listData: dataTuple[];
}) {
  const [query, setQuery] = useState("");

  let filteredlistData =
    query === ""
      ? listData
      : listData.filter((item) =>
          item[0]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className=" m-4">
      <Combobox value={chosenItem} onChange={setChosenItem}>
        <div className="relative ">
          <div className="relative w-[10rem] cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none    focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm text-gray-500">
            <Combobox.Input
              className=" h-[2.2rem] border-none py-2 pl-3 pr-10   leading-5 text-gray-600 outline-none focus:ring-0"
              displayValue={(item: dataTuple) => item[0]}
              onChange={(event) => setQuery(event.target.value)}
              readOnly
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredlistData.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found
                </div>
              ) : (
                filteredlistData.map((item) => (
                  <Combobox.Option
                    key={item[0]}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={`block truncate   ${
                            chosenItem ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item[0]}{" "}

                        </span>
                        {chosenItem ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
