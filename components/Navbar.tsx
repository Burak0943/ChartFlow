"use client";

import Link from "next/link";
import { Search, Globe, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-brand-dark/80 backdrop-blur-md border-b border-brand-panel z-50 px-4 md:px-6 flex items-center justify-between">
      {/* SOL: Logo ve Linkler */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo yoksa text fallback */}
          <div className="text-2xl font-bold text-white tracking-tight">
            Chart<span className="text-brand-cyan">Flow</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-muted">
          <Link href="/trade" className="hover:text-brand-cyan transition">Buy Crypto</Link>
          <Link href="/dashboard" className="hover:text-brand-cyan transition">Markets</Link>
          <Link href="/trade" className="text-white hover:text-brand-cyan transition">Trade</Link>
          <Link href="#" className="hover:text-brand-cyan transition">Futures</Link>
        </div>
      </div>

      {/* SAĞ: Araçlar ve Giriş */}
      <div className="flex items-center gap-4">
        <button className="text-brand-muted hover:text-white hidden sm:block">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-brand-muted hover:text-white hidden sm:block">
          <Globe className="w-5 h-5" />
        </button>
        
        <div className="h-4 w-[1px] bg-brand-panel hidden sm:block"></div>

        <Link href="/auth" className="text-white font-medium text-sm hover:text-brand-cyan transition hidden sm:block">
          Log In
        </Link>
        <Link 
          href="/auth" 
          className="bg-brand-cyan text-brand-dark font-bold text-sm px-4 py-2 rounded hover:bg-brand-cyanHover transition"
        >
          Sign Up
        </Link>
        
        {/* Mobil Menü İkonu */}
        <button className="text-white lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}