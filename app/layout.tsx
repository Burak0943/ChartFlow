import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToasterClient from './providers/ToasterClient';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChartFlow',
  description: 'High-performance crypto trading terminal',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0b0f17] text-gray-100`}>
        <Navbar />
        <div className="pt-16 min-h-[calc(100vh-64px)]">
          {children}
        </div>

        <footer className="mt-8 border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/support">Support</a>
            </div>
            <div>© {new Date().getFullYear()} ChartFlow. All rights reserved.</div>
          </div>
        </footer>

        {/* Global toasts */}
        {/* Mount the client to the toaster-root */}
        <div id="toaster-root">
          <ToasterClient />
        </div>
      </body>
    </html>
  );
}
