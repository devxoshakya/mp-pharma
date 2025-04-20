import React from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'

const Ticker = () => {
  return (
    <div className="w-full py-0 px-4 md:px-6 lg:px-8">
      <div className="italic mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {/* Years of Experience */}
          <div className="flex  flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-gray-900">
              <NumberTicker 
                value={20} 
                className=''
                
              />+
            </div>
            <p className="mt-2 text-lg text-gray-600 font-medium">Years of Experience</p>
          </div>

          {/* Products Delivered */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-gray-900">
              <NumberTicker 
                value={12500} 
               
              />+
            </div>
            <p className="mt-2 text-lg text-gray-600 font-medium">Products Delivered</p>
          </div>

          {/* Satisfied Customers */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xl md:text-4xl font-bold text-gray-900">
              <NumberTicker 
                value={5000} 
                
              />+
            </div>
            <p className="mt-2 text-lg text-gray-600 font-medium">Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticker
