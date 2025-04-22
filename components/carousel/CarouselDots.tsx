import React from 'react';

interface CarouselDotsProps {
  slides: number;
  activeIndex: number;
  onClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ slides, activeIndex, onClick }) => {
  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 border ${
            activeIndex === index
              ? 'bg-black border-black'
              : 'bg-transparent border-black hover:bg-black/20'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;