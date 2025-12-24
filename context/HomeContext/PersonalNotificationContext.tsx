'use client'
import useSocket from '@/src/useSocket'
import { MessageStore } from '@/src/zustand/notification/Message'
import { UserNotificationStore } from '@/src/zustand/notification/UserNotification'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useContext, ReactNode, useMemo } from 'react'

const PersonalNotificationContext = createContext<{
  socket: ReturnType<typeof useSocket> | null
}>({
  socket: null,
})

interface PersonalNotificationProviderProps {
  children: ReactNode
}

export const PersonalNotificationProvider = ({
  children,
}: PersonalNotificationProviderProps) => {
  const socket = useSocket()
  const { personalNotifications, readPersonalNotifications } =
    UserNotificationStore()
  const { setMessage } = MessageStore()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/home/notifications/personal' && personalNotifications) {
      const notes = personalNotifications.filter((e) => e.unread === true)
      if (notes.length > 0) {
        const noteIds = notes.map((note) => note._id)
        const form = new FormData()
        form.append('ids', JSON.stringify(noteIds))
        readPersonalNotifications(
          `/notifications/personal/read/?username=`,
          form,
          setMessage
        )
      }
    }
  }, [pathname, personalNotifications])

  const value = useMemo(() => ({ socket }), [socket])

  return (
    <PersonalNotificationContext.Provider value={value}>
      {children}
    </PersonalNotificationContext.Provider>
  )
}

export const usePersonalNotificationContext = () =>
  useContext(PersonalNotificationContext)
