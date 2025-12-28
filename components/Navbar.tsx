'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={32} height={32} alt="ChartFlow" />
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-300 to-purple-400">ChartFlow</div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/trade" className={`text-sm ${isActive('/trade') ? 'text-white font-semibold' : 'text-gray-300'}`}>
            Trade
          </Link>
          <Link href="/piyasalar" className={`text-sm ${isActive('/piyasalar') ? 'text-white font-semibold' : 'text-gray-300'}`}>
            Piyasalar
          </Link>
          <Link href="/cuzdan" className={`text-sm ${isActive('/cuzdan') ? 'text-white font-semibold' : 'text-gray-300'}`}>
            Cüzdan
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-200">
            Giriş Yap
          </Link>
          <Link href="/register" className="ml-2 inline-block bg-green-500 text-black px-4 py-2 rounded-md font-semibold">
            Üye Ol
          </Link>
        </div>
      </div>
    </header>
  );
}
