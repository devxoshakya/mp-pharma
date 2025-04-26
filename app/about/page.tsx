import { AnimatedBeamMultipleOutputDemo } from '@/components/hero/AnimatedCustomerDemo'
import Ticker from '@/components/hero/Ticker'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { BlurFade } from '@/components/magicui/blur-fade'
import React from 'react'
import FeaturedCards from '@/components/cards/featured-cards'
import ImageComp from '@/components/about/Logo3D'

const AboutPage = () => {
  return (
    <div className='text-center md:py-16 py-0 max-w-7xl mx-auto px-4'>
     <FeaturedCards/>
     <ImageComp/>
    </div>
  )
}

export default AboutPage
