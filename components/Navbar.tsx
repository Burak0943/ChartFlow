import Link from 'next/link';
import { User } from 'lucide-react';

export function Navbar({ session }: { session: boolean }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-lg font-bold">ChartFlow</div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href="/trade" className="text-sm text-gray-300">
            Trade
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-300">
            Dashboard
          </Link>
          <div className="ml-4">
            {session ? (
              <button className="flex items-center gap-2 text-sm">
                <User /> <span>Profile</span>
              </button>
            ) : (
              <Link href="/login" className="text-sm text-blue-400">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
