"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./_components/animatedTitle";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-between items-center gap-20">
      {/* TITLE */}
      <div className="flex flex-col">
        <div className="aspect-square relative h-40">
          {/* <Image className="rounded-xl" src="/fotoBackPc.jpg" alt="" fill /> */}
          <div className="absolute top-2 inset-0 text-start">
            {" "}
            <h1
              className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{
                "text-shadow": "0 0 10px #FFFFFF",
              }}
            >
              Paolo Viviani
            </h1>
          </div>
          <AnimatedText />
        </div>
        <div className="w-3/5 self-center">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aliquam, nam aperiam minus, doloremque mollitia voluptatem autem
            ipsum sed officiis consectetur facilis! Doloremque molestiae quaerat
            alias, ipsum cum deserunt quo.
          </p>
        </div>
      </div>

      <div className="md:absolute bottom-10 left-1/4 min-h-[200px] md:w-1/2 p-7 flex flex-col justify-between gap-10 ">
        {/* DESC */}
        <p className="text-center italic text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos.
        </p>
        {/* BUTTONS */}
        <div className="flex flex-col gap-5 md:flex-row justify-evenly">
          <Link href="/portfolio">
            <button className="shadow-neonMidnight20 md:shadow-neonMidnight40 md:hover:shadow-neonSky160 p-3 rounded-lg ring-midnight bg-midnight hover:bg-sky-700 hover:ring-midnight active:bg-white active:text-midnight text-white font-semibold">
              I miei Progetti
            </button>
          </Link>

          <Link href="/">
            <button className="shadow-neonWhite20 md:shadow-neonWhite40 md:hover:shadow-neonSky160 p-3 rounded-lg bg-white hover:bg-sky-700 hover:ring-midnight text-midnight hover:text-white font-semibold">
              Il mio CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
