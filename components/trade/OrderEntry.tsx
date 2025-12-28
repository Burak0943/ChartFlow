'use client'

import React, { useState } from 'react'

export default function OrderEntry() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy')
  const [size, setSize] = useState('0.01')
  const [price, setPrice] = useState('')
  const [stop, setStop] = useState('')
  const [take, setTake] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    alert(`${side.toUpperCase()} ${size} BTC ${price ? 'at ' + price : 'by market'}`)
  }

  return (
    <div className="panel w-full max-w-sm p-3">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={() => setSide('sell')} className={`px-3 py-1 rounded-md text-sm ${side === 'sell' ? 'bg-red-600 text-white' : 'bg-white/3'}`}>SELL</button>
        <button onClick={() => setSide('buy')} className={`px-3 py-1 rounded-md text-sm ${side === 'buy' ? 'bg-green-600 text-black' : 'bg-white/3'}`}>BUY</button>
      </div>

      <form onSubmit={submit} className="space-y-2 text-sm">
        <div>
          <label className="text-xs text-[#BEC7CB]">Size (BTC)</label>
          <input value={size} onChange={(e) => setSize(e.target.value)} className="w-full bg-transparent border border-[#222629] rounded-md px-2 py-2 text-xs" />
        </div>

        <div>
          <label className="text-xs text-[#BEC7CB]">Price (optional)</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-transparent border border-[#222629] rounded-md px-2 py-2 text-xs" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-[#BEC7CB]">Stop Loss</label>
            <input value={stop} onChange={(e) => setStop(e.target.value)} className="w-full bg-transparent border border-[#222629] rounded-md px-2 py-2 text-xs" />
          </div>
          <div>
            <label className="text-xs text-[#BEC7CB]">Take Profit</label>
            <input value={take} onChange={(e) => setTake(e.target.value)} className="w-full bg-transparent border border-[#222629] rounded-md px-2 py-2 text-xs" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <button type="submit" className={`flex-1 py-2 rounded-md font-semibold ${side === 'buy' ? 'bg-green-500 text-black' : 'bg-white/3 text-white'}`}>BUY by Market</button>
          <button type="button" onClick={() => alert('Sell Market')} className={`flex-1 py-2 rounded-md font-semibold ${side === 'sell' ? 'bg-red-500 text-white' : 'bg-white/3 text-white'}`}>SELL by Market</button>
        </div>

      </form>
    </div>
  )
}
