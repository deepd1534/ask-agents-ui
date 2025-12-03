import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartProps {
  options: any; // EChartsOption
  height?: string;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ options, height = '300px', className = '' }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    // Set options
    if (options) {
      chartInstance.current.setOption(options);
    }

    // Handle Resize
    const resizeObserver = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      // Dispose is important to prevent memory leaks
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, [options]);

  return (
    <div 
      ref={chartRef} 
      className={`w-full ${className}`} 
      style={{ height }} 
    />
  );
};
