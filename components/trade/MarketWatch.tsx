'use client'

import React, { useEffect, useState } from 'react'

type Market = {
  symbol: string
  price: number
  change: number
}

const sample: Market[] = [
  { symbol: 'BTC/USDT', price: 48652.12, change: 1.2 },
  { symbol: 'ETH/USDT', price: 3290.5, change: -0.4 },
  { symbol: 'SOL/USDT', price: 125.34, change: 2.1 },
  { symbol: 'XRP/USDT', price: 0.618, change: -1.8 },
  { symbol: 'LTC/USDT', price: 84.12, change: 0.3 },
]

export default function MarketWatch() {
  const [markets, setMarkets] = useState<Market[]>(sample)

  useEffect(() => {
    const t = setInterval(() => {
      setMarkets((prev) =>
        prev.map((m) => ({
          ...m,
          price: +(m.price * (1 + (Math.random() - 0.5) / 200)).toFixed(6)),
          change: +((Math.random() - 0.5) * 2).toFixed(2),
        }))
    }, 2000)

    return () => clearInterval(t)
  }, [])

  return (
    <div className="panel w-full max-w-xs p-2">
      <div className="flex items-center justify-between mb-2 px-2">
        <div className="text-xs text-[#BEC7CB] font-semibold">Markets</div>
        <div className="text-xs text-[#9AA3AB]">Spot</div>
      </div>

      <div className="divide-y divide-[#222629]">
        {markets.map((m) => (
          <div key={m.symbol} className="px-2 py-2 flex items-center justify-between hover:bg-white/2 rounded-md cursor-pointer">
            <div>
              <div className="text-sm font-semibold">{m.symbol}</div>
              <div className="text-xs text-[#9AA3AB]">Price</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-mono">{m.price.toLocaleString(undefined, { maximumFractionDigits: 6 })}</div>
              <div className={`text-xs ${m.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>{m.change >= 0 ? '+' : ''}{m.change}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
