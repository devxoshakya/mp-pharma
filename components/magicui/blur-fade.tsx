"use client";

import {
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
} from "motion/react";
import { useRef } from "react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.6,
  delay = 0,
  offset = 20,
  direction = "down",
  inView = false,
  inViewMargin = "0px 0px -100px 0px",
  blur = "4px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { 
    once: true, 
    margin: inViewMargin,
    amount: 0.1 // Trigger when 10% of element is visible
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.div
      ref={ref}
      initial={false} // Prevent hydration mismatch
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.1 + delay,
        duration,
        ease: [0.21, 1.11, 0.81, 0.99], // Custom spring easing
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
