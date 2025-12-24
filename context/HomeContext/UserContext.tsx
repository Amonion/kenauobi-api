'use client'
import { playPopSound } from '@/lib/sound'
import useSocket from '@/src/useSocket'
import { Staff } from '@/src/zustand/app/Staff'
import { MessageStore } from '@/src/zustand/notification/Message'
import {
  SocialNotification,
  SocialNotificationStore,
} from '@/src/zustand/notification/SocialNotification'
import { User, UserStore } from '@/src/zustand/User'
import { AuthStore } from '@/src/zustand/user/AuthStore'
import { createContext, useEffect, useContext, ReactNode, useMemo } from 'react'

const UserContext = createContext<{
  socket: ReturnType<typeof useSocket> | null
}>({
  socket: null,
})

interface UserProviderProps {
  children: ReactNode
}

interface NotificationData {
  socialNotification: SocialNotification
  user: User
  staff: Staff
  unreadNotifications: number
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const socket = useSocket()
  const { user } = AuthStore()
  const { getUserDetails } = UserStore()
  const { setMessage } = MessageStore()

  useEffect(() => {
    if (!user || !socket) return
    socket.on(
      `social_notification_${user?.username}`,
      (data: NotificationData) => {
        playPopSound()

        if (data.socialNotification) {
          SocialNotificationStore.setState((prev) => {
            const notes = [data.socialNotification, ...prev.socialNotifications]
            return {
              socialNotifications: notes,
              unreadNotifications: data.unreadNotifications,
            }
          })
        }
      }
    )

    return () => {
      socket?.off(`social_notification_${user.username}`)
    }
  }, [socket, user?._id])

  useEffect(() => {
    if (!user) return
    getUserDetails(`/users/details}`, setMessage)
  }, [user?._id])

  const value = useMemo(() => ({ socket }), [socket])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)
