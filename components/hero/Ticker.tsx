import React from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'

const Ticker = () => {
  return (
    <div className="w-full my-8 items-center justify-around flex h-24 md:h-36 py-0 px-4 md:px-6 lg:px-8 bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
      
        
          {/* Years of Experience */}
          <div className="flex  flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-white">
              <NumberTicker 
                value={20} 
                className=''
                
              />+
            </div>
            <p className="mt-2 md:text-lg text-xs text-white font-medium">Years of Experience</p>
          </div>

          {/* Products Delivered */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-white">
              <NumberTicker 
                value={12500} 
               
              />+
            </div>
            <p className="mt-2 md:text-lg text-xs text-white font-medium">Products Delivered</p>
          </div>

          {/* Satisfied Customers */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-white">
              <NumberTicker 
                value={5000} 
                
              />+
            </div>
            <p className="mt-2 md:text-lg text-xs text-white font-medium">Satisfied Customers</p>
          </div>
        
    </div>
  )
}

export default Ticker
