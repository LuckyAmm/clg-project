import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Bg from "../../images/gmr.jpg";


export default function Admin() {
    let [isOpen, setIsOpen] = useState(false);
    const [btnText ,setBtnText] = useState("Edit")

  return (
    <>
      <div className="w-screen h-screen lg:pl-[18.5rem] lg:pr-2 max-h-full overflow-y-scroll ">
        <div className=" bg-white min-h-full max-h-fit rounded mx-auto border-2 p-4">
                  <div className="landing">
                      <img src={Bg} alt="" className="h-4/5" />
          </div>
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
    </>
  );
}
