"use client";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProductCard({
  image,
  category,
  name,
  ingredients,
  quantity,
}: any) {
  // Extract product data

  const gradients = [
    "from-orange-400 to-yellow-300", // orange-yellow
    "from-blue-500 to-pink-400", // blue-pink
    "from-blue-400 to-purple-300", // blue-lavender
    "from-pink-300 to-red-200", // peach-pink
    "from-green-400 to-yellow-300", // parrot green-yellow
    "from-purple-500 to-pink-300", // purple-pink
    "from-cyan-400 to-blue-300", // cyan-blue
    "from-rose-400 to-orange-300", // rose-orange
    "from-emerald-400 to-teal-300", // emerald-teal
    "from-fuchsia-500 to-purple-400", // fuchsia-purple
  ];

  // Parse quantity sizes
  const sizes = parseQuantitySizes(quantity);
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.value || "");

  const randomGradient = useMemo(() => {
    // Use the product name as a deterministic way to select a gradient
    // This ensures the same product always gets the same gradient
    const index = name.length % gradients.length;
    return gradients[index];
  }, [name]);


  // Function to parse quantity string into size options
  function parseQuantitySizes(quantityStr: string) {
    // Check if it's a range (contains "TO")
    if (quantityStr.includes("TO")) {
      const [min, maxWithUnit] = quantityStr.split("TO").map((s) => s.trim());
      // Extract unit from the max value (e.g. "100 GM" -> "GM")
      const unit = maxWithUnit.replace(/[0-9]/g, "").trim();
      // Extract numeric value from max
      const max = maxWithUnit.replace(/[^0-9]/g, "").trim();
      // Extract numeric value from min
      const minValue = min.replace(/[^0-9]/g, "").trim();

      return [
        { value: minValue + unit, label: minValue + " " + unit },
        { value: max + unit, label: max + " " + unit },
      ];
    } else {
      // Single value
      return [{ value: quantityStr, label: quantityStr }];
    }
  }

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
      {/* Product Image with Bestseller Badge */}
      <div className={`relative bg-gradient-to-r bg-[length:900px_900px] p-4 flex justify-center`}
      style={{
        backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)), url("/bg-leaf.png")',
      }}
      >
        <Badge className="absolute top-2 left-2 bg-orange-500 text-white font-bold">
          BESTSELLER ⭐
        </Badge>
        <Image
          src={image}
          alt={name}
          className="h-64 object-contain hover:scale-110 transition-transform duration-300"
          width={250}
          height={250}
          priority
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <h2 className="font-bold text-lg text-left">{name}</h2>
        <div className="text-xs text-left text-gray-500 mb-3">{category}</div>

        {/* Size Selection */}
        {sizes.length > 1 && (
          <div className="mt-2 text-xs md:text-sm">
            <div className="flex space-x-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size.value)}
                  className={`px-3 py-1 rounded-md border ${
                    selectedSize === size.value
                      ? "bg-emerald-600 text-white border-transparent"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Display single size if only one exists */}
        {sizes.length === 1 && (
          <div className="mt-2 text-sm">
            <span className="inline-block bg-gray-100 px-2 py-1 rounded">
              {sizes[0].label}
            </span>
          </div>
        )}

        {/* Ingredients Section with Hidden Scrollbar */}
        <div className="mt-4 text-left">
          <h3 className="font-semibold mb-2">Ingredients:</h3>
          <div
            className="h-24 overflow-y-auto pr-2 text-xs text-gray-600"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <p>{ingredients}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 grid grid-cols-2 gap-2">
        <Button variant="outline">Call Now</Button>
        <Button className="bg-emerald-950 hover:bg-emerald-900 text-white">
          Get Quote
        </Button>
      </div>
    </div>
  );
}
