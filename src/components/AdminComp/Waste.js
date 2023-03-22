  import React, { Fragment, useState} from "react";
  import { HiMenuAlt3 } from "react-icons/hi";
  import { NavLink } from "react-router-dom";
  import { MdClose, MdOutlineDashboard } from "react-icons/md";
  import Logo from "../../images/logo.png";
  import { ChevronDownIcon } from "@heroicons/react/24/outline";
  import { Menu, Transition } from "@headlessui/react";

  export default function Waste({ changetoUser }) {
    const items = [
      { name: "Dashboard", to: "/", icon: MdOutlineDashboard },
      { name: "Staff", to: "/admin", icon: MdOutlineDashboard },
      {
        name: "Landing",
        to: "/editLanding",
        icon: MdOutlineDashboard,
        subMenu: [
          { name: "Landing", to: "/editLanding", icon: MdOutlineDashboard },
          { name: "Slider Images", to: "/", icon: MdOutlineDashboard },
          { name: "Principal Message", to: "/", icon: MdOutlineDashboard },
        ],
      },
      { name: "Admissions", to: "/", icon: MdOutlineDashboard },
      { name: "Departments", to: "/", icon: MdOutlineDashboard },
      { name: "Gallery", to: "/", icon: MdOutlineDashboard },
    ];

    const [open, setOpen] = useState(false);
    
    
    return (
      <>
        <div
          className={`${
            open && "hidden"
          } bg-[#000042] py-2 sticky top-0 lg:hidden `}
        >
          <HiMenuAlt3
            className={`${
              open && "hidden"
            } bg-gray-200 text-[#000042] p-1 w-12 h-8 rounded z-30 cursor-pointer lg:hidden sticky top-3 left-3`}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
        <div
          className={`${
            open ? "translate-x-[0]" : "translate-x-[-150vw] "
          } w-screen h-screen md:w-72 absolute bg-[#000042] text-white pl-2 lg:translate-x-[0] transition-all duration-500 z-20`}
        >
          <div className="my-2 flex justify-end w-full">
            <MdClose
              className="bg-black text-white p-1 w-12 h-8 rounded z-30 cursor-pointer lg:hidden"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <img
            src={Logo}
            alt="Logo"
            className="h-24 mx-auto my-3 select-none"
          />

          <nav>
            {items.map((item, i) => {
              if (item.subMenu) {
                return (
                  <>
                    <Menu
                      as="div"
                      className="relative text-left min-w-full"
                      key={i}
                    >
                      <Menu.Button className="flex gap-3 items-center p-2 m-1 hover:bg-gray-50/20 rounded-lg justify-between select-none w-full">
                        <div className="flex items-center gap-3">
                          <div className="">
                            {React.createElement(item.icon, { size: "24" })}
                          </div>
                          <h2 className="whitespace-pre duration-500 lg:opacity-100 translate-x-0 ">
                            {item.name}
                          </h2>
                        </div>
                        <ChevronDownIcon
                          className="h-5 w-5 mx-5"
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
                          <div className="ml-7 bg-[#2e2e8bda] rounded-l-lg">
                            {item.subMenu.map((subItem, i) => {
                              return (
                                <Menu.Item
                                  key={i}
                                  className="p-2 flex hover:bg-gray-900/95 hover:border-r-4 mr-1"
                                >
                                  <NavLink
                                    to={subItem.to}
                                    onClick={() => {
                                      setOpen(false);
                                    }}
                                  >
                                    {React.createElement(subItem.icon, {
                                      size: "24",
                                    })}
                                    <h2
                                      className={`text-white group flex w-full `}
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
                  </>
                );
              } else
                return (
                  <NavLink
                    onClick={() => {
                      setOpen(false);
                    }}
                    to={item.to}
                    className={`flex gap-3 items-center p-2 m-1 hover:bg-gray-50/20 rounded-l-lg select-none  hover:border-r-4 `}
                  >
                    <div className="">
                      {React.createElement(item.icon, { size: "24" })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${i + 1}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open &&
                        "opacity-0 translate-x-28 overflow-hidden select-none cursor-pointer"
                      } lg:opacity-100 translate-x-0`}
                    >
                      {item.name}
                    </h2>
                  </NavLink>
                );
            })}
            <button
              className="bg-indigo-600 py-1 px-2 rounded mx-5 my-10"
              onClick={changetoUser}
            >
              Logout
            </button>
          </nav>
        </div>
      </>
    );
  }
