"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export  function WorldMapHero() {
  return (
    <div className=" md:py-40 py-36 dark:bg-black bg-white w-full max-w-7xl mx-auto">
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
      <video 
        className="w-full max-w-full" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/map.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>

  );
}
