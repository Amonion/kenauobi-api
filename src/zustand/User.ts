import { create } from 'zustand'
import _debounce from 'lodash/debounce'
import apiRequest from '@/lib/axios'

interface FetchUser {
  count: number
  message: string
  id: string
  page_size: number
  followers: number
  isFollowed: boolean
  data: User
}

interface FetchUserResponse {
  count: number
  message: string
  page_size: number
  results: User[]
  data: User
  user: User
}

interface UserState {
  userForm: User
  users: User[]
  count: number
  isAllChecked: boolean
  loading: boolean
  page: number
  page_size: number
  selectedUsers: User[]
  searchedUsers: User[]
  searchedUsersResult: User[]
  showProfileSheet: boolean
  deleteUser: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  getUser: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  getMyUser: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  getUsers: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  massDeleteUsers: (
    url: string,
    selectedUsers: User[],
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  resetForm: () => void
  reshuffleResults: () => void
  setForm: (key: keyof User, value: User[keyof User]) => void
  searchUser: (url: string) => void
  setSearchedUserResult: () => void
  setProcessedResults: (data: FetchUserResponse) => void
  setShowProfileSheet: (status: boolean) => void
  toggleChecked: (index: number) => void
  toggleActive: (index: number) => void
  toggleAllSelected: () => void
  updateUser: (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  getUserDetails: (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  updateUsers: (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  sendUsersEmail: (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
  updateMyUser: (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => Promise<void>
}

export interface User {
  _id: string
  address: string
  email: string
  isSuspended: boolean
  isFirstTime: boolean
  online: boolean
  phone: string
  picture: string | File
  country: string
  state: string
  signupIp: string
  status: string
  username: string
  signupLocation: { lat: number; lng: number }
  isActive?: boolean
  isChecked?: boolean
  isVerified: boolean
}

export const UserEmpty = {
  _id: '',
  address: '',
  email: '',
  exams: 0,
  isSuspended: false,
  isFirstTime: false,
  isVerified: false,
  online: false,
  phone: '',
  picture: '',
  country: '',
  state: '',
  signupIp: '',
  signupLocation: { lat: 0, lng: 0 },
  username: '',
  status: '',
}

export const UserStore = create<UserState>((set) => ({
  userForm: UserEmpty,
  users: [],
  count: 0,
  isAllChecked: false,
  loading: false,
  page: 1,
  page_size: 20,
  selectedUsers: [],
  searchedUsers: [],
  searchedUsersResult: [],
  showProfileSheet: false,
  deleteUser: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    set({
      loading: true,
    })
    const response = await apiRequest<FetchUser>(url, {
      method: 'PATCH',
      setMessage,
    })
    if (response) {
    }
  },

  getUser: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      const response = await apiRequest<FetchUserResponse>(url, {
        setMessage,
      })
      const data = response?.data
      if (data) {
        set({
          userForm: data.data,
          loading: false,
        })
      }
    } catch (error: unknown) {
      if (error) return
    }
  },

  getMyUser: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      const response = await apiRequest<FetchUserResponse>(url, {
        setMessage,
      })
      const data = response?.data
      if (data) {
      }
    } catch (error: unknown) {
      if (error) return
    }
  },

  getUsers: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      const response = await apiRequest<FetchUserResponse>(url, { setMessage })
      const data = response?.data
      if (data) {
        UserStore.getState().setProcessedResults(data)
      }
    } catch (error: unknown) {
      console.log(error)
    }
  },

  getUserDetails: async (
    url: string,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      const response = await apiRequest<FetchUserResponse>(url, { setMessage })
      const data = response?.data
      if (data) {
      }
    } catch (error: unknown) {
      console.log(error)
    }
  },

  massDeleteUsers: async (
    url: string,
    selectedUsers: User[],
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      set({ loading: true })
      await apiRequest<FetchUserResponse>(url, {
        method: 'POST',
        body: selectedUsers,
        setMessage,
      })
    } catch (error) {
      console.log(error)
    }
  },

  resetForm: () =>
    set({
      userForm: UserEmpty,
    }),

  reshuffleResults: async () => {
    set((state) => ({
      users: state.users.map((item: User) => ({
        ...item,
        isChecked: false,
        isActive: false,
      })),
    }))
  },

  setForm: (key, value) =>
    set((state) => ({
      userForm: {
        ...state.userForm,
        [key]: value,
      },
    })),

  setSearchedUserResult: () => {
    set((prev) => {
      return {
        hasMoreSearch: prev.searchedUsersResult.length > prev.page_size,
        searchedUsers: prev.searchedUsersResult,
        searchedUsersResult: [],
      }
    })
  },

  searchUser: _debounce(async (url: string) => {
    try {
      const response = await apiRequest<FetchUserResponse>(url)
      if (response) {
        const { results } = response?.data
        const updatedResults = results.map((item: User) => ({
          ...item,
          isChecked: false,
          isActive: false,
        }))
        set({ searchedUsers: updatedResults })
      }
    } catch (error: unknown) {
      console.log(error)
    }
  }, 1000),

  setProcessedResults: ({ count, page_size, results }: FetchUserResponse) => {
    const updatedResults = results.map((item: User) => ({
      ...item,
      isChecked: false,
      isActive: false,
    }))

    set({
      loading: false,
      count,
      page_size,
      users: updatedResults,
    })
  },

  setShowProfileSheet: (status: boolean) => {
    set({ showProfileSheet: status })
  },

  toggleActive: (index: number) => {
    set((state) => {
      const isCurrentlyActive = state.users[index]?.isActive
      const updatedResults = state.users.map((tertiary, idx) => ({
        ...tertiary,
        isActive: idx === index ? !isCurrentlyActive : false,
      }))
      return {
        users: updatedResults,
      }
    })
  },

  toggleAllSelected: () => {
    set((state) => {
      const isAllChecked =
        state.users.length === 0 ? false : !state.isAllChecked
      const updatedResults = state.users.map((item) => ({
        ...item,
        isChecked: isAllChecked,
      }))

      const updatedSelectedItems = isAllChecked ? updatedResults : []

      return {
        users: updatedResults,
        selectedUsers: updatedSelectedItems,
        isAllChecked,
      }
    })
  },

  toggleChecked: (index: number) => {
    set((state) => {
      const updatedResults = state.users.map((tertiary, idx) =>
        idx === index
          ? { ...tertiary, isChecked: !tertiary.isChecked }
          : tertiary
      )

      const isAllChecked = updatedResults.every(
        (tertiary) => tertiary.isChecked
      )
      const updatedSelectedItems = updatedResults.filter(
        (tertiary) => tertiary.isChecked
      )

      return {
        users: updatedResults,
        selectedUsers: updatedSelectedItems,
        isAllChecked: isAllChecked,
      }
    })
  },

  sendUsersEmail: async (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    set({ loading: true })
    await apiRequest<FetchUser>(url, {
      method: 'POST',
      body: updatedItem,
      setMessage,
    })
  },

  updateUser: async (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    set({ loading: true })
    const response = await apiRequest<FetchUser>(url, {
      method: 'PATCH',
      body: updatedItem,
      setMessage,
    })
    const data = response?.data
    if (data) {
    }
  },

  updateUsers: async (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    set({ loading: true })
    const response = await apiRequest<FetchUserResponse>(url, {
      method: 'PATCH',
      body: updatedItem,
      setMessage,
    })
    const data = response?.data
    if (data) {
      UserStore.getState().setProcessedResults(data)
    }
  },

  updateMyUser: async (
    url: string,
    updatedItem: FormData | Record<string, unknown>,
    setMessage: (message: string, isError: boolean) => void
  ) => {
    try {
      set({ loading: true })
      const response = await apiRequest<FetchUser>(url, {
        method: 'PATCH',
        body: updatedItem,
        setMessage,
      })
      const data = response?.data
      if (data) {
        if (!url.includes('follow')) {
        }
        set({
          userForm: data.data,
          loading: false,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      set({ loading: false })
    }
  },
}))
