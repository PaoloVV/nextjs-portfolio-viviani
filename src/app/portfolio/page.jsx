"use client";

import Image from "next/image";
import { projectData } from "../_lib/projectData";
import { motion } from "framer-motion";
import { useState } from "react";

const descriptionVariants = {
  open: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default function Portfolio() {
  const projects = projectData;
  const [hoverCard, setHoverCard] = useState(null);

  return (
    <div>
      {/* TITLE */}
      <h1
        className="text-white font-bold text-4xl mb-5 md:mb-10"
        style={{
          "text-shadow": "0 0 10px #FFFFFF",
        }}
      >
        I miei Progetti
      </h1>
      <div className="self-center p-5 md:p-10 rounded-2xl bg-gradient-to-b from-white to-midnightLight">
        {/* PROJECT LIST  */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-center md:flex-wrap md:mx-8 lg:mx-10 xl:mx-12 md:gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* CARD PROJECT*/}
          {projects.map((project) => (
            <div
              className="w-3/4 max-w-96"
              key={project.id}
              onMouseOut={() => setHoverCard(null)}
              onMouseOver={() => setHoverCard(project.id)}
            >
              {/* BACKGROUND CARD */}
              <div className="w-full p-2 aspect-square rounded-xl ring-1 bg-midnight">
                <div className="relative aspect-square w-full h-full flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt=""
                    className="opacity-90 rounded-xl"
                    fill
                  />

                  {/* PROJECT DESCRIPTION AND LINK */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={hoverCard === project.id ? "open" : "closed"}
                    variants={descriptionVariants}
                    className="ring-1 font-bold p-2 rounded-xl w-4/5 bg-white bg-opacity-90 text-midnight text-sm absolute flex flex-col justify-around h-full"
                  >
                    <motion.div>{project.description}</motion.div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto ring-1 rounded-md p-2 bg-midnight hover:bg-sky-700 hover:ring-midnight text-white"
                    >
                      Vai al progetto
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="bg-white rounded-2xl bg-opacity-50">
                <h3 className="mt-2 text-2xl md:text-4xl font-semibold">
                  {project.title}
                </h3>

                <h4>{project.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
