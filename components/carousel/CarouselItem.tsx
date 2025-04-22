import React from 'react';

interface CarouselItemProps {
  children: React.ReactNode;
  isActive: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      {children}
    </div>
  );
};

export default CarouselItem;