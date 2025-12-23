'use client'

import { useState } from 'react'
import {
  Home,
  Users,
  BookOpen,
  Trophy,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  User,
  Bell,
  Search,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Profile', href: '/exams', icon: BookOpen },
  { name: 'Transactions', href: '/groups', icon: Users },
  { name: 'Notifications', href: '/leaderboard', icon: Trophy },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavContent = () => (
    <div className="flex flex-col flex-1 sticky top-0">
      <div className="flex-shrink-0 flex mb-5 items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={'/images/logos/app_light_logo.png'}
            alt="Ken Coins"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-[150px]"
          />
        </Link>
      </div>

      <nav className="w-[250px]">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-4 py-3 transition-all duration-200
                    ${
                      isActive
                        ? 'text-[var(--custom)]'
                        : 'hover:text-[var(--custom)]'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={22} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </div>
            )
          })}
        </div>
      </nav>

      <div className="p-4 mt-auto  border-t border-[var(--border)] max-w-[200px]">
        <button className="flex items-center gap-4 w-full py-3 text-[var(--danger)] hover:text-[var(--custom)]">
          <LogOut size={22} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="">
      <aside className="hidden py-5 md:flex md:flex-col h-[100vh] z-40 sticky top-0">
        <NavContent />
      </aside>

      <div className="md:hidden border-t border-t-[var(--border)] flex justify-center fixed bottom-0 left-0 right-0 z-30 bg-[var(--secondaryBG)]">
        <div className="custom_container w-full">
          <div className="flex items-center justify-between h-[50px]">
            <Link href={'/dashboard'}>
              <LayoutDashboard />
            </Link>
            <Link href={'/dashboard'}>
              <User />
            </Link>
            <Link href={'/dashboard'}>
              <Search />
            </Link>
            <Link href={'/dashboard'}>
              <Bell />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <aside className="relative py-5 flex flex-col px-3 h-full bg-[var(--secondaryBG)] shadow-xl">
            <NavContent />
          </aside>
        </div>
      )}
    </div>
  )
}
