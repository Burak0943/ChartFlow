'use client';

import { useState } from 'react';
import { createClient as createSupabaseBrowserClient } from '../../../utils/supabase/client';
import { toast } from 'sonner';

export default function RegisterForm() {
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Account created — check your email');
      window.location.href = '/login';
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-3 rounded bg-transparent border border-white/6"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        className="w-full p-3 rounded bg-transparent border border-white/6"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button
        type="submit"
        className="w-full p-3 rounded bg-blue-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Account'}
      </button>
    </form>
  );
}
