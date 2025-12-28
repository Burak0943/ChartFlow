"use client";

import dynamic from 'next/dynamic'
import OrderBook from '../../components/trade/OrderBook'
import TradeHistory from '../../components/trade/TradeHistory'
import MarketWatch from '../../components/trade/MarketWatch'
import TerminalPanel from '../../components/trade/TerminalPanel'
import OrderEntry from '../../components/trade/OrderEntry'

const TradingChartNoSSR = dynamic(() => import('../../components/trade/TradingChart'), { ssr: false, loading: () => <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-gray-500">Loading chart...</div> })

export default function TradePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <aside className="col-span-3 space-y-3">
            <MarketWatch />
            <div className="panel p-2">Market Depth</div>
          </aside>

          <main className="col-span-6">
            <div className="panel p-3">
              <TradingChartNoSSR />
            </div>

            <TerminalPanel />

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="panel p-3">
                <TradeHistory />
              </div>
              <div className="panel p-3">Orders / Positions</div>
            </div>
          </main>

          <aside className="col-span-3 space-y-3">
            <OrderEntry />
            <div className="panel p-3">Order Book (Quick)</div>
          </aside>
        </div>
      </div>
    </div>
  )
}