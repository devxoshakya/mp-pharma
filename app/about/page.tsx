import { AnimatedBeamMultipleOutputDemo } from '@/components/hero/AnimatedCustomerDemo'
import Ticker from '@/components/hero/Ticker'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { BlurFade } from '@/components/magicui/blur-fade'
import React from 'react'
import FeaturedCards from '@/components/cards/featured-cards'
import ImageComp from '@/components/about/Logo3D'
import Hero from '@/components/about/HeroAbout'
import { HeroParallaxDemo } from '@/components/about/Parallax'
import { MPPharmaBentoGrid } from '@/components/about/Bento'
import { CarouselAbout } from '@/components/about/Carousel'
import HeroVideoDialogDemo from '@/components/about/Video'
import FaqAndContact from '@/components/shared/contact/ContactFAQ'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MP Pharmaceuticals - Leading Healthcare Manufacturing Company",
  description: "Learn about MP Pharmaceuticals' commitment to quality healthcare manufacturing, our history, mission, and dedication to improving lives through innovative pharmaceutical solutions.",
  keywords: [
    "about MP Pharmaceuticals",
    "pharmaceutical company history",
    "healthcare manufacturing",
    "pharmaceutical innovation",
    "quality assurance",
    "medical manufacturing expertise",
    "pharmaceutical development",
    "healthcare solutions provider"
  ],
  openGraph: {
    title: "About MP Pharmaceuticals - Leading Healthcare Manufacturing",
    description: "Discover our story, mission, and commitment to quality pharmaceutical manufacturing and healthcare innovation.",
    url: "https://www.mppharmaceuticals.com/about",
    siteName: "MP Pharmaceuticals",
    images: [
      {
        url: "https://www.mppharmaceuticals.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About MP Pharmaceuticals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MP Pharmaceuticals - Leading Healthcare Manufacturing",
    description: "Discover our story, mission, and commitment to quality pharmaceutical manufacturing and healthcare innovation.",
    images: ["https://www.mppharmaceuticals.com/images/about-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.mppharmaceuticals.com/about",
  },
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-4mx-auto ">
      <Hero/>
      <HeroParallaxDemo/>
      <HeroVideoDialogDemo/>
      <MPPharmaBentoGrid/>
      <CarouselAbout/>
      <FaqAndContact/>
     {/* <FeaturedCards/> */}
     {/* <ImageComp/> */}
    </div>
  )
}

export default AboutPage
