"use client";
import React from "react";
import { HeroParallax } from "@/components/blocks/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Product1",
    link: "https://mp-pharma.verecl.app", 
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/Rice%20&%20Radiance%20face%20Serum%20mp.jpg?raw=true",
  },
  {
    title: "Product2",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/grape%20seed%20skin%20tightening%20face%20serum.jpg?raw=true",
  },
  {
    title: "Product3",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/matcha%20tea%20body%20lotion%20for%20mp.jpg?raw=true",
  },

  {
    title: "Product4",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/matcha%20tea%20body%20wash%20for%20mp.jpg?raw=true",
  },
  {
    title: "Product5",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/tea%20tree%20face%20cleanser%20mp.jpg?raw=true",
  },
  {
    title: "Product6",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/vitamin%20c%20and%20glutathion%20body%20lotion%20mp.jpg?raw=true",
  },

  {
    title: "Product7",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/vitamin%20c%20and%20glutathion%20face%20cream%20mp.jpg?raw=true",
  },
  {
    title: "Product8",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/vitamin%20c%20and%20glutathion%20face%20serum%20mp.jpg?raw=true",
  },
  {
    title: "Product9",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/vitamin%20c%20and%20glutathion%20face%20wash%20mp.jpg?raw=true",
  },
  {
    title: "Product10",
    link: "https://mp-pharma.verecl.app",
    thumbnail:
      "https://cdn2.devshakya.xyz/assets/matcha%20tea%20face%20wash%20for%20mp.jpg?raw=true",
  },
  
];
