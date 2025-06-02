"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import Image from "next/image";

export  function WorldMapHero() {
  return (
    <div className=" md:py-40 py-36 dark:bg-black bg-white w-full max-w-8xl mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Shipping Products{" "}
          <span className="text-neutral-400">
            {"Globally".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own house.
        </p>
      </div>
    <div className="w-full flex justify-center">
      <div className="w-full md:mx-32">
        <Image 
          src="/map.svg" 
          alt="World map showing global shipping coverage" 
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
    </div>

  );
}
