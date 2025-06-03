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
    title: "Moonbeam",
    link: "https://gomoonbeam.com", 
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/Rice%20&%20Radiance%20face%20Serum%20mp.jpg?raw=true",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/grape%20seed%20skin%20tightening%20face%20serum.jpg?raw=true",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/matcha%20tea%20body%20lotion%20for%20mp.jpg?raw=true",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/matcha%20tea%20body%20wash%20for%20mp.jpg?raw=true",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/tea%20tree%20face%20cleanser%20mp.jpg?raw=true",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/vitamin%20c%20and%20glutathion%20body%20lotion%20mp.jpg?raw=true",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/vitamin%20c%20and%20glutathion%20face%20cream%20mp.jpg?raw=true",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/vitamin%20c%20and%20glutathion%20face%20serum%20mp.jpg?raw=true",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/vitamin%20c%20and%20glutathion%20face%20wash%20mp.jpg?raw=true",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://github.com/devxoshakya/mp-pharma/blob/main/public/images/matcha%20tea%20face%20wash%20for%20mp.jpg?raw=true",
  },
  
];
