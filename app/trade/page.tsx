"use client";

import dynamic from 'next/dynamic';

// 1. Grafiği "Dynamic Import" ile çağırıyoruz ve SSR'ı kapatıyoruz.
// Bu, grafiğin sadece tarayıcıda yüklenmesini garanti eder.
const TradingChart = dynamic(
  () => import('../../components/trade/TradingChart'),
  { 
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-gray-500">Grafik Yükleniyor...</div>
  }
);

export default function TradePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Trade Terminali</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sol Taraf: Grafik */}
        <div className="lg:col-span-2 h-[500px] border border-gray-800 rounded-xl overflow-hidden">
          <TradingChart />
        </div>

        {/* Sağ Taraf: Al-Sat Paneli (Örnek) */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Emir Girişi</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded text-center">
              Al / Sat Formu Buraya Gelecek
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}