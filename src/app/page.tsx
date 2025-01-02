'use client'

import { DemoPage } from './components/demo'
import { FooterPage, HeroPage } from './components/landing'

export default function Home() {
  return (
    <>
      <HeroPage />
      <DemoPage />
      <FooterPage />
    </>
  )
}
