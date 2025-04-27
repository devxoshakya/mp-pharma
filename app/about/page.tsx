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

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Hero/>
      <HeroParallaxDemo/>
      <MPPharmaBentoGrid/>
      <CarouselAbout/>
      <HeroVideoDialogDemo/>
     {/* <FeaturedCards/> */}
     {/* <ImageComp/> */}
    </div>
  )
}

export default AboutPage
