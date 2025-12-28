'use client';

import { useState } from 'react';
import { createClient as createSupabaseBrowserClient } from '../../../utils/supabase/client';
import { toast } from 'sonner';

export default function LoginForm() {
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Logged in successfully');
      window.location.href = '/trade';
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
      />
      <input
        className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
      />
      <button
        type="submit"
        className="w-full p-3 rounded-md bg-green-500 text-black font-semibold hover:brightness-95 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Giriş Yap'}
      </button>
    </form>
  );
}
