'use client';

import { useEffect, useState } from 'react';

export default function OrderBook() {
  const [bids, setBids] = useState<number[]>([]);
  const [asks, setAsks] = useState<number[]>([]);

  useEffect(() => {
    // Simulate fast updates
    const interval = setInterval(() => {
      setBids((b) => [Math.random() * 100 + 100, ...b].slice(0, 10));
      setAsks((a) => [Math.random() * 100 + 200, ...a].slice(0, 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h4 className="font-semibold mb-2">Order Book</h4>
      <div className="grid grid-cols-2 text-xs">
        <div>
          {bids.map((v, i) => (
            <div key={i} className="text-green-400">
              {v.toFixed(2)}
            </div>
          ))}
        </div>
        <div>
          {asks.map((v, i) => (
            <div key={i} className="text-red-400 text-right">
              {v.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
