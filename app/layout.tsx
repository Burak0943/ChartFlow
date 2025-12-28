import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterClient from './providers/ToasterClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Inter font for a modern sans-serif look
const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChartFlow | Pro Terminal',
  description: 'Professional Crypto Trading Terminal',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0e1014] text-[#EAECEF] antialiased`}> 
        <Navbar />

        <main className="pt-16 min-h-[calc(100vh-64px)]">
          {children}
        </main>

        <Footer />

        {/* Global toasts */}
        <div id="toaster-root">
          <ToasterClient />
        </div>
      </body>
    </html>
  )
}