import FaqAndContact from "@/components/shared/contact/ContactFAQ";
import ProductsTab from "@/components/shared/products/ProductTab";
import React from "react";
import CategoryCards from "@/components/hero/CategoriesCards";
import Clients from "@/components/hero/ClientsSection";
import CarouselHero from "@/components/hero/CarouselHero";
import GoogleReviews from "@/components/shared/testimonials/GoogleTestimonials";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ProcessSection } from "@/components/shared/home/ProcessSection";
import AnimatedTicker from "@/components/hero/AnimatedTicker";
import { BlurFade } from "@/components/magicui/blur-fade";

const page = async () => {
  const demoLogos = [
    {
      id: 1,
      name: "Dub",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-3.png",
    },
    {
      id: 2,
      name: "Supabase",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-2.png",
    },
    {
      id: 2,
      name: "Supabase",
      src: "https://www.amenterprises.co/wp-content/uploads/2024/10/cruelty.png",
    },
    {
      id: 3,
      name: "Vercel",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-11.png",
    },
    {
      id: 4,
      name: "Resend",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-10.png",
    },
    {
      id: 5,
      name: "Shadcn",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-9.png",
    },
    {
      id: 1,
      name: "Dub",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-8.png",
    },
    {
      id: 2,
      name: "Supabase",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-7.png",
    },
    {
      id: 4,
      name: "Resend",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-5.png",
    },
    {
      id: 5,
      name: "Shadcn",
      src: "https://www.amenterprises.co/wp-content/uploads/2023/07/Artboard-4.png",
    },
  ];

  return (
    <>
      <div className="mx-auto md:max-w-7xl sm:max-w-4xl max-w-[385px] px-1 z-10">
        {/* <ImageGrid/> */}
        <BlurFade key="logo-carousel" delay={0.25} inView>
          <LogoCarousel logos={demoLogos} columns={5} />
        </BlurFade>
        
        <BlurFade key="carousel-hero" delay={0.30} inView>
          <CarouselHero />
        </BlurFade>
        
        {/* <HeroGeometric/> */}
        <BlurFade key="animated-ticker" delay={0.35} inView>
          <AnimatedTicker />
        </BlurFade>
        
        <BlurFade key="category-cards" delay={0.40} inView>
          <CategoryCards />
        </BlurFade>
        
        <BlurFade key="clients-section" delay={0.45} inView>
          <Clients />
        </BlurFade>
        
        <BlurFade key="products-tab" delay={0.50} inView>
          <ProductsTab />
        </BlurFade>
        
        <BlurFade key="google-reviews" delay={0.55} inView>
          <GoogleReviews />
        </BlurFade>
        
        <BlurFade key="process-section" delay={0.60} inView>
          <ProcessSection />
        </BlurFade>
        
        {/* <Testimonials /> */}
        <BlurFade key="faq-contact" delay={0.65} inView>
          <FaqAndContact />
        </BlurFade>
      </div>
    </>
  );
};

export default page;
