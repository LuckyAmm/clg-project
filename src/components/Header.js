import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Departments", href: "/departments" },
  {
    name: "Admissions",
    href: "/admissions",
    subMenu: [
      { name: "Acadamics", href: "/admissions" },
      { name: "Time Table", href: "/table" },
      { name: "Examinations", href: "/" },
      { name: "Unit Tests", href: "/" },
    ],
  },
  {
    name: "Comittie",
    href: "/about",
    subMenu: [
      { name: "Anti Ragging", href: "/" },
      { name: "head committe", href: "/" },
      { name: "no work committe", href: "/" },
      { name: "None ", href: "/" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "AICEF", href: "/AICEF" },
  { name: "EOAD", href: "/AICEF" },
  { name: "About", href: "/about" },
];


export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  
  
  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground);
  
  return (
    <div className="sticky top-0 left-0 select-none z-10 h-0 w-screen">
      <nav
        className={
          navbar
            ? `flex items-center justify-between shadow-xl w-full px-8 py-2 bg-white text-white`
            : `flex items-center justify-between  w-full px-8 py-2 bg-white bg-opacity-40 text-white`
        }
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
        <div className="hidden lg:flex lg:gap-x-3">
          {navigation.map((item, i) => (
            <div key={i} className="flex flex-col">
              {!item.subMenu && (
                <NavLink
                  to={item.href}
                  key={item.name}
                  className="transition-all text-sm font-semibold  text-gray-900 hover:bg-indigo-500 hover:text-white px-2 py-1 rounded peer"
                >
                  {item.name}
                </NavLink>
              )}
              {item.subMenu && (
                <div
                  to={item.href}
                  key={item.name}
                  className="cursor-pointer transition-all text-sm font-semibold  text-gray-900 hover:bg-indigo-500 hover:text-white px-2 py-1 rounded peer"
                >
                  {item.name}
                </div>
              )}
              {item.subMenu && (
                <div className=" flex-col hidden peer-hover:flex absolute top-10 bg-indigo-500/90 hover:flex rounded peer-active:flex ">
                  {item.subMenu.map((subitem) => (
                    <Link
                      to={subitem.href}
                      key={subitem.name}
                      className="hover:bg-indigo-700/70 p-4 rounded"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className=" flex gap-2 items-center rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
            <span aria-hidden="true" className="w-5">
              <LockClosedIcon className="h-4 w-4" />
            </span>
          </Link>
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
                  <>
                    {!item.subMenu && (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    )}
                    {item.subMenu && (
                      <div
                        to={item.href}
                        key={item.name}
                        className="cursor-pointer -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 text-center "
                        onClick={() => {
                          subMenuOpen
                            ? setSubMenuOpen(false)
                            : setSubMenuOpen(true);
                        }}
                      >
                        {item.name}
                      </div>
                    )}
                    {item.subMenu && subMenuOpen && (
                      <div className=" flex-col flex  bg-gray-500/70 hover:flex rounded peer-active:flex z-40 ">
                        {item.subMenu.map((subitem) => (
                          <Link
                            to={subitem.href}
                            key={subitem.name}
                            className="hover:bg-gray-700/70 p-4 rounded hover:text-white"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 bg-indigo-500 w-fit text-white  hover:bg-indigo-700"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
