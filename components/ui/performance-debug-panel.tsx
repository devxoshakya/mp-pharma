"use client";
import { useEffect, useState } from 'react';
import { usePerformanceMonitoring } from '@/hooks/use-performance';
import { useUIStore } from '@/lib/stores/ui-store';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'needs-improvement' | 'poor';
  threshold: {
    good: number;
    poor: number;
  };
}

export function PerformanceDebugPanel() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { performanceMode, setPerformanceMode } = useUIStore();
  const { measureWebVitals } = usePerformanceMonitoring();

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measureMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetric[] = [
          {
            name: 'TTFB',
            value: Math.round(navigation.responseStart - navigation.fetchStart),
            unit: 'ms',
            status: navigation.responseStart - navigation.fetchStart < 600 ? 'good' : 
                   navigation.responseStart - navigation.fetchStart < 1000 ? 'needs-improvement' : 'poor',
            threshold: { good: 600, poor: 1000 }
          },
          {
            name: 'FCP',
            value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            unit: 'ms',
            status: navigation.domContentLoadedEventEnd - navigation.fetchStart < 1800 ? 'good' : 
                   navigation.domContentLoadedEventEnd - navigation.fetchStart < 3000 ? 'needs-improvement' : 'poor',
            threshold: { good: 1800, poor: 3000 }
          },
          {
            name: 'DOM Load',
            value: Math.round(navigation.domComplete - navigation.domContentLoadedEventStart),
            unit: 'ms',
            status: navigation.domComplete - navigation.domContentLoadedEventStart < 2000 ? 'good' : 
                   navigation.domComplete - navigation.domContentLoadedEventStart < 4000 ? 'needs-improvement' : 'poor',
            threshold: { good: 2000, poor: 4000 }
          },
          {
            name: 'Load Complete',
            value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            unit: 'ms',
            status: navigation.loadEventEnd - navigation.loadEventStart < 100 ? 'good' : 
                   navigation.loadEventEnd - navigation.loadEventStart < 300 ? 'needs-improvement' : 'poor',
            threshold: { good: 100, poor: 300 }
          }
        ];

        // Add memory usage if available
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          newMetrics.push({
            name: 'JS Heap',
            value: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            unit: 'MB',
            status: memory.usedJSHeapSize / 1024 / 1024 < 50 ? 'good' : 
                   memory.usedJSHeapSize / 1024 / 1024 < 100 ? 'needs-improvement' : 'poor',
            threshold: { good: 50, poor: 100 }
          });
        }

        setMetrics(newMetrics);
      }
    };

    // Measure after initial load
    setTimeout(measureMetrics, 1000);
    
    // Re-measure every 5 seconds
    const interval = setInterval(measureMetrics, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'needs-improvement': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'Good';
      case 'needs-improvement': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Unknown';
    }
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white"
        size="sm"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </Button>

      {/* Performance Panel */}
      {isVisible && (
        <Card className="fixed top-4 right-4 z-40 p-4 w-80 max-h-96 overflow-y-auto bg-white dark:bg-gray-900 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Performance Metrics</h3>
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>

            {/* Performance Mode Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Performance Mode:</label>
              <div className="flex gap-2">
                {['auto', 'performance', 'quality'].map((mode) => (
                  <Button
                    key={mode}
                    onClick={() => setPerformanceMode(mode as any)}
                    variant={performanceMode === mode ? 'default' : 'outline'}
                    size="sm"
                    className="text-xs"
                  >
                    {mode}
                  </Button>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              {metrics.map((metric) => (
                <div key={metric.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusColor(metric.status)}`}
                      title={getStatusText(metric.status)}
                    />
                    <span className="text-sm font-medium">{metric.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono">
                      {metric.value}{metric.unit}
                    </div>
                    <div className="text-xs text-gray-500">
                      &lt;{metric.threshold.good}{metric.unit} good
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Score */}
            <div className="pt-3 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Overall Score</span>
                <Badge
                  className={
                    metrics.filter(m => m.status === 'good').length >= metrics.length * 0.7
                      ? 'bg-green-500'
                      : metrics.filter(m => m.status === 'good').length >= metrics.length * 0.4
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }
                >
                  {Math.round((metrics.filter(m => m.status === 'good').length / metrics.length) * 100)}%
                </Badge>
              </div>
            </div>

            {/* Tips */}
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <p>💡 Tips:</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>Green dots = optimal performance</li>
                <li>Switch to "performance" mode on slower devices</li>
                <li>Metrics update every 5 seconds</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}