import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Departments", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "About", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 select-none z-10 h-0 ">
      <nav
        className="flex items-center justify-between shadow-xl w-full px-8 py-3 bg-white bg-opacity-60 text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <span className="sr-only">Government College Website</span>
            <AcademicCapIcon className="h-6 w-6 text-black" />
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          {navigation.map((item) => (
            <span
              key={item.name}
              className="text-sm font-semibold  text-gray-900 hover:bg-indigo-500 hover:text-white px-2 py-1 rounded"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className=" flex gap-2 items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Log in{" "}
            <span aria-hidden="true" className="w-5">
              <LockClosedIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="-m-1.5 p-1.5">
              <AcademicCapIcon className="w-6 h-6" />
            </span>
            <div className="pl-3">
              Dr.B.R.Ambedkar Govt. Model Residential Polytechnic College
              Bommuru, Rajamahendravaram
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only pl-3">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <span
                    key={item.name}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="py-6">
                <span className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 bg-indigo-500 w-fit text-white  hover:bg-indigo-700">
                  Log in
                </span>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
