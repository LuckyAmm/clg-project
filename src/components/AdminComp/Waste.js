import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { MdClose, MdOutlineDashboard } from "react-icons/md";
import Logo from "../../images/logo.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
        } bg-gray-700/50 py-2 sticky top-0 lg:hidden `}
      >
        <HiMenuAlt3
          className={`${
            open && "hidden"
          } bg-black text-white p-1 w-12 h-8 rounded z-30 cursor-pointer lg:hidden sticky top-3 left-3`}
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      <div
        className={`${
          open ? "translate-x-[0]" : "translate-x-[-150vw] "
        } w-screen h-screen md:w-72 absolute bg-black text-white p-5 lg:translate-x-[0] transition-all duration-500 z-20`}
      >
        <div className="my-2 flex justify-end w-full">
          <MdClose
            className="bg-black text-white p-1 w-12 h-8 rounded z-30 cursor-pointer lg:hidden"
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <img src={Logo} alt="Logo" className="h-24 mx-auto my-3 select-none" />

        <nav>
          {items.map((item, i) => {
            if (item.subMenu) {
              return (
                <>
                  <div
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="flex gap-3 items-center p-2 m-1 hover:bg-red-50/20 rounded-lg select-none peer"
                  >
                    <div className="">
                      {React.createElement(item.icon, { size: "24" })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${i + 1}00ms`,
                      }}
                      className={`whitespace-pre duration-500 flex-1 ${
                        !open &&
                        "opacity-0 translate-x-28 overflow-hidden select-none cursor-pointer"
                      } lg:opacity-100 translate-x-0 `}
                    >
                      {item.name}
                    </h2>
                    <div className="text-white ">
                      <ChevronDownIcon width={20} />{" "}
                    </div>
                  </div>
                  <div className="block opacity-100 md:hidden md:peer-hover:block md:hover:block -mt-1 md:opacity-0 md:hover:opacity-100 md:peer-hover:opacity-100 transition-all duration-700">
                    {item.subMenu.map((subItem) => {
                      return (
                        <Link
                          onClick={() => {
                            setOpen(false);
                          }}
                          to={subItem.to}
                          className="flex gap-3 items-center p-2 m-1 hover:bg-red-50/20 hover:rounded-lg select-none ml-6 border-b"
                        >
                          <div className="">
                            {React.createElement(subItem.icon, { size: "24" })}
                          </div>
                          <h2
                            style={{
                              transitionDelay: `${i + 1}00ms`,
                            }}
                            className={`whitespace-pre duration-500 flex-1 ${
                              !open &&
                              "opacity-0 translate-x-28 overflow-hidden select-none cursor-pointer"
                            } lg:opacity-100 translate-x-0`}
                          >
                            {subItem.name}
                          </h2>
                        </Link>
                      );
                    })}
                  </div>
                </>
              );
            } else
              return (
                <NavLink
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={item.to}
                  className="flex gap-3 items-center p-2 m-1 hover:bg-gray-50/20 rounded-lg select-none"
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
            className="bg-indigo-600 py-1 px-2 rounded"
            onClick={changetoUser}
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
}
