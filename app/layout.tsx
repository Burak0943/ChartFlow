import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToasterClient from './providers/ToasterClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChartFlow',
  description: 'High-performance crypto trading terminal'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0b0f17] text-gray-100`}>
        {children}
        {/* Global toasts */}
        {/* Mount the client to the toaster-root */}
        {/* @ts-expect-error Server components can import client providers via this pattern */}
        <div id="toaster-root">
          {/* @ts-expect-error Async Server Component insertion for client provider */}
          <ToasterClient />
        </div>
      </body>
    </html>
  );
}
