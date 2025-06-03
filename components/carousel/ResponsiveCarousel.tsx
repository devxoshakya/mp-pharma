"use client";

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import MobileCarousel from './MobileCarousel';
import Loading from '@/app/loading';

interface SlideImage {
  desktop: string;
  mobile: string;
  alt: string;
}

interface ResponsiveCarouselProps {
  slides: SlideImage[];
  autoSlideInterval?: number;
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({ 
  slides, 
  autoSlideInterval = 5000 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div className="relative w-full h-40">
        <Loading/>
      </div>
    );
  }

  return isMobile ? (
    <MobileCarousel slides={slides}  autoSlideInterval={autoSlideInterval} />
  ) : (
    <Carousel slides={slides} autoSlideInterval={autoSlideInterval} />
  );
};

export default ResponsiveCarousel;
