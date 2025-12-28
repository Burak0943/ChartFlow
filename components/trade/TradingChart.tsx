"use client";

import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#0b0e11' },
        textColor: '#848E9C',
      },
      grid: {
        vertLines: { color: '#2b3139' },
        horzLines: { color: '#2b3139' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#0ECB81',
      downColor: '#F6465D',
      borderVisible: false,
      wickUpColor: '#0ECB81',
      wickDownColor: '#F6465D',
    });

    // Dummy Data
    const data = [
      { time: '2023-12-18', open: 41000.50, high: 42000.00, low: 40500.00, close: 41500.20 },
      { time: '2023-12-19', open: 41500.20, high: 43000.00, low: 41000.00, close: 42800.50 },
      { time: '2023-12-20', open: 42800.50, high: 44000.00, low: 42500.00, close: 43200.00 },
      { time: '2023-12-21', open: 43200.00, high: 43500.00, low: 41800.00, close: 42000.00 },
      { time: '2023-12-22', open: 42000.00, high: 42500.00, low: 41500.00, close: 41800.00 },
      { time: '2023-12-23', open: 41800.00, high: 43000.00, low: 41800.00, close: 42900.00 },
      { time: '2023-12-24', open: 42900.00, high: 44500.00, low: 42800.00, close: 44000.00 },
      { time: '2023-12-25', open: 44000.00, high: 45000.00, low: 43500.00, close: 44800.00 },
    ];

    candlestickSeries.setData(data as any);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#0b0e11]">
       <div className="px-4 py-2 text-xs text-gray-400 font-mono border-b border-[#2b3139] flex justify-between">
          <span>BTC/USDT • 1D</span>
          <span className="text-[#0ECB81]">Running</span>
       </div>
       <div ref={chartContainerRef} className="w-full flex-1" />
    </div>
  );
}