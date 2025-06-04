import React from 'react';
import  ProductCard  from '@/components/cards/hero-card';
import type { ProductType } from '@/types/product';
import { products as allProducts } from '@/db/Universe';

type SortOption = 'name-asc' | 'name-desc' | 'none';

interface FeaturedProductsProps {
  quantity?: number;
  filter?: string;
  sortBy?: SortOption;
  productsData?: any[]; // Optional override for products data
}

export default function FeaturedProducts({ 
  quantity = 8, 
  filter = '', 
  sortBy = 'none',
  productsData = allProducts 
}: FeaturedProductsProps) {
  
  // First apply filtering if filter is provided
  const filteredProducts = filter 
    ? productsData.filter(product => 
        product.image && (
          product.type && Array.isArray(product.type) && product.type.includes(filter)
        )
      )
    : productsData.filter(product => product.image !== null);

  // Then apply sorting if specified
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0; // No sorting (keep original order)
  });

  // Finally limit by quantity
  const limitedProducts = sortedProducts.slice(0, quantity);

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {limitedProducts.length > 0 ? (
          limitedProducts.map((product) => (
            <ProductCard
              key={`product-${Math.random().toString(36).substring(2, 9)}`}
              category={product.category}
              name={product.name}
              image={product.image}
              quantity={product.quantity}
              ingredients={product.ingredients}
            />
          ))
        ) : (
          <div className="col-span-2 md:col-span-4 text-center py-10">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}