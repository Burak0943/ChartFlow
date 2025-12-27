'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [tab, setTab] = useState<'buy'|'sell'>('buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Show a simple UI response
    alert(`${tab.toUpperCase()} ${amount} @ ${price}`);
  }

  return (
    <div className="p-4">
      <div className="mb-3 flex gap-2">
        <button onClick={() => setTab('buy')} className={`px-3 py-2 rounded ${tab==='buy' ? 'bg-green-600' : 'bg-transparent'}`}>
          Buy
        </button>
        <button onClick={() => setTab('sell')} className={`px-3 py-2 rounded ${tab==='sell' ? 'bg-red-600' : 'bg-transparent'}`}>
          Sell
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 rounded bg-transparent border border-white/6" placeholder="Price" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 rounded bg-transparent border border-white/6" placeholder="Amount" />
        <button type="submit" className={`w-full p-3 rounded ${tab==='buy' ? 'bg-green-600' : 'bg-red-600'}`}> {tab==='buy'?'Buy':'Sell'}</button>
      </form>
    </div>
  );
}
