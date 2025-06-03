"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapPage() {
  return (
    <div className=" py-40 max-w-7xl mx-auto dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
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
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
            { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 19.0760, lng: 72.8777 } }, // Delhi -> Maharashtra (Mumbai)
  { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 12.9716, lng: 77.5946 } }, // Maharashtra (Mumbai) -> Karnataka (Bengaluru)
  { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 22.5726, lng: 88.3639 } }, // Karnataka (Bengaluru) -> West Bengal (Kolkata)
  { start: { lat: 22.5726, lng: 88.3639 }, end: { lat: 26.9124, lng: 75.7873 } }, // West Bengal (Kolkata) -> Rajasthan (Jaipur)

  // Continuing your global journey
  { start: { lat: 26.9124, lng: 75.7873 }, end: { lat: 51.0447, lng: -114.0719 } }, // Rajasthan (Jaipur) -> Canada (Calgary)
  { start: { lat: 51.0447, lng: -114.0719 }, end: { lat: 55.7558, lng: 37.6173 } }, // Canada -> Russia (Moscow)
  { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 23.5880, lng: 58.3829 } }, // Russia -> Dubai (Muscat assumed)
  { start: { lat: 23.5880, lng: 58.3829 }, end: { lat: 51.5074, lng: -0.1278 } }, // Dubai -> UK (London)
        ]}
      />
    </div>
  );
}
