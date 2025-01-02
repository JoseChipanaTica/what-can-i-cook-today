'use client'

import { ChevronRightIcon, GithubIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroPage() {
  return (
    <section className="text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 space-y-10">
        <Link
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full   hover:bg-gray-200"
          role="alert"
        >
          <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span>{' '}
          <span className="text-sm font-medium">{`WhatCanICook is out! See what's new`}</span>
          <ChevronRightIcon className="w-4 h-4" />
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-black">
          What can I cook today? 🍳
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-black">
          WhatCanICook helps you find recipes based on the ingredients you have at home. You can also search for recipes
          by name.
        </p>
      </div>
    </section>
  )
}

export function ContentPage() {
  return (
    <section className="">
      <div className="flex flex-col text-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="font-light text-gray-200 sm:text-lg">
          <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white">
            Speak & Practice your speaking skills
          </h2>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            SpeakMentor helps you practice your speaking skills by providing feedback on your pronunciation and grammar.
          </p>
        </div>
        <div className="p-4">
          <Image
            className="w-full rounded-lg shadow-lg shadow-primary"
            src="/feature.png"
            alt="office content 1"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}

export function CTAPage() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">Get started today</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
            Sign up for SpeakMentor today and start practicing your speaking skills
          </p>
        </div>
      </div>
    </section>
  )
}

export function FooterPage() {
  return (
    <footer className="p-4 border-t border-gray-600/10 mt-4">
      <div className="mx-auto max-w-screen-xl text-center flex justify-between items-center content-center">
        <Link href="/" className="flex justify-center items-center text-2xl font-semibold text-black">
          🍳 WhatCanICook?
        </Link>

        <div className="flex justify-center items-center">
          <div>
            <Link href="https://github.com/JoseChipanaTica/speak-mentor" target="_blank" className="hover:text-primary">
              <GithubIcon />
            </Link>
          </div>
          <div>
            <Link href="https://x.com/josepaulct" target="_blank" className="hover:text-primary">
              <XIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function LandingPage() {
  return (
    <>
      <HeroPage />
      <ContentPage />
      <CTAPage />
      <FooterPage />
    </>
  )
}
