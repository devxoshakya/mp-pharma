import React from "react";
import FeaturedProducts from "./FeaturedProducts";

interface ProductShowcaseProps {
  quantity?: number;
  filter?: string;
  sortBy?: "name-asc" | "name-desc" | "none";
}

export default function ProductShowcase({
  quantity = 8,
  filter = "",
  sortBy = "name-asc",
}: ProductShowcaseProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <FeaturedProducts quantity={quantity} filter={filter} sortBy={sortBy} />
    </section>
  );
}
