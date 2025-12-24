// components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Optional: install lucide-react for icons
import { useTheme } from '@/context/ThemeProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const navItems = [
    { name: 'Reviews', href: '#reviews' },
    { name: 'Currencies', href: '#currencies' },
    { name: 'Features', href: '#features' },
    { name: 'Faqs', href: '#faqs' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm border-b border-b-gray-800">
      <div className="custom_container">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center space-x-3">
              <Image
                src={
                  theme === 'dark'
                    ? '/images/logos/app_light_logo.png'
                    : '/images/logos/app_dark_logo.png'
                }
                alt="Ken Coins"
                sizes="100vw"
                width={0}
                height={0}
                className="h-auto w-[120px]"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[var(--custom)] text-[var(--secondaryTxt)] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link href={`/sign-in`} className="custom_btn">
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} color={theme === 'dark' ? '#FF9B07' : '#FF9B07'} />
              ) : (
                <Menu
                  color={theme === 'dark' ? '#FF9B07' : '#FF9B07'}
                  size={28}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--secondaryTxt)] hover:text-[var(--custom)] transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="custom_btn bg-[var(--custom)] text-black">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
