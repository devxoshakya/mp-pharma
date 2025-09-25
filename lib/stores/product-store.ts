import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Product } from '@/types/product';

interface ProductState {
  // Product data
  products: Product[];
  featuredProducts: Product[];
  categories: string[];
  
  // Search and filtering
  searchQuery: string;
  selectedCategory: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price-asc' | 'price-desc' | 'newest' | 'popular';
  
  // Pagination
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  
  // Cart functionality
  cartItems: Array<{ product: Product; quantity: number }>;
  cartTotal: number;
  
  // Recently viewed
  recentlyViewed: Product[];
  
  // Loading states
  isLoadingProducts: boolean;
  isLoadingCategories: boolean;
  
  // Actions
  setProducts: (products: Product[]) => void;
  setFeaturedProducts: (products: Product[]) => void;
  setCategories: (categories: string[]) => void;
  setSearch: (query: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: ProductState['sortBy']) => void;
  setPage: (page: number) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToRecentlyViewed: (product: Product) => void;
  setLoadingProducts: (loading: boolean) => void;
  setLoadingCategories: (loading: boolean) => void;
  
  // Computed
  getFilteredProducts: () => Product[];
  getCartItemCount: () => number;
}

export const useProductStore = create<ProductState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        products: [],
        featuredProducts: [],
        categories: [],
        searchQuery: '',
        selectedCategory: '',
        priceRange: [0, 1000],
        sortBy: 'name',
        currentPage: 1,
        itemsPerPage: 12,
        totalItems: 0,
        cartItems: [],
        cartTotal: 0,
        recentlyViewed: [],
        isLoadingProducts: false,
        isLoadingCategories: false,
        
        // Actions
        setProducts: (products) => {
          set({
            products,
            totalItems: products.length
          }, false, 'setProducts');
        },
        
        setFeaturedProducts: (products) =>
          set({ featuredProducts: products }, false, 'setFeaturedProducts'),
          
        setCategories: (categories) =>
          set({ categories }, false, 'setCategories'),
          
        setSearch: (query) =>
          set({ searchQuery: query, currentPage: 1 }, false, 'setSearch'),
          
        setCategory: (category) =>
          set({ selectedCategory: category, currentPage: 1 }, false, 'setCategory'),
          
        setPriceRange: (range) =>
          set({ priceRange: range, currentPage: 1 }, false, 'setPriceRange'),
          
        setSortBy: (sort) =>
          set({ sortBy: sort, currentPage: 1 }, false, 'setSortBy'),
          
        setPage: (page) =>
          set({ currentPage: page }, false, 'setPage'),
          
        addToCart: (product, quantity = 1) => {
          const state = get();
          const existingItem = state.cartItems.find(item => item.product.id === product.id);
          
          let newCartItems;
          if (existingItem) {
            newCartItems = state.cartItems.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            newCartItems = [...state.cartItems, { product, quantity }];
          }
          
          const cartTotal = newCartItems.reduce(
            (total, item) => total + (item.product.price * item.quantity), 0
          );
          
          set({
            cartItems: newCartItems,
            cartTotal
          }, false, 'addToCart');
        },
        
        removeFromCart: (productId) => {
          const state = get();
          const newCartItems = state.cartItems.filter(item => item.product.id !== productId);
          const cartTotal = newCartItems.reduce(
            (total, item) => total + (item.product.price * item.quantity), 0
          );
          
          set({
            cartItems: newCartItems,
            cartTotal
          }, false, 'removeFromCart');
        },
        
        updateCartQuantity: (productId, quantity) => {
          if (quantity <= 0) {
            get().removeFromCart(productId);
            return;
          }
          
          const state = get();
          const newCartItems = state.cartItems.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          );
          
          const cartTotal = newCartItems.reduce(
            (total, item) => total + (item.product.price * item.quantity), 0
          );
          
          set({
            cartItems: newCartItems,
            cartTotal
          }, false, 'updateCartQuantity');
        },
        
        clearCart: () =>
          set({
            cartItems: [],
            cartTotal: 0
          }, false, 'clearCart'),
          
        addToRecentlyViewed: (product) => {
          const state = get();
          const filtered = state.recentlyViewed.filter(p => p.id !== product.id);
          const newRecentlyViewed = [product, ...filtered].slice(0, 10);
          
          set({
            recentlyViewed: newRecentlyViewed
          }, false, 'addToRecentlyViewed');
        },
        
        setLoadingProducts: (loading) =>
          set({ isLoadingProducts: loading }, false, 'setLoadingProducts'),
          
        setLoadingCategories: (loading) =>
          set({ isLoadingCategories: loading }, false, 'setLoadingCategories'),
          
        // Computed functions
        getFilteredProducts: () => {
          const state = get();
          let filtered = state.products;
          
          // Filter by search query
          if (state.searchQuery) {
            filtered = filtered.filter(product =>
              product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
              product.description.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
          }
          
          // Filter by category
          if (state.selectedCategory) {
            filtered = filtered.filter(product => product.category === state.selectedCategory);
          }
          
          // Filter by price range
          filtered = filtered.filter(product =>
            product.price >= state.priceRange[0] && product.price <= state.priceRange[1]
          );
          
          // Sort products
          switch (state.sortBy) {
            case 'price-asc':
              filtered.sort((a, b) => a.price - b.price);
              break;
            case 'price-desc':
              filtered.sort((a, b) => b.price - a.price);
              break;
            case 'newest':
              filtered.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
              break;
            case 'popular':
              filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
              break;
            default:
              filtered.sort((a, b) => a.name.localeCompare(b.name));
          }
          
          return filtered;
        },
        
        getCartItemCount: () => {
          const state = get();
          return state.cartItems.reduce((count, item) => count + item.quantity, 0);
        },
      }),
      {
        name: 'mp-pharma-product-store',
        partialize: (state) => ({
          cartItems: state.cartItems,
          cartTotal: state.cartTotal,
          recentlyViewed: state.recentlyViewed,
          searchQuery: state.searchQuery,
          selectedCategory: state.selectedCategory,
          priceRange: state.priceRange,
          sortBy: state.sortBy,
        }),
      }
    ),
    { name: 'ProductStore' }
  )
);