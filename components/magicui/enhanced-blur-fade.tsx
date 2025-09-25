"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
  useReducedMotion,
} from "motion/react";
import { useRef, useMemo } from "react";
import { useUIStore } from "@/lib/stores/ui-store";

type MarginType = UseInViewOptions["margin"];

interface EnhancedBlurFadeProps extends MotionProps {
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
  threshold?: number; // How much of the element should be visible to trigger
  once?: boolean; // Whether animation should run only once
}

export function EnhancedBlurFade({
  children,
  className,
  variant,
  duration = 0.6,
  delay = 0,
  offset = 20,
  direction = "down",
  inView = false,
  inViewMargin = "0px 0px -50px 0px",
  blur = "4px",
  threshold = 0.15,
  once = true,
  ...props
}: EnhancedBlurFadeProps) {
  const ref = useRef(null);
  const { performanceMode } = useUIStore();
  const shouldReduceMotion = useReducedMotion();
  
  // Adjust animation based on performance mode and user preferences
  const adjustedSettings = useMemo(() => {
    if (shouldReduceMotion || performanceMode === 'performance') {
      return {
        duration: 0.3,
        offset: 10,
        blur: "2px",
        ease: "easeOut"
      };
    }
    
    if (performanceMode === 'quality') {
      return {
        duration: duration * 1.2,
        offset: offset * 1.2,
        blur,
        ease: [0.21, 1.11, 0.81, 0.99]
      };
    }
    
    return {
      duration,
      offset,
      blur,
      ease: [0.21, 1.11, 0.81, 0.99]
    };
  }, [shouldReduceMotion, performanceMode, duration, offset, blur]);

  const inViewResult = useInView(ref, { 
    once, 
    margin: inViewMargin,
    amount: threshold
  });
  
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -adjustedSettings.offset : adjustedSettings.offset,
      opacity: 0,
      filter: `blur(${adjustedSettings.blur})`,
      scale: 0.95,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
      scale: 1,
    },
  };

  const combinedVariants = variant || defaultVariants;

  // If reduced motion is preferred, show without animation
  if (shouldReduceMotion) {
    return (
      <motion.div ref={ref} className={className} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.05 + delay,
          duration: adjustedSettings.duration,
          ease: adjustedSettings.ease,
          type: performanceMode === 'performance' ? "tween" : "spring",
          stiffness: performanceMode === 'performance' ? undefined : 120,
          damping: performanceMode === 'performance' ? undefined : 20,
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Export both components for backward compatibility
export { BlurFade } from "./blur-fade";
export default EnhancedBlurFade;