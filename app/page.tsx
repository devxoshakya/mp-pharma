
import Hero from '@/components/hero/HeroSection'
import FaqAndContact from '@/components/shared/contact/ContactFAQ'
import ProductsTab from '@/components/shared/products/ProductTab'
import Testimonials from '@/components/shared/testimonials/Testimonials'
import React from 'react'
import Image from 'next/image'

const page = async () => {
  
  
  return (
    <div className="mx-auto">
      <Hero/>
      <div className="flex items-center justify-center flex-col">
      <div  className="relative z-20 mr-4 flex items-center space-x-2 px-0 my-1 py-1 text-sm font-normal text-black group">
      <Image 
      src="/logo.svg" 
      alt="logo" 
      width={30} 
      height={30} 
      className="transition-transform duration-1000 group-hover:animate-spin" 
      style={{ animationDuration: '0.75s' }} 
      />
      <span className="font-semibold text-black dark:text-white">MP Pharmaceuticals'</span>
    </div>
    <div className="font-medium text-3xl mb-8">
      Featured Products
    </div>
      </div>
      <ProductsTab/>
      <Testimonials />
      <FaqAndContact/>
    </div>
  )
}

export default page
