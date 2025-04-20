"use client";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion"; 
import * as React from "react";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  ...props
}: LineShadowTextProps) {
  const content = typeof children === "string" ? children : null;

  if (!content) {
    console.warn("LineShadowText requires string children.");
    return null;
  }

  return (
    <motion.span
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-block", // Changed from inline-flex to inline-block for better text handling
        "after:absolute after:inset-0 after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className
      )}
      data-text={content}
      {...props}
    >
      {content}
    </motion.span>
  );
}
