import { AnimatedBeamMultipleOutputDemo } from '@/components/hero/AnimatedCustomerDemo'
import Ticker from '@/components/hero/Ticker'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { BlurFade } from '@/components/magicui/blur-fade'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='text-center md:py-16 py-0 max-w-7xl mx-auto px-4'>
      <BlurFade key="about-title" delay={0.25} inView>
        <h1 className="text-5xl font-semibold md:text-6xl mx-auto">
          <LineShadowText className="italic" shadowColor={"black"}>
            Expertly Made. Perfectly Yours.
          </LineShadowText>
        </h1>
      </BlurFade>
      <div className="mx-auto flex flex-col md:flex-row-reverse items-center justify-center text-center ">
        <BlurFade key="animated-beam" delay={0.3} inView>
          <AnimatedBeamMultipleOutputDemo/>
        </BlurFade>
        <BlurFade key="ticker" delay={0.35} inView>
          <Ticker/>
        </BlurFade>
      </div>
    </div>
  )
}

export default AboutPage
