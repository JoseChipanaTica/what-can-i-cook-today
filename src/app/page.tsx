'use client'

import { DemoPage } from './components/demo'
import { ContentPage, FooterPage, HeroPage } from './components/landing'

export default function Home() {
  return (
    <>
      <HeroPage />
      <DemoPage />
      <ContentPage />
      <FooterPage />
    </>
  )
}
