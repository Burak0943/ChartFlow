"use client";

import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Container henüz hazır değilse dur
    if (!chartContainerRef.current) return;

    // 1. Grafiği oluştur
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#111827' }, // Koyu arka plan (Tailwind gray-900)
        textColor: '#D1D5DB',
      },
      grid: {
        vertLines: { color: '#374151' },
        horzLines: { color: '#374151' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    // 2. Mum Grafiği Serisini Ekle
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#22c55e', // Yeşil
      downColor: '#ef4444', // Kırmızı
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    // 3. Örnek Veri (Dummy Data) Yükle
    // Tarih formatı: YYYY-MM-DD
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

    // Typescript hatası almamak için 'any' ile cast ediyoruz veya interface tanımlıyoruz.
    // Şimdilik hızlı çözüm için doğrudan veriyoruz.
    candlestickSeries.setData(data as any);

    // 4. Pencere boyutu değişirse grafiği uydur
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    // 5. Temizlik (Component kapanınca grafiği sil)
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="w-full h-full p-4 bg-gray-900 rounded-lg border border-gray-800">
       <div className="mb-2 text-sm text-gray-400 font-mono">BTC/USDT • 1D</div>
       <div ref={chartContainerRef} className="w-full h-[400px]" />
    </div>
  );
}