import Link from 'next/link';
import { cookies } from 'next/headers';
import { createClient } from '../utils/supabase/server';

export default async function Home() {
  // Check session for CTA
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const session = data.session;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8">
      <section className="max-w-5xl w-full py-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">ChartFlow</h1>
          <nav className="space-x-4">
            <Link href="/trade" className="text-sm text-gray-300">
              Trade
            </Link>
            <Link href="/dashboard" className="text-sm text-gray-300">
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Trade with Speed using ChartFlow
            </h2>
            <p className="mt-4 text-gray-400">
              High-performance trading terminal built for pro traders and crypto
              enthusiasts. Real-time charts, low-latency execution, and secure
              custody.
            </p>

            <div className="mt-6">
              {session ? (
                <Link href="/trade" className="px-6 py-3 bg-blue-600 rounded-md">
                  Start Trading
                </Link>
              ) : (
                <Link href="/login" className="px-6 py-3 bg-blue-600 rounded-md">
                  Start Trading
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-glass p-6 rounded-xl">
              <h3 className="font-semibold">Real-time Data</h3>
              <p className="text-sm text-gray-400">Streaming market data with millisecond updates.</p>
            </div>
            <div className="card-glass p-6 rounded-xl">
              <h3 className="font-semibold">Zero Latency</h3>
              <p className="text-sm text-gray-400">Optimized rendering and order routing pipelines.</p>
            </div>
            <div className="card-glass p-6 rounded-xl">
              <h3 className="font-semibold">Secure Assets</h3>
              <p className="text-sm text-gray-400">Industry-grade security and encrypted wallets.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
