'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full w-full">
      <div className="custom_container">
        <div className="flex items-center min-h-[100vh]">
          <div className="grid md:grid-cols-2 items-center bg-[var(--secondaryBG)] w-full md:border md:border-[var(--border)] overflow-hidden rounded-[15px]">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/coins.webp')`,
              }}
            ></div>
            <div className="py-10 flex flex-col items-center">
              <div className="flex justify-center mb-5">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src={'/images/logos/app_light_logo.png'}
                    alt="Ken Coins"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="h-auto w-[170px]"
                  />
                </Link>
              </div>
              <div className="w-full max-w-[400px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
