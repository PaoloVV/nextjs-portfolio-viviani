"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Front End Devloper", "Next Js Developer"];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute top-20 inset-0 text-white  font-bold text-4xl md:text-5xl lg:text-6xl"
          style={{
            textShadow:
              "0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4, 0 0 160px #03bcf4",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5 }}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
