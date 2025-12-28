import './globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google'; // Inter yerine Roboto
import ToasterClient from './providers/ToasterClient';
import Navbar from '../components/Navbar';

// Roboto fontunu yapılandırıyoruz (Trading için 400, 500 ve 700 ağırlıkları ideal)
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChartFlow | Pro Terminal',
  description: 'Professional Crypto Trading Terminal',
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* roboto.className ile fontu body'ye uyguluyoruz */}
      <body className={`${roboto.className} bg-[#0b0f17] text-gray-100 antialiased`}>
        <Navbar />
        
        {/* Navbar yüksekliği kadar boşluk (pt-16) */}
        <div className="pt-16 min-h-[calc(100vh-64px)]">
          {children}
        </div>

        <footer className="mt-8 border-t border-white/5 py-6 bg-[#0b0f17]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/support" className="hover:text-white transition">Support</a>
            </div>
            <div>© {new Date().getFullYear()} ChartFlow. All rights reserved.</div>
          </div>
        </footer>

        {/* Global toasts */}
        <div id="toaster-root">
          <ToasterClient />
        </div>
      </body>
    </html>
  );
}