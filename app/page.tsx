import FaqAndContact from "@/components/shared/contact/ContactFAQ";
import ProductsTab from "@/components/shared/products/ProductTab";
import React from "react";
import CategoryCards from "@/components/hero/CategoriesCards";
import Clients from "@/components/hero/ClientsSection";
import HeroGeometric from "@/components/hero/AnimatedHero";
import CarouselHero from "@/components/hero/CarouselHero";
import GoogleReviews from "@/components/shared/testimonials/GoogleTestimonials";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ProcessSection } from "@/components/shared/home/ProcessSection";
import { BusinessChatbot } from "@/components/shared/chat/ChatIcon";

const page = async () => {
    const demoLogos = [
          { id: 1, name: "Dub", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-3.png" },
          { id: 2, name: "Supabase", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-2.png" },
          { id: 2, name: "Supabase", src: "https://www.amenterprises.co/wp-content/uploads/2024/10/cruelty.png" },
          { id: 3, name: "Vercel", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-11.png" },
          { id: 4, name: "Resend", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-10.png" },
          { id: 5, name: "Shadcn", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-9.png" },
          { id: 1, name: "Dub", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-8.png" },
          { id: 2, name: "Supabase", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-7.png" },
          { id: 4, name: "Resend", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-5.png" },
          { id: 5, name: "Shadcn", src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-4.png" },
        ];

  return (
    <div className="mx-auto md:max-w-7xl sm:max-w-4xl max-w-[385px] px-4 z-10">
      {/* <ImageGrid/> */}
      <HeroGeometric/>
      <CarouselHero/>
      <LogoCarousel logos={demoLogos} columns={5} />
      <CategoryCards />
      <Clients />
      <ProductsTab />
      <GoogleReviews/>
      <ProcessSection/>
      {/* <Testimonials /> */}
      <FaqAndContact />
      {/* <BusinessChatbot/> */}
    </div>
  );
};

export default page;
