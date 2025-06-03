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
import { WorldMapHero } from "@/components/shared/home/WorldMap";
import Ticker from "@/components/hero/Ticker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MP Pharmaceuticals - Leading Healthcare Solutions & Medicine Manufacturing",
  description: "Discover MP Pharmaceuticals' comprehensive range of high-quality medicines, healthcare solutions, and pharmaceutical products. Leading manufacturer committed to quality and innovation in healthcare.",
  keywords: [
    "pharmaceutical manufacturing",
    "quality medicines",
    "healthcare solutions",
    "medical products",
    "pharmaceutical company India",
    "medicine supplier",
    "healthcare innovation",
    "pharmaceutical products",
    "medical manufacturing",
    "healthcare technology"
  ],
  openGraph: {
    title: "MP Pharmaceuticals - Leading Healthcare Solutions",
    description: "Comprehensive range of high-quality medicines and healthcare solutions from a leading pharmaceutical manufacturer.",
    url: "https://www.mppharmaceuticals.com",
    siteName: "MP Pharmaceuticals",
    images: [
      {
        url: "https://www.mppharmaceuticals.com/images/homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "MP Pharmaceuticals Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MP Pharmaceuticals - Leading Healthcare Solutions",
    description: "Comprehensive range of high-quality medicines and healthcare solutions from a leading pharmaceutical manufacturer.",
    images: ["https://www.mppharmaceuticals.com/images/homepage-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.mppharmaceuticals.com",
  },
};

// Organization Schema for the homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MP Pharmaceuticals",
  "url": "https://www.mppharmaceuticals.com",
  "logo": "https://www.mppharmaceuticals.com/logo.svg",
  "description": "Leading pharmaceutical manufacturing company providing high-quality, affordable medicines and healthcare solutions worldwide.",
  "foundingDate": "2000", // Replace with actual founding date
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address", // Replace with actual address
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your Postal Code",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8687868783",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/mppharmaceuticals",
    "https://www.linkedin.com/company/mppharmaceuticals",
    "https://twitter.com/mppharmaceuticals"
  ],
  "industry": "Pharmaceutical Manufacturing",
  "numberOfEmployees": "100-500", // Replace with actual range
  "services": [
    "Pharmaceutical Manufacturing",
    "Medicine Development",
    "Healthcare Solutions",
    "Quality Assurance",
    "Medical Research"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MP Pharmaceuticals",
  "url": "https://www.mppharmaceuticals.com",
  "description": "Leading pharmaceutical manufacturing company providing high-quality medicines and healthcare solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "MP Pharmaceuticals"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.mppharmaceuticals.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

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
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
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
          <Ticker />
        </BlurFade>

        <WorldMapHero />

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
