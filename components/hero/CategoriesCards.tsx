"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

type CategoryCard = {
  id: string;
  title: string;
  image: string;
  url: string;
};

const categories: CategoryCard[] = [
  {
    id: "face-care",
    title: "Face Care",
    image: "/category/derma.png",
    url: "/products?q=1",
  },
  {
    id: "body-care",
    title: "Body Care",
    image: "/category/personal.png",
    url: "/products?q=2",
  },
  {
    id: "hair-care",
    title: "Hair Care",
    image: "/category/personal.png",
    url: "/products?q=3",
  },
  {
    id: "baby-care",
    title: "Baby Care",
    image: "/category/baby.png",
    url: "/products?q=4",
  },
  {
    id: "men-care",
    title: "Men's Care",
    image: "/category/men.png",
    url: "/products?q=5",
  },
  {
    id: "essential-oils",
    title: "Essential Oils",
    image: "/category/oil.png",
    url: "/products?q=6",
  },
  {
    id: "scrubs-serums",
    title: "Scrubs & Serums",
    image: "/category/color.png",
    url: "/products?q=7",
  },
  {
    id: "specialized",
    title: "Specialized",
    image: "/category/nutra.png",
    url: "/products?q=8",
  },
];

export default function CategoryCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-[url('/bg-2.png')] bg-repeat bg-[length:220px_220px] " >
    <div>
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Manufacturing amazing products at <Cover>warp speed</Cover>
      </h2>
    </div>
      {" "}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              href={category.url}
              key={category.id}
              className="block"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  hoveredCard === category.id
                    ? "shadow-xl"
                    : "shadow-none border-1 border-black backdrop-blur-2xl"
                }`}
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} products category image`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === category.id ? "scale-110" : "scale-100"
                    }`}
                    priority={categories.indexOf(category) < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white text-center text-lg font-medium rounded-lg">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
