'use client'; // Add this for Next.js client components

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CarouselProps {
    images: string[];
    autoPlayInterval?: number;
}

export const Carousel = ({ images, autoPlayInterval = 5000 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isGrabbing, setIsGrabbing] = useState(false);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((current) => (current + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((current) => (current - 1 + images.length) % images.length);
    }, [images.length]);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [nextSlide, autoPlayInterval]);

    // Touch events handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsGrabbing(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        setIsGrabbing(false);
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

    // Mouse events for cursor change
    const onMouseDown = () => {
        setIsGrabbing(true);
    };

    const onMouseUp = () => {
        setIsGrabbing(false);
    };

    const onMouseLeave = () => {
        setIsGrabbing(false);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.85,
            filter: "blur(8px)"
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                x: { type: "spring", stiffness: 200, damping: 25, duration: 1.5 },
                opacity: { duration: 1.2 },
                scale: { duration: 1.5, ease: "easeOut" },
                filter: { duration: 1.2 }
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.85,
            filter: "blur(8px)",
            transition: {
                x: { type: "spring", stiffness: 200, damping: 25, duration: 1.5 },
                opacity: { duration: 1 },
                scale: { duration: 1.2, ease: "easeIn" },
                filter: { duration: 1 }
            }
        })
    };

    return (
        <>
        <div className="relative w-full overflow-hidden">
            <div
                className={cn(
                    "relative h-48  sm:h-80 md:h-[60vh]",
                    isGrabbing ? "cursor-grabbing" : "cursor-grab"
                )}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
            >
                <AnimatePresence initial={false} custom={direction} mode="sync">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 96vw"
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <motion.button
                whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    transition: { duration: 0.6, ease: "easeOut" }
                }}
                whileTap={{ 
                    scale: 0.9,
                    transition: { duration: 0.4 } 
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                        type: "spring", 
                        stiffness: 60, 
                        damping: 12,
                        duration: 1.2
                    }
                }}
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition-all duration-500 shadow-md backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>
            <motion.button
                whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    transition: { duration: 0.6, ease: "easeOut" }
                }}
                whileTap={{ 
                    scale: 0.9,
                    transition: { duration: 0.4 } 
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                        type: "spring", 
                        stiffness: 60, 
                        damping: 12,
                        duration: 1.2
                    }
                }}
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 transition-all duration-500 shadow-md backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>

            {/* Indicators */}
            
        </div>
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                    delay: 0.3,
                    duration: 0.5
                }
            }}
            className="absolute mt-2 left-1/2 -translate-x-1/2 flex gap-2 pb-16"
        >
                {images.map((_, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ 
                            scale: 1.3,
                            transition: { duration: 0.8, ease: "easeOut" } 
                        }}
                        whileTap={{ 
                            scale: 0.85,
                            transition: { duration: 0.6 } 
                        }}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={cn(
                            "transition-all duration-500",
                            index === currentIndex 
                                ? "text-green-600 font-bold " 
                                : "text-gray-400 hover:text-gray-600"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentIndex ? (
                            <motion.div
                                initial={{ scale: 0.7, rotate: -15 }}
                                animate={{ 
                                    scale: 1, 
                                    rotate: 0,
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 8,
                                        duration: 1.5
                                    }
                                }}
                            >
                                <Leaf className="w-4 h-auto pb-4 mt-[-4]" />
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ scale: 0.6 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    type: "spring", 
                                    damping: 8, 
                                    duration: 1.2,
                                    ease: "easeOut" 
                                }}
                                className="w-2 h-2 rounded-full bg-current"
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};