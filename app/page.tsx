'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Ticker = { symbol: string; price: number; change: number }

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [tickers, setTickers] = useState<Ticker[]>([
    { symbol: 'BTC', price: 48652.12, change: 1.23 },
    { symbol: 'ETH', price: 3290.5, change: -0.42 },
    { symbol: 'SOL', price: 125.34, change: 2.14 },
  ])

  useEffect(() => {
    const t = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => ({
          ...t,
          price: Number((t.price * (1 + (Math.random() - 0.5) / 200)).toFixed(2)),
          change: Number((t.change + (Math.random() - 0.5)).toFixed(2)),
        }))
      )
    }, 2000)

    return () => clearInterval(t)
  }, [])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thanks — we sent you a welcome email (mock)')
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-brand-dark px-4 md:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">Trade Smarter, Not Harder</h1>
            <p className="text-brand-muted text-lg">The world's leading crypto copy trading platform.</p>

            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <input aria-label="Email or phone" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or phone number" className="flex-1 bg-brand-panel border border-brand-panel rounded-md px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
              <button aria-label="Sign up" className="mt-2 sm:mt-0 bg-brand-cyan text-black font-bold rounded-md px-6 py-3 btn-shine hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan flex items-center gap-2">Sign Up <ArrowRight className="w-4 h-4" /></button>
            </form>

            <div className="flex gap-6 mt-4 text-sm">
              <div>
                <div className="text-xs text-brand-muted">Users</div>
                <div className="text-white font-semibold">20M+</div>
              </div>
              <div>
                <div className="text-xs text-brand-muted">Volume</div>
                <div className="text-white font-semibold">£10B+</div>
              </div>
            </div>

            {/* Market Ticker */}
            <div className="mt-8 marquee bg-brand-panel border border-brand-panel rounded-2xl p-3">
              <div className="marquee-track">
                {tickers.concat(tickers).map((t, i) => (
                  <div key={t.symbol + i} className="flex items-center gap-3 px-4">
                    <div className="font-semibold text-white">{t.symbol}</div>
                    <div className="text-sm text-brand-muted">{t.price.toLocaleString()}</div>
                    <div className={t.change >= 0 ? 'text-green-500 text-sm' : 'text-red-400 text-sm'}>{t.change >= 0 ? '+' : ''}{t.change}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-purple-500/20 border border-brand-panel shadow-xl animate-float flex items-center justify-center">
              <div className="w-40 h-56 bg-black/20 border border-brand-panel rounded-xl flex flex-col items-center justify-center">
                <div className="text-sm text-brand-muted">Bitcoin</div>
                <div className="text-white font-bold text-2xl mt-2">BTC</div>
                <div className="text-green-500 mt-2">+1.23%</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why ChartFlow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-panel border border-brand-panel rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Copy Trading</h3>
              <p className="text-sm text-brand-muted">Follow top traders and automatically replicate their strategies with risk controls.</p>
            </div>

            <div className="bg-brand-panel border border-brand-panel rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-sm text-brand-muted">Multi-layer security, cold storage for funds and rigorous monitoring.</p>
            </div>

            <div className="bg-brand-panel border border-brand-panel rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-sm text-brand-muted">Our team is available around the clock for professional support.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}