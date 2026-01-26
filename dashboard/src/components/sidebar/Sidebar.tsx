"use client";

import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeart,
} from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline />,
    title: "Dashboard",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator />,
    title: "Counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball />,
    title: "Pokemones",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart />,
    title: "Favorites",
  },
];

const Sidebar = () => {
  return (
    <div>
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
          <svg
            className="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div className="space-y-6 md:space-y-10 mt-5">
            <div className="flex items-center justify-center">
              <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                Dashwind
              </h1>
              <span className="text-teal-600 text-3xl">
                <RiNextjsLine />
              </span>
            </div>
            <div id="profile" className="space-y-3">
              <Image
                loading="eager"
                src="/amolchi.jpeg"
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
                width={50}
                height={50}
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                  Glaiveth Alvarez
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  Administradora
                </p>
              </div>
            </div>
            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"></div>
            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" className="flex flex-col space-y-2">
              {menuItems.map((mi) => (
                <SidebarItem
                  key={mi.path}
                  path={mi.path}
                  icon={mi.icon}
                  title={mi.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
