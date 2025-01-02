/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="">
            <span className="text-2xl font-semibold text-black">🍳 WhatCanICook?</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
