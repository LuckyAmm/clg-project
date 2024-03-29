import React,{useState,Fragment} from "react";
import principal from "../../images/principal.jpeg";
import { PencilSquareIcon ,CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition, Listbox } from "@headlessui/react";



const listOfHod = [
  {
    Name: "Srinivas Rao",
    Age: "46",
    Experience: "4 years",
    Specialization: "MicroProcesors",
    Education: "btech,mtech,phd",
  },
  {
    Name: "Hari Praad",
    Age: "45",
    Experience: "2 years",
    Specialization: "java",
    Education: "btech",
  },
  {
    Name: "Srinivas Murthy",
    Age: "76",
    Experience: "5 years",
    Specialization: "python",
    Education: "diploma",
  },
];
const staffList = [
  {
    Name: "Srinivas ",
    Age: "46",
    Experience: "4 years",
    Specialization: "MicroProcesors",
    Education: "btech,mtech,phd",
  },
  {
    Name: "Hari ",
    Age: "41",
    Experience: "2 months",
    Specialization: "python",
    Education: "inter",
  },
  {
    Name: "Srinivas Murthy",
    Age: "76",
    Experience: "5 years",
    Specialization: "python",
    Education: "diploma",
  },
  {
    Name: "Srinivas Murthy",
    Age: "76",
    Experience: "5 years",
    Specialization: "python",
    Education: "diploma",
  },
  {
    Name: "Srinivas Murthy",
    Age: "76",
    Experience: "5 years",
    Specialization: "python",
    Education: "diploma",
  },
  {
    Name: "Srinivas Murthy",
    Age: "76",
    Experience: "5 years",
    Specialization: "python",
    Education: "diploma",
  },
];
const branches = [{name:"All"},{ name: "ECE" }, { name: "MEC" }, { name: "CME" }];

export default function Admin() {
  let [isOpen, setIsOpen] = useState(false)
    let [isDelOpen, setIsDelOpen] = useState(false);

  let [btnText, setBtnText] = useState("Edit")
  const [selected, setSelected] = useState(branches[0]);
  

  return (
    <>
      <div className="w-screen h-screen lg:pl-[18.5rem] lg:pr-2 max-h-full overflow-y-scroll ">
        <div className=" bg-white min-h-full max-h-fit rounded mx-auto border-2 p-4">
          <h2 className="text-center text-3xl font-bold mb-6">
            <span className="text-red-600 border-b-4 border-gray-900 mr-3">
              STAFF
            </span>
            <span className="text-gray-900 border-b-4 border-red-600">
              PAGE
            </span>
          </h2>
          <div className=" flex items-center mb-4 gap-1 md:gap-3">
            <label
              htmlFor="branch"
              className="cursor-pointer text-xs md:text-base"
            >
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
          <div className="flex flex-wrap gap-x-2 gap-y-6 justify-evenly text-center ">
            {listOfHod.map((item) => {
              return (
                <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between pt-3 mx-auto">
                  <img
                    className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                    src={principal}
                    alt="Sunset in the mountains"
                    draggable={false}
                  />

                  <div className="px-6 py-4">
                    <div className="font-semibold text-xl mb-2 text-gray-900/95">
                      {item.Name}
                    </div>
                    <p className="text-gray-700 text-base flex flex-col text-start">
                      <span className="text-sm text-gray-600">
                        {" "}
                        Designation:{" "}
                        <span className="font-bold text-base">HOD</span>{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        Specialization:{" "}
                        <span className="font-bold text-base">
                          {item.Specialization}
                        </span>{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        Education:{" "}
                        <span className="font-bold text-base">
                          {item.Education}
                        </span>
                      </span>
                      <span className="text-sm text-gray-600">
                        Experience:{" "}
                        <span className="font-bold text-base">
                          {item.Experience}
                        </span>{" "}
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                      className="w-full p-2 text-white flex justify-center items-center bg-blue-600 select-none hover:bg-blue-500"
                    >
                      <PencilSquareIcon className="h-5 w-5 mx-3 cursor-pointer " />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setIsDelOpen(true);
                      }}
                      className="w-full p-2 text-white flex justify-center items-center bg-red-600 select-none hover:bg-red-500"
                    >
                      <TrashIcon className="h-5 w-5 mx-3 cursor-pointer  " />
                      Delete
                    </button>
                  </div>
                </div>
                // </div>
              );
            })}

            {staffList.map((item) => {
              return (
                <div className="w-full md:max-w-[18rem] rounded-xl overflow-hidden shadow-lg border-2 flex flex-col justify-between pt-3 mx-auto">
                  <img
                    className="w-32 object-cover rounded-full border-2 object-center h-32 select-none mx-auto"
                    src={principal}
                    alt="Sunset in the mountains"
                    draggable={false}
                  />

                  <div className="px-6 py-4">
                    <div className="font-semibold text-xl mb-2 text-black">
                      {item.Name}
                    </div>
                    <p className="text-gray-700 text-base flex flex-col text-start">
                      <span className="text-sm text-gray-600">
                        {" "}
                        Designation:{" "}
                        <span className="font-bold text-base">SL</span>{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        Specialization:{" "}
                        <span className="font-bold text-base">
                          {item.Specialization}
                        </span>{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        Education:{" "}
                        <span className="font-bold text-base">
                          {item.Education}
                        </span>
                      </span>
                      <span className="text-sm text-gray-600">
                        Experience:{" "}
                        <span className="font-bold text-base">
                          {item.Experience}
                        </span>{" "}
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex justify-evenly">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                      className="w-full p-2 text-white flex justify-center items-center bg-blue-600 hover:bg-blue-500"
                    >
                      <PencilSquareIcon className="h-5 w-5 mx-3 cursor-pointer " />
                      Edit
                    </button>
                    <button className="w-full p-2 text-white flex justify-center items-center bg-red-600 hover:bg-red-500">
                      <TrashIcon className="h-5 w-5 mx-3 cursor-pointer  " />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-6 justify-evenly"></div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg text-center font-medium leading-6 text-gray-900 mb-4"
                  >
                    EDIT DETAILS
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className=" text-gray-600">
                      <div className="flex mb-2 items-center">
                        <p className="w-1/2">Profile Photo: </p>
                        <input
                          className=" px-2 py-1 rounded border-2 "
                          type="file"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <p className="w-1/2">Name: </p>
                        <input
                          className=" px-2 py-1 rounded border-2 "
                          type="text"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <p className="w-1/2">Designation: </p>
                        <input
                          className=" px-2 py-1 rounded border-2 "
                          type="text"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <p className="w-1/2">Position: </p>
                        <input
                          className=" px-2 py-1 rounded border-2 "
                          type="text"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <p className="w-1/2">Experience (in years):</p>
                        <input
                          className=" px-2 py-1 rounded  border-2"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setBtnText("Ok");
                      }}
                    >
                      {btnText}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-3"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* delete messge */}
      <Transition appear show={isDelOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsDelOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg text-center font-medium leading-6 text-gray-900 mb-4"
                  >
                    Confirm to Delete ?
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className=" text-gray-600 text-center">
                      The Information will be Lost. Are you Sure ?
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-3"
                      onClick={() => {
                        setIsDelOpen(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
