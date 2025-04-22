import { useState, useEffect, useCallback } from 'react';

interface UseCarouselProps {
  slidesCount: number;
  autoSlideInterval?: number;
}

export const useCarousel = ({ slidesCount, autoSlideInterval = 5000 }: UseCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = slidesCount - 1;
    } else if (newIndex >= slidesCount) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }, [slidesCount]);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const pauseSlider = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeSlider = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isPaused || !autoSlideInterval) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide, isPaused, autoSlideInterval]);

  return {
    activeIndex,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseSlider,
    resumeSlider,
  };
};