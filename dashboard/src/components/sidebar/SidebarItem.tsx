"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

const SidebarItem = ({ path, icon, title }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={path}
        className={`text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out flex items-center gap-2 ${
          pathname === path ? " bg-teal-500 text-white" : ""
        }`}
      >
        <span className="w-6 h-6 inline-flex items-center justify-center text-lg">
          {icon}
        </span>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default SidebarItem;
