import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import principal from "../images/principal.jpeg";
import branchPic from '../images/cme.png'
import { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const branches = [{ name: "ECE" }, { name: "MEC" }, { name: "CME" }];
export default function Staff() {
  const [selected, setSelected] = useState(branches[0]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full h-screen pt-20 px-4 md:px-16">
      <h2 className="text-center text-2xl font-bold mb-4">
        <span className="text-red-600 border-b-4 border-gray-900 mr-3">
          DEPARTMENT
        </span>
        <span className="text-gray-900 border-b-4 border-red-600">
          DETAILS
        </span>
      </h2>
      <div className="wraper flex flex-col items-center justify-center w-full gap-2">
        <div className="  flex items-center mb-2 gap-1 md:gap-3">
          <label htmlFor="branch" className="cursor-pointer text-xs md:text-base">
            Select Branch :
          </label>
          <Listbox
            value={selected}
            onChange={setSelected}
            className="w-52 md:w-72"
          >
            <div className="relative mt-1">
              <Listbox.Button
                id="branch"
                className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
              >
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {branches.map((branch, branchId) => (
                    <Listbox.Option
                      key={branchId}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={branch}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {branch.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="infoShow w-full bg-white h-full">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-indigo-600 p-1 w-full">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "tabDesign",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Information
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "tabDesign",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Faculty
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "tabDesign",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Labs
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "tabDesign",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Time Tables
              </Tab>
            </Tab.List>
            <Tab.Panels className="h-[70vh] bg-white">
              <Tab.Panel className="w-full bg-white  min-h-fit p-8 flex items-center flex-col">
                <img src={branchPic} alt="" className="float-left mx-auto md:m-4" />
                <p className="text-gray-900 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  distinctio quidem id sequi ipsa harum, error nemo eum, rem,
                  dignissimos quod? Corrupti, culpa magnam quaerat cupiditate
                  eum at fuga eaque labore magni? Alias accusamus, distinctio
                  pariatur est esse, numquam maxime corporis ipsam non velit
                  nobis a voluptatibus voluptatum laudantium error!. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Vel incidunt
                  voluptates nulla officiis aperiam, beatae deleniti ipsam
                  aliquam magnam illo iste libero nam veniam rem enim sunt
                  corrupti, corporis fugiat eius? Sapiente ullam laborum
                  doloremque sit animi repellat saepe cum, commodi deserunt
                  veniam obcaecati vel praesentium debitis tempore consequatur.
                  Quam, architecto. Fugit molestiae voluptate, impedit iste
                  ullam voluptas recusandae aperiam nesciunt sequi id eaque
                  saepe tempora harum, officiis maiores dolorum minima
                  necessitatibus voluptatem laborum earum? Omnis obcaecati
                  debitis rem recusandae. Blanditiis rerum praesentium fuga
                  reiciendis cumque ex asperiores optio eos eaque tenetur
                  architecto dolorem facilis nesciunt nostrum incidunt, minima
                  soluta ullam placeat nam impedit nisi quas repellendus ut!
                  Quas hic, excepturi soluta officia dolorem praesentium
                  adipisci magni, consectetur illo natus doloremque laboriosam.
                  Aliquid ad inventore porro saepe delectus maxime animi ducimus
                  laborum ipsa praesentium. Rem eveniet, laborum commodi ea ut
                  maiores voluptatem eligendi omnis quas reiciendis atque
                  assumenda excepturi autem!
                </p>
              </Tab.Panel>
              <Tab.Panel className="w-full bg-white  min-h-fit p-2 md:p-6">
                <div className="flex flex-wrap gap-x-2 gap-y-6 justify-evenly">
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between py-3">
                    <img
                      className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                      src={principal}
                      alt="Sunset in the mountains"
                      draggable={false}
                    />
                    <div className="px-6 py-4">
                      <div className="font-semibold text-xl mb-2 text-black">
                        Saida Nayaksfsdfsdfs
                      </div>
                      <p className="text-gray-700 text-base flex flex-col text-start">
                        <span> Digital Electrnics Expert</span>
                        <span>Phd Frcs Mbbs Medical</span>
                        <span>4 Years Experience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="w-full bg-white  min-h-fit">
                lab tab
              </Tab.Panel>
              <Tab.Panel className="w-full bg-white  min-h-fit">
                time table tab
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
