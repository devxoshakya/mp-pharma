"use client";
import React from "react";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export const Spinner = ({ size = 5, color = "#000000" }: SpinnerProps) => {
  return (
    <div className="flex items-center gap-2 justify-center w-full  h-[96vh]">
      <Loader2 
        size="20"
        color={color} 
        className="animate-spin duration-700 ease-in-out" 
      />
      loading...
    </div>
  );
};
