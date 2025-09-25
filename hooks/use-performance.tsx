"use client";
import { useEffect, useCallback } from 'react';
import { useUIStore } from '@/lib/stores/ui-store';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export function usePerformanceMonitoring() {
  const { performanceMode, setPerformanceMode } = useUIStore();

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      // Observe Performance Observer
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      }

      // Navigation Timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.fetchStart;
        console.log('TTFB:', ttfb);
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, []);

  const adaptPerformanceMode = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      // Auto-detect performance capabilities
      const connection = (navigator as any).connection;
      const deviceMemory = (navigator as any).deviceMemory;
      const hardwareConcurrency = navigator.hardwareConcurrency;

      let suggestedMode: 'auto' | 'performance' | 'quality' = 'auto';

      // Check connection speed
      if (connection) {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          suggestedMode = 'performance';
        } else if (connection.effectiveType === '4g' && connection.downlink > 10) {
          suggestedMode = 'quality';
        }
      }

      // Check device capabilities
      if (deviceMemory && deviceMemory < 4) {
        suggestedMode = 'performance';
      }

      if (hardwareConcurrency && hardwareConcurrency < 4) {
        suggestedMode = 'performance';
      }

      // Check battery status
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2 || !battery.charging) {
            setPerformanceMode('performance');
          }
        });
      }

      if (performanceMode === 'auto' && suggestedMode !== 'auto') {
        setPerformanceMode(suggestedMode);
      }
    } catch (error) {
      console.warn('Performance adaptation failed:', error);
    }
  }, [performanceMode, setPerformanceMode]);

  const reportWebVitals = useCallback((metric: any) => {
    // Send metrics to analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      // gtag('event', metric.name, {
      //   event_category: 'Web Vitals',
      //   event_label: metric.id,
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   non_interaction: true,
      // });
      
      console.log('Web Vital:', metric);
    }
  }, []);

  useEffect(() => {
    measureWebVitals();
    adaptPerformanceMode();

    // Set up intersection observer for performance optimization
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element is visible, can trigger animations or load content
              entry.target.classList.add('visible');
            }
          });
        },
        { rootMargin: '50px' }
      );

      // Observe elements for lazy loading
      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [measureWebVitals, adaptPerformanceMode]);

  return {
    performanceMode,
    setPerformanceMode,
    reportWebVitals,
    measureWebVitals,
  };
}

// Hook for component-level performance monitoring
export function useComponentPerformance(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (renderTime > 16) { // More than one frame (16ms)
        console.warn(`${componentName} took ${renderTime.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);
}

// Hook for measuring interaction performance
export function useInteractionPerformance() {
  const measureInteraction = useCallback((interactionName: string, fn: Function) => {
    return async (...args: any[]) => {
      const startTime = performance.now();
      
      try {
        const result = await fn(...args);
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        if (duration > 100) { // More than 100ms
          console.warn(`${interactionName} took ${duration.toFixed(2)}ms`);
        }
        
        return result;
      } catch (error) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.error(`${interactionName} failed after ${duration.toFixed(2)}ms:`, error);
        throw error;
      }
    };
  }, []);

  return { measureInteraction };
}