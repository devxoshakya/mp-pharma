"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import { useCarousel } from './useCarousel';

interface SlideImage {
  desktop: string;
  mobile: string;
  alt: string;
}

interface CarouselProps {
  slides: SlideImage[];
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  slides, 
  autoSlideInterval = 5000 
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { 
    activeIndex, 
    goToSlide, 
    nextSlide, 
    prevSlide,
    pauseSlider,
    resumeSlider
  } = useCarousel({ 
    slidesCount: slides.length,
    autoSlideInterval
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div 
      className="relative w-[99.5vw] mt-4 -mx-[calc(50vw-50%)] group"
      style={{ 
        maxWidth: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)'
      }}
      ref={carouselRef}
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      <div className="relative md:h-120 h-36 overflow-hidden">
        {slides.map((slide, index) => (
          <CarouselItem key={index} isActive={activeIndex === index}>
            <img
              src={isMobile ? slide.mobile : slide.desktop}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors p-2 opacity-0 group-hover:opacity-100 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors p-2 opacity-0 group-hover:opacity-100 z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>
      
      <div className="py-4">
        <CarouselDots
          slides={slides.length}
          activeIndex={activeIndex}
          onClick={goToSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;