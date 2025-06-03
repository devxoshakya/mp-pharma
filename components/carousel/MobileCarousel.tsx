"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CarouselItem from "./CarouselItem";
import CarouselDots from "./CarouselDots";
import { useCarousel } from "./useCarousel";

interface SlideImage {
  desktop: string;
  mobile: string;
  alt: string;
}

interface MobileCarouselProps {
  slides: SlideImage[];
  autoSlideInterval?: number;
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({
  slides,
  autoSlideInterval = 5000,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  const {
    activeIndex,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseSlider,
    resumeSlider,
  } = useCarousel({
    slidesCount: slides.length,
    autoSlideInterval,
  });

  // Function to handle image load and set height based on aspect ratio for mobile
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    // Get exact viewport width for mobile
    const viewportWidth = window.innerWidth;
    const exactHeight = Math.round(viewportWidth * aspectRatio);
    setImageHeight(exactHeight);
  };

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full group mt-4"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: imageHeight ? `${imageHeight}px` : "auto",
          minHeight: imageHeight ? undefined : "250px",
        }}
      >
        {slides.map((slide, index) => (
          <CarouselItem key={index} isActive={activeIndex === index}>
            <Image
              src={slide.mobile}
              alt={slide.alt}
              height={500}
              width={1600}
              fill
              className="object-contain w-full h-full"
              sizes="100vw"
              priority={index === 0}
              onLoad={index === activeIndex ? handleImageLoad : undefined}
              style={{ objectPosition: "center", objectFit: "contain" }}
            />
          </CarouselItem>
        ))}
      </div>

      <div className="py-2">
        <CarouselDots
          slides={slides.length}
          activeIndex={activeIndex}
          onClick={goToSlide}
        />
      </div>
    </div>
  );
};

export default MobileCarousel;
