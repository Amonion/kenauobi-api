'use client'
import Navbar from '@/components/Public/Header'
import React from 'react'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //------------INITIALIZE SOUND, GET USER IP & INTERNET CONNECTION -------------//
  return (
    <div className="bg-[var(--primaryBG)] min-h-[100vh] text-[var(--primaryTxt)]">
      <Navbar />
      {children}
    </div>
  )
}
