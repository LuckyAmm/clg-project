import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
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
  
  
  const changeBackground = () => {
    if (window.scrollY >= 90) {
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
            ? `flex items-center justify-between shadow-xl w-full px-8 py-2 bg-indigo-900 text-white`
            : `flex items-center justify-between  w-full px-8 py-2 bg-gray-200/50 text-gray-900`
        }
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <span className="sr-only">Government College Website</span>
            <AcademicCapIcon className="h-6 w-6 " />
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
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
                  className="transition-all duration-500 text-sm font-semibold  hover:bg-indigo-500 hover:text-white px-2 py-1 rounded"
                >
                  {item.name}
                </NavLink>
              )}
              {item.subMenu && (
                <Menu
                  as="div"
                  className="relative text-left min-w-full"
                  key={i}
                >
                  <Menu.Button className=" text-sm font-semibold  hover:bg-indigo-500 hover:text-white px-2 py-1 rounded ">
                    <div className="flex items-center gap-3">
                      <h2 className="whitespace-pre duration-500 lg:opacity-100 translate-x-0 ">
                        {item.name}
                      </h2>
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-90"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-90"
                  >
                    <Menu.Items>
                      <div className=" flex flex-col absolute shadow-xl w-44">
                        {item.subMenu.map((subItem, i) => {
                          return (
                            <Menu.Item key={i} className="">
                              <NavLink to={subItem.href} className="">
                                <h2
                                  className={`text-white group flex w-full bg-indigo-600 p-2 hover:bg-indigo-900 hover:text- transition-all duration-300`}
                                >
                                  {subItem.name}
                                </h2>
                              </NavLink>
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
                {navigation.map((item, i) => (
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
                      <Menu as="div" className="" key={i}>
                        <Menu.Button className="flex items-center gap-3 justify-center w-full rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 text-center">
                            {item.name}
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-90"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-200"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-90"
                        >
                          <Menu.Items>
                            <div className=" flex flex-col shadow-xl w-full bg-indigo-400/70 rounded-xl text-center">
                              {item.subMenu.map((subItem, i) => {
                                return (
                                  <Menu.Item key={i} className="p-2">
                                    <NavLink
                                      to={subItem.href}
                                      className="rounded"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                      }}
                                    >
                                      {subItem.name}
                                    </NavLink>
                                  </Menu.Item>
                                );
                              })}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
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
