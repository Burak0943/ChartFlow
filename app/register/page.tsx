// server component wrapper
import RegisterForm from './components/RegisterForm';

import { useState } from 'react';
import { createClient as createSupabaseBrowserClient } from '../../utils/supabase/client';
import { toast } from 'sonner';

export default function RegisterPage() {
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
    <div className="center-screen">
      <div className="w-full max-w-md card-glass p-8 rounded-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">ChartFlow</h2>
          <p className="text-sm text-gray-400">Create your account</p>
        </div>

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

        <div className="mt-4 text-center text-sm">
          <a href="/login" className="text-blue-400">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}
