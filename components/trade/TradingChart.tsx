'use client';

import { useEffect, useRef } from 'react';
import { createChart, type IChartApi, type CandlestickData } from 'lightweight-charts';

export default function TradingChart() {
  const ref = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart: any = createChart(ref.current, {
      layout: {
        background: { color: '#0B1220' },
        textColor: '#d1d5db'
      },
      grid: {
        vertLines: { color: 'rgba(255,255,255,0.03)' },
        horzLines: { color: 'rgba(255,255,255,0.03)' }
      }
    });

    const candleSeries: any = chart.addCandlestickSeries();

    const sample = [
      { time: '2023-12-01', open: 110, high: 120, low: 100, close: 115 },
      { time: '2023-12-02', open: 115, high: 125, low: 110, close: 120 },
      { time: '2023-12-03', open: 120, high: 130, low: 115, close: 125 }
    ];

    candleSeries.setData(sample as any);

    chartRef.current = chart;

    return () => chart.remove();
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '350px' }} />;
}
