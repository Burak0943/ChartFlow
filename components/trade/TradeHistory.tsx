'use client';

import { useEffect, useState } from 'react';

export default function TradeHistory() {
  const [trades, setTrades] = useState<Array<{ id: number; side: 'buy'|'sell'; price: number; amount: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((t) => [{ id: Date.now(), side: Math.random() > 0.5 ? 'buy' : 'sell', price: Math.random()*1000, amount: Math.random()*2 }, ...t].slice(0, 20));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h4 className="font-semibold mb-2">Trade History</h4>
      <div className="space-y-1 text-sm">
        {trades.map((trade) => (
          <div key={trade.id} className={`flex justify-between ${trade.side === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
            <div>{trade.side.toUpperCase()}</div>
            <div>{trade.price.toFixed(2)}</div>
            <div className="text-gray-400">{trade.amount.toFixed(3)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
