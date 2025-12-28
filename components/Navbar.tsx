'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent border-b border-[#222629]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" width={28} height={28} alt="ChartFlow" />
          <div className="text-sm font-semibold tracking-tight">ChartFlow</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-[13px]">
          <Link href="/trade" className={`${isActive('/trade') ? 'text-white font-semibold' : 'text-[#9AA3AB]'}`}>
            Trade
          </Link>
          <Link href="/markets" className={`${isActive('/markets') ? 'text-white font-semibold' : 'text-[#9AA3AB]'}`}>
            Markets
          </Link>
          <Link href="/account" className={`${isActive('/account') ? 'text-white font-semibold' : 'text-[#9AA3AB]'}`}>
            Account
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <div className="hidden md:block text-sm text-[#EAECEF]">Wallet: <span className="font-semibold">$10,000.00</span></div>
          <button className="p-1 rounded-md hover:bg-white/3">
            <User />
          </button>
        </div>
      </div>
    </header>
  );
}
