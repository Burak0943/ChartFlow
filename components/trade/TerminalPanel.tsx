'use client'

import React from 'react'

export default function TerminalPanel() {
  return (
    <div className="panel p-3 mt-3">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold">Terminal</div>
        <div className="text-xs text-[#9AA3AB]">Live</div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="col-span-1">
          <div className="text-[#BEC7CB] text-[11px] mb-2">Open Positions</div>
          <div className="text-sm">—</div>
        </div>

        <div>
          <div className="text-[#BEC7CB] text-[11px] mb-2">Order History</div>
          <div className="text-sm">—</div>
        </div>

        <div>
          <div className="text-[#BEC7CB] text-[11px] mb-2">Balance</div>
          <div className="text-sm">$10,000.00</div>
        </div>
      </div>
    </div>
  )
}
