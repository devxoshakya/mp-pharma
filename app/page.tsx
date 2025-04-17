import FaqAndContact from "@/components/shared/contact/ContactFAQ";
import ProductsTab from "@/components/shared/products/ProductTab";
import Testimonials from "@/components/shared/testimonials/Testimonials";
import React from "react";
import CategoryCards from "@/components/hero/CategoriesCards";
import Clients from "@/components/hero/ClientsSection";

const page = async () => {
  return (
    <div className="mx-auto md:max-w-7xl sm:max-w-4xl max-w-[385px] px-4 py-8 z-10">
      <CategoryCards />
      <Clients />
      <ProductsTab />
      <Testimonials />
      <FaqAndContact />
    </div>
  );
};

export default page;
