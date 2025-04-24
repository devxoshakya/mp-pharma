import { AnimatedBeamMultipleOutputDemo } from '@/components/hero/AnimatedCustomerDemo'
import Ticker from '@/components/hero/Ticker'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import React from 'react'

const AnimatedTicker = () => {
  return (
    <div className='text-center md:pt-32 py-8  w-full mx-auto px-4 bg-[url("/bg-5.png")] bg-no-repeat'
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("/bg-5.png")'}}
    >
      <h1 className="text-4xl font-semibold md:text-6xl mx-auto">
        <LineShadowText className="italic text-emerald-900" shadowColor={"black"}>
          Expertly Made. Perfectly Yours.
        </LineShadowText>
      </h1>
        <div className="mx-auto flex flex-col md:flex-row-reverse  items-center justify-center text-center ">

      <AnimatedBeamMultipleOutputDemo/>
      <Ticker/>
        </div>
    </div>
  )
}

export default AnimatedTicker;
