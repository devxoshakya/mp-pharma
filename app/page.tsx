import FaqAndContact from "@/components/shared/contact/ContactFAQ";
import ProductsTab from "@/components/shared/products/ProductTab";
import Testimonials from "@/components/shared/testimonials/Testimonials";
import React from "react";
import CategoryCards from "@/components/hero/CategoriesCards";
import Clients from "@/components/hero/ClientsSection";
import { ImageGrid } from "@/components/hero/ImageShowcase";
import HeroGeometric from "@/components/hero/AnimatedHero";
import CarouselHero from "@/components/hero/CarouselHero";
import GoogleReviews from "@/components/shared/testimonials/GoogleTestimonials";

const page = async () => {
  return (
    <div className="mx-auto md:max-w-7xl sm:max-w-4xl max-w-[385px] px-4 z-10">
      {/* <ImageGrid/> */}
      <HeroGeometric/>
      <CarouselHero/>
      <CategoryCards />
      <Clients />
      <ProductsTab />
      <GoogleReviews/>
      {/* <Testimonials /> */}
      <FaqAndContact />
    </div>
  );
};

export default page;
