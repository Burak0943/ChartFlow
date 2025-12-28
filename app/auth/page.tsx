"use client";

import { useState } from 'react';
import { createClient as createSupabaseBrowserClient } from '../../utils/supabase/client';
import { toast } from 'sonner';

export default function AuthPage() {
  const supabase = createSupabaseBrowserClient();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  // Sign in
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign up fields
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      toast.error(`Login failed: ${error.message}`);
    } else {
      toast.success('Logged in successfully');
      window.location.href = '/trade';
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!agreePolicy) {
      alert('You must agree to the Terms & Policy');
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });

    setLoading(false);

    if (error) {
      toast.error(`Sign up failed: ${error.message}`);
    } else {
      toast.success('Account created — check your email');
      setMode('signin');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_#0b122033,_transparent)] p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl animate-fade-in hidden md:block">
          <h3 className="text-2xl font-bold mb-4">ChartFlow</h3>
          <p className="text-gray-400">Professional crypto trading terminal. Sign in or create your account to start trading.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl animate-slide-in">
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-semibold">{mode === 'signin' ? 'Sign In' : 'Create Account'}</div>
            <div className="space-x-2 text-sm">
              <button className={`px-3 py-1 rounded ${mode === 'signin' ? 'bg-white/6' : 'bg-transparent'}`} onClick={() => setMode('signin')}>
                Sign In
              </button>
              <button className={`px-3 py-1 rounded ${mode === 'signup' ? 'bg-white/6' : 'bg-transparent'}`} onClick={() => setMode('signup')}>
                Sign Up
              </button>
            </div>
          </div>

          {mode === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <input
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />

              <input
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />

              <div className="text-right text-sm">
                <a href="/forgot-password" className="text-green-400">Forgot your password?</a>
              </div>

              <button type="submit" className="w-full p-3 rounded-md bg-green-500 text-black font-semibold" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                name="fullName"
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                required
              />

              <input
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />

              <input
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />

              <input
                className="w-full p-3 rounded-md bg-[#06112455] border border-white/6 placeholder:text-gray-400"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                required
              />

              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" checked={agreePolicy} onChange={(e) => setAgreePolicy(e.target.checked)} className="w-4 h-4" />
                <span className="text-gray-300">I agree to the <a href="/terms" className="text-green-400">Terms & Policy</a></span>
              </label>

              <button type="submit" className="w-full p-3 rounded-md bg-green-500 text-black font-semibold" disabled={loading}>
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
