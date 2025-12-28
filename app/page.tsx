"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Grafiği SSR olmadan yüklüyoruz (Hydration hatasını önler)
const TradingChart = dynamic(
  () => import('../../components/trade/TradingChart'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0b0e11] flex items-center justify-center text-gray-600">Loading Chart...</div>
  }
);

// MOCK DATA: Market Watch için
const INITIAL_MARKET_DATA = [
  { symbol: 'BTC/USDT', price: 42500.50, change: 2.4, volume: '1.2B' },
  { symbol: 'ETH/USDT', price: 2250.80, change: -1.2, volume: '800M' },
  { symbol: 'SOL/USDT', price: 98.45, change: 5.6, volume: '400M' },
  { symbol: 'AVAX/USDT', price: 34.20, change: 0.8, volume: '150M' },
  { symbol: 'XRP/USDT', price: 0.62, change: -0.5, volume: '300M' },
  { symbol: 'BNB/USDT', price: 310.20, change: 1.1, volume: '200M' },
  { symbol: 'DOGE/USDT', price: 0.08, change: -2.3, volume: '100M' },
  { symbol: 'ADA/USDT', price: 0.55, change: 0.4, volume: '90M' },
];

export default function TradePage() {
  const [marketData, setMarketData] = useState(INITIAL_MARKET_DATA);
  const [activeTab, setActiveTab] = useState('positions');

  // Fiyatları Canlı Gibi Oynat (Hata veren kısım burasıydı, düzeltildi)
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((m) => ({
          ...m,
          // HATA BURADAYDI: Parantezler düzeltildi
          price: +(m.price * (1 + (Math.random() - 0.5) / 1000)).toFixed(2),
          change: +(m.change + (Math.random() - 0.5) / 10).toFixed(2),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-[#0b0e11] text-[#EAECEF] overflow-hidden font-sans">
      
      {/* 1. SOL PANEL: Market Watch (%20) */}
      <div className="w-full md:w-[20%] border-r border-[#2b3139] flex flex-col">
        <div className="px-4 py-3 border-b border-[#2b3139] font-medium text-sm text-[#848E9C]">
          Market Watch
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <table className="w-full text-xs">
            <thead className="text-[#848E9C] text-left sticky top-0 bg-[#0b0e11]">
              <tr>
                <th className="px-4 py-2 font-normal">Symbol</th>
                <th className="px-2 py-2 font-normal text-right">Price</th>
                <th className="px-4 py-2 font-normal text-right">Chg%</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((item) => (
                <tr key={item.symbol} className="hover:bg-[#1e2329] cursor-pointer transition-colors border-b border-[#2b3139]/30">
                  <td className="px-4 py-3 font-medium text-white">{item.symbol}</td>
                  <td className={`px-2 py-3 text-right font-medium ${item.change >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'}`}>
                    {item.price.toFixed(2)}
                  </td>
                  <td className={`px-4 py-3 text-right ${item.change >= 0 ? 'text-[#0ECB81]' : 'text-[#F6465D]'}`}>
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. ORTA PANEL: Grafik ve Terminal (%60) */}
      <div className="w-full md:w-[60%] flex flex-col border-r border-[#2b3139]">
        {/* Üst: Grafik */}
        <div className="flex-1 min-h-[50%] relative border-b border-[#2b3139]">
           <TradingChart />
        </div>
        
        {/* Alt: Terminal (MetaTrader Style) */}
        <div className="h-[35%] bg-[#0b0e11] flex flex-col">
          <div className="flex border-b border-[#2b3139]">
            {['Positions', 'Pending Orders', 'History', 'Balance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 text-xs font-medium border-t-2 ${
                  activeTab === tab.toLowerCase() 
                    ? 'border-[#FCD535] text-[#FCD535] bg-[#1e2329]' 
                    : 'border-transparent text-[#848E9C] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto text-xs">
            {activeTab === 'positions' ? (
              <table className="w-full text-left">
                <thead className="text-[#848E9C]">
                  <tr>
                    <th className="pb-2 font-normal">Time</th>
                    <th className="pb-2 font-normal">Symbol</th>
                    <th className="pb-2 font-normal">Type</th>
                    <th className="pb-2 font-normal">Volume</th>
                    <th className="pb-2 font-normal">Price</th>
                    <th className="pb-2 font-normal text-right">Profit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-[#2b3139]/30">
                    <td className="py-2">14:30:05</td>
                    <td className="py-2 font-bold">BTC/USDT</td>
                    <td className="py-2 text-[#0ECB81]">BUY</td>
                    <td className="py-2">0.50</td>
                    <td className="py-2">41,200.00</td>
                    <td className="py-2 text-right text-[#0ECB81]">+1,250.00</td>
                  </tr>
                  <tr>
                     <td className="py-2" colSpan={6}>
                       <div className="flex gap-4 mt-2 p-2 bg-[#1e2329] rounded text-[#848E9C]">
                         <span>Balance: <span className="text-white">10,000.00</span></span>
                         <span>Equity: <span className="text-white">11,250.00</span></span>
                         <span>Margin: <span className="text-white">2,000.00</span></span>
                         <span>Free Margin: <span className="text-white">9,250.00</span></span>
                       </div>
                     </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="text-[#848E9C] text-center mt-10">No data available</div>
            )}
          </div>
        </div>
      </div>

      {/* 3. SAĞ PANEL: Emir Girişi (%20) */}
      <div className="w-full md:w-[20%] bg-[#1e2329] flex flex-col p-4">
        <div className="text-sm font-medium mb-4 text-[#EAECEF]">Order Entry</div>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-[#848E9C] mb-1 block">Symbol</label>
            <div className="bg-[#0b0e11] border border-[#2b3139] p-2 rounded text-sm text-white font-mono">
              BTC/USDT
            </div>
          </div>

          <div>
            <label className="text-xs text-[#848E9C] mb-1 block">Volume (Lots)</label>
            <input type="number" defaultValue="1.00" className="w-full bg-[#0b0e11] border border-[#2b3139] p-2 rounded text-sm text-white focus:border-[#FCD535] outline-none transition" />
          </div>

          <div className="grid grid-cols-2 gap-2">
             <div>
                <label className="text-xs text-[#848E9C] mb-1 block">Stop Loss</label>
                <input type="number" placeholder="0.00" className="w-full bg-[#0b0e11] border border-[#2b3139] p-2 rounded text-sm text-white focus:border-[#F6465D] outline-none transition" />
             </div>
             <div>
                <label className="text-xs text-[#848E9C] mb-1 block">Take Profit</label>
                <input type="number" placeholder="0.00" className="w-full bg-[#0b0e11] border border-[#2b3139] p-2 rounded text-sm text-white focus:border-[#0ECB81] outline-none transition" />
             </div>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-3">
            <button className="bg-[#F6465D] hover:bg-[#D9304E] text-white py-3 rounded text-sm font-bold shadow-lg transition active:scale-95">
              SELL
              <span className="block text-[10px] font-normal opacity-80">Market</span>
            </button>
            <button className="bg-[#0ECB81] hover:bg-[#06A868] text-white py-3 rounded text-sm font-bold shadow-lg transition active:scale-95">
              BUY
              <span className="block text-[10px] font-normal opacity-80">Market</span>
            </button>
          </div>
        </div>

        <div className="mt-auto text-xs text-[#848E9C] text-center border-t border-[#2b3139] pt-4">
          Server Time: {new Date().toLocaleTimeString()}
        </div>
      </div>

    </div>
  );
}