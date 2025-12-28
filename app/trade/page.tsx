"use client";

import dynamic from 'next/dynamic';

// Load the chart with dynamic import and disable SSR.
// This ensures the chart only loads in the browser.
const TradingChart = dynamic(
  () => import('../../components/trade/TradingChart'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-gray-500">Loading chart...</div>
  }
);

export default function TradePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Trading Terminal</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Chart */}
        <div className="lg:col-span-2 h-[500px] border border-gray-800 rounded-xl overflow-hidden">
          <TradingChart />
        </div>

        {/* Right Side: Buy/Sell Panel (Example) */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Order Entry</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded text-center">
              Buy/Sell form placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}