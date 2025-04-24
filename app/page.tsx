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
import Carousel from "@/components/carousel/Carousel";
import { carouselSlides } from "@/db/carouselData";
import FeaturedCards from "@/components/cards/featured-cards";

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
      <BlurFade key="carousel-hero" delay={0.3} inView>
        <Carousel slides={carouselSlides} autoSlideInterval={4000} />
      </BlurFade>

      <BlurFade key="logo-carousel" delay={0.25} inView>
          <CategoryCards />
      </BlurFade>

      {/* Fixed the width constraint that was causing overflow */}
      <div className="mx-auto w-full px-4 md:px-8 z-10 overflow-hidden">
        <BlurFade key="animated-ticker" delay={0.35} inView>
        <LogoCarousel logos={demoLogos} columns={5} />
        </BlurFade>

        <BlurFade key="category-cards" delay={0.4} inView>
          <AnimatedTicker />
        </BlurFade>

        <BlurFade key="clients-section" delay={0.45} inView>
          <Clients />
        </BlurFade>

        <BlurFade key="products-tab" delay={0.5} inView>
          <ProductsTab />
        </BlurFade>

        <BlurFade key="google-reviews" delay={0.55} inView>
          <GoogleReviews />
        </BlurFade>

        <BlurFade key="process-section" delay={0.6} inView>
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
