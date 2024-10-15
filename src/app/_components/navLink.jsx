"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      className={`p-2 ${
        pathName === link.url && "bg-midnight text-white rounded-md"
      } ${pathName !== link.url && "hover:scale-105 hover:text-sky-500"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
