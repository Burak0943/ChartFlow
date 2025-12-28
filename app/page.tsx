"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic Import: Dosya yolunun doğru olduğundan eminiz
const TradingChart = dynamic(
  () => import('../components/trade/TradingChart'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0b0e11] flex items-center justify-center text-gray-600">Loading Chart...</div>
  }
);

const INITIAL_MARKET_DATA = [
  { symbol: 'BTC/USDT', price: 42500.50, change: 2.4 },
  { symbol: 'ETH/USDT', price: 2250.80, change: -1.2 },
  { symbol: 'SOL/USDT', price: 98.45, change: 5.6 },
  { symbol: 'BNB/USDT', price: 310.20, change: 1.1 },
];

export default function TradePage() {
  const [marketData, setMarketData] = useState(INITIAL_MARKET_DATA);
  const [activeTab, setActiveTab] = useState('positions');

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((m) => {
          // Basitleştirilmiş rastgele fiyat değişimi (Hatasız)
          const randomMove = (Math.random() - 0.5) * 10; 
          const newPrice = m.price + randomMove;
          return {
            ...m,
            price: Number(newPrice.toFixed(2)),
            change: Number((m.change + (Math.random() - 0.5)).toFixed(2)),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-[#0b0e11] text-[#EAECEF] overflow-hidden font-sans">
      
      {/* SOL PANEL */}
      <div className="w-full md:w-[20%] border-r border-[#2b3139] flex flex-col">
        <div className="px-4 py-3 border-b border-[#2b3139] text-xs text-[#848E9C]">Market Watch</div>
        <div className="flex-1 overflow-y-auto">
          {marketData.map((item) => (
            <div key={item.symbol} className="flex justify-between px-4 py-3 hover:bg-[#1e2329] cursor-pointer border-b border-[#2b3139]/30">
              <span className="text-white font-medium text-xs">{item.symbol}</span>
              <div className="text-right">
                <div className={item.change >= 0 ? 'text-[#0ECB81] text-xs' : 'text-[#F6465D] text-xs'}>{item.price.toFixed(2)}</div>
                <div className={item.change >= 0 ? 'text-[#0ECB81] text-[10px]' : 'text-[#F6465D] text-[10px]'}>{item.change}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ORTA PANEL */}
      <div className="w-full md:w-[60%] flex flex-col border-r border-[#2b3139]">
        <div className="flex-1 min-h-[50%] relative border-b border-[#2b3139]">
           <TradingChart />
        </div>
        <div className="h-[35%] bg-[#0b0e11] flex flex-col p-4">
           <div className="text-[#FCD535] text-xs font-bold mb-2 border-b border-[#2b3139] pb-2 w-max">POSITIONS</div>
           <div className="text-xs text-gray-400">No open positions.</div>
        </div>
      </div>

      {/* SAĞ PANEL */}
      <div className="w-full md:w-[20%] bg-[#1e2329] p-4">
        <div className="text-sm font-medium mb-4 text-[#EAECEF]">Order Entry</div>
        <div className="space-y-4">
            <input type="number" defaultValue="1.00" className="w-full bg-[#0b0e11] border border-[#2b3139] p-2 rounded text-sm text-white" />
            <div className="grid grid-cols-2 gap-2">
                <button className="bg-[#F6465D] text-white py-3 rounded text-sm font-bold">SELL</button>
                <button className="bg-[#0ECB81] text-white py-3 rounded text-sm font-bold">BUY</button>
            </div>
        </div>
      </div>

    </div>
  );
}