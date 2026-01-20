"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`hover:underline hover:text-blue-400 mr-2 transition-all ${
        pathName === path ? "text-red-700" : ""
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
