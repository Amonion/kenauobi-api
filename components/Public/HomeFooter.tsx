// components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomeFooter() {
  return (
    <div className="sm:py-16 py-10">
      <div className="custom_container">
        <div className="relative grid md:grid-cols-2 gap-4">
          <div className="">
            <div className="flex-shrink-0 flex items-center mb-5">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={'/images/logos/app_light_logo.png'}
                  alt="Ken Coins"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="h-auto w-[120px]"
                />
              </Link>
            </div>
            <div className="max-w-[400px] mb-3">
              Transform your crypto business with Crypgo Framer, a template for
              startups and blockchain services.
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/`} className="footer_icon">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href={`/`} className="footer_icon">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href={`/`} className="footer_icon">
                <i className="bi bi-facebook"></i>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-start">
              <div className="text-[var(--secondaryTxt)] relative text-xl font-medium mb-5">
                Page Links
              </div>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                Home
              </Link>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                About
              </Link>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                Contact
              </Link>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                Services
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[var(--secondaryTxt)] relative text-xl font-medium mb-5">
                Clients Agreement
              </div>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                Terms & Conditions
              </Link>
              <Link href={`/`} className="hover:text-[var(--custom)] mb-2">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[var(--secondaryTxt)] relative text-xl font-medium mb-5">
                Download App
              </div>
              <Link href="/" className="flex items-center space-x-3 mb-3">
                <Image
                  src={'/images/android.svg'}
                  alt="Ken Coins"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="h-auto w-[200px]"
                />
              </Link>
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={'/images/ios.svg'}
                  alt="Ken Coins"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="h-auto w-[200px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
