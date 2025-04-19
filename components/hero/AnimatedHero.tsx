"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Leaf,
  Flower,
  Sprout,
  TreesIcon as Plant,
  Clover,
  FlowerIcon,
  Flower2,
} from "lucide-react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// Expanded array of leaf and flower icons
const natureIcons = [
  { icon: Leaf, color: "text-emerald-500" },
  { icon: Flower, color: "text-pink-400" },
  { icon: Sprout, color: "text-lime-500" },
  { icon: Plant, color: "text-teal-500" },
  { icon: Clover, color: "text-emerald-600" },
  { icon: FlowerIcon, color: "text-rose-400" },
  { icon: Flower2, color: "text-violet-400" },
  { icon: Leaf, color: "text-green-500" },
  { icon: Clover, color: "text-lime-600" },
];

function NatureIcon({
  className,
  delay = 0,
  size = 80,
  rotate = 0,
  iconIndex = 0,
  opacity = 0.6,
}: {
  className?: string;
  delay?: number;
  size?: number;
  rotate?: number;
  iconIndex?: number;
  opacity?: number;
}) {
  const { icon: Icon, color } = natureIcons[iconIndex % natureIcons.length];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={cn(color, "opacity-" + Math.floor(opacity * 100))}
          >
            <Icon size={size} strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric({
  badge = "MP Pharmaceuticals",
  title1 = "Elevate Your",
  title2 = "Health Naturally",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Left side icons */}
        <NatureIcon
          delay={0.3}
          size={120}
          rotate={12}
          iconIndex={0}
          opacity={0.7}
          className="left-[-5%] md:left-[5%] top-[15%] md:top-[20%]"
        />

        <NatureIcon
          delay={0.4}
          size={80}
          rotate={-8}
          iconIndex={2}
          opacity={0.5}
          className="left-[10%] md:left-[15%] bottom-[10%] md:bottom-[15%]"
        />

        <NatureIcon
          delay={0.7}
          size={40}
          rotate={-25}
          iconIndex={4}
          opacity={0.6}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        <NatureIcon
          delay={0.9}
          size={70}
          rotate={-10}
          iconIndex={2}
          opacity={0.5}
          className="left-[30%] top-[30%]"
        />

        <NatureIcon
          delay={1.1}
          size={50}
          rotate={15}
          iconIndex={8}
          opacity={0.7}
          className="left-[15%] top-[50%]"
        />

        <NatureIcon
          delay={1.3}
          size={35}
          rotate={-5}
          iconIndex={6}
          opacity={0.6}
          className="left-[5%] top-[80%]"
        />

        {/* Right side icons */}
        <NatureIcon
          delay={0.5}
          size={100}
          rotate={-15}
          iconIndex={1}
          opacity={0.6}
          className="right-[5%] md:right-[10%] top-[70%] md:top-[75%]"
        />

        <NatureIcon
          delay={0.6}
          size={60}
          rotate={20}
          iconIndex={3}
          opacity={0.8}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <NatureIcon
          delay={0.8}
          size={90}
          rotate={15}
          iconIndex={5}
          opacity={0.6}
          className="right-[25%] bottom-[20%]"
        />

        <NatureIcon
          delay={1.0}
          size={45}
          rotate={-20}
          iconIndex={7}
          opacity={0.7}
          className="right-[30%] top-[40%]"
        />

        <NatureIcon
          delay={1.2}
          size={55}
          rotate={10}
          iconIndex={1}
          opacity={0.5}
          className="right-[8%] top-[30%]"
        />

        {/* Center area icons */}
        <NatureIcon
          delay={1.4}
          size={30}
          rotate={-8}
          iconIndex={4}
          opacity={0.4}
          className="left-[45%] top-[15%]"
        />

        <NatureIcon
          delay={1.5}
          size={25}
          rotate={12}
          iconIndex={6}
          opacity={0.5}
          className="left-[55%] bottom-[25%]"
        />

        <NatureIcon
          delay={1.6}
          size={40}
          rotate={-5}
          iconIndex={3}
          opacity={0.3}
          className="right-[45%] top-[85%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200 border border-emerald-200 mb-8 md:mb-12"
          >
            <Image
              src="https://kokonutui.com/logo.svg"
              alt="Kokonut UI"
              width={20}
              height={20}
              className="h-5 w-5 shadow-2xl"
            />
            <span className="text-sm text-emerald-700 tracking-wide font-semibold">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-emerald-950 to-emerald-800">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-emerald-700 mb-8 leading-relaxed font-medium tracking-wide max-w-1.5xl mx-auto px-4">
              Partner with us for premium herbal formulations. We blend
              tradition and science to elevate your natural product line.{" "}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
