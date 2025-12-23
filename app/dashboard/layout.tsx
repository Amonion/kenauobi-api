'use client'
import VerticalNavbar from '@/components/Dashboard/VerticalNavigation'
import React from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //------------INITIALIZE SOUND, GET USER IP & INTERNET CONNECTION -------------//
  return (
    <div className="bg-[var(--primaryBG)] h-[100vh] w-full flex justify-center  text-[var(--primaryTxt)]">
      <div className="custom_container w-full">
        <div className="flex">
          <VerticalNavbar />
          <div className="flex-1 overflow-y-auto w-full overflow-x-hidden  md:px-0 py-5 md:mb-0 mb-[50px]">
            {' '}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
