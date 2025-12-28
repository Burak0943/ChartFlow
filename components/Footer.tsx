'use client'

import Link from 'next/link'
import { Twitter, Github, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-brand-panel bg-brand-dark text-sm text-brand-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">ChartFlow</h3>
          <p className="text-sm">Professional crypto trading with intuitive UX and secure execution.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Service</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/trade" className="hover:text-white">Trading</Link></li>
            <li><Link href="/copy" className="hover:text-white">Copy Trading</Link></li>
            <li><Link href="/markets" className="hover:text-white">Markets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/support" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/status" className="hover:text-white">System Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Community</h4>
          <ul className="space-y-1 text-sm mb-3">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Developers</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/3 text-brand-muted"><Twitter /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/3 text-brand-muted"><Github /></a>
            <a href="#" aria-label="Contact" className="p-2 rounded-md hover:bg-white/3 text-brand-muted"><Send /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-panel py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted">
          <div>© 2025 ChartFlow. All rights reserved.</div>
          <div className="mt-3 md:mt-0">Built for professionals • <span className="text-white">Trade with confidence</span></div>
        </div>
      </div>
    </footer>
  )
}
