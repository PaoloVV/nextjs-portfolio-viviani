"use client";

import Link from "next/link";
import NavLink from "./navLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/about", title: "About" },
  { id: 3, url: "/portfolio", title: "Portfolio" },
  { id: 4, url: "/skills", title: "Skills" },
  { id: 5, url: "/contact", title: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="h-20 flex justify-between items-center p-3 sticky top-0 left-0 bg-black bg-opacity-90 rounded-b-2xl z-40">
      {/* LINKS */}
      <div className="text-white font-semibold hidden md:flex w-1/3 gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:w-1/3 lg:flex flex justify-center">
        <Link
          href="/"
          className="ring-2 w-fit bg-white p-2 rounded-md italic font-semibold text-midnight"
        >
          VivianiDev
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="w-1/3 flex md:hidden justify-end">
        {/* BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 rounded bg-white h-1 origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 rounded bg-white h-1"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 rounded bg-white h-1 origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div
            className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center font-bold text-4xl gap-12 z-40"
            style={{
              "text-shadow": "0 0 10px #FFFFFF",
            }}
          >
            {links.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex md:justify-end w-1/3 gap-4 lg:gap-8 xl:gap-12">
        <a
          href="https://github.com/PaoloVV"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full"
        >
          <Image src="/github.png" alt="" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/paolo-viviani-webdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full"
        >
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </a>
      </div>
    </div>
  );
}
