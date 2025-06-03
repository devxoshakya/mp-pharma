"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
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
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  
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

  // Function to handle image load and set height based on aspect ratio for desktop
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    const containerWidth = carouselRef.current?.offsetWidth || window.innerWidth;
    const calculatedHeight = containerWidth * aspectRatio;
    const maxHeight = window.innerHeight * 0.8;
    const finalHeight = Math.min(calculatedHeight, maxHeight);
    setImageHeight(Math.round(finalHeight));
  };

  return (
    <div 
      className="relative w-full group mt-4"
      ref={carouselRef}
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      <div 
        className="relative w-full overflow-hidden"
        style={{ 
          height: imageHeight ? `${imageHeight}px` : 'auto',
          minHeight: imageHeight ? undefined : '400px'
        }}
      >
        {slides.map((slide, index) => (
          <CarouselItem key={index} isActive={activeIndex === index}>
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              className="object-contain w-full h-full"
              sizes="100vw"
              priority={index === 0}
              onLoad={index === activeIndex ? handleImageLoad : undefined}
              style={{ objectPosition: 'center', objectFit: 'contain' }}
            />
          </CarouselItem>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 z-20 bg-black/20 rounded-full backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 opacity-0 group-hover:opacity-100 z-20 bg-black/20 rounded-full backdrop-blur-sm"
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