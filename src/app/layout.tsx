import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navbar } from './components/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhatCanICook',
  description: 'Find recipes based on the ingredients on your fridge'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full flex flex-col">
          <Navbar />
          {children}
        </div>
        <Analytics />
        <ToastContainer />
      </body>
    </html>
  )
}
