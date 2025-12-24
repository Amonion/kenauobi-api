'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import apiRequest, { ApiResponseInterface } from '@/lib/axios'
import axios from 'axios'
import { AuthStore } from '@/src/zustand/user/AuthStore'
import { validateSignUp, ValidationResult } from '@/lib/validateInputs'
import CustomBtn from '../../CustomBtn'
import SocialAuth from '../SocialAuth'
const SigninPage: React.FC = () => {
  const router = useRouter()
  const [route, setRoute] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ValidationResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    if (route === 'onboarding') {
      router.push(`/${route}`)
      window.location.href = `/${route}`
    } else if (route === 'home') {
      router.push(`/${route}`)
      window.location.href = `/${route}`
    }
  }, [route])

  const handleSubmit = async () => {
    setError(null)

    const { password, email } = formData
    const validation = validateSignUp(password, email)

    if (!validation.valid) {
      setError(validation)
      return
    }

    setLoading(true)
    const form = new FormData()
    form.append('email', formData.email.trim().toLocaleLowerCase())
    form.append('password', formData.password.trim())

    try {
      setLoading(true)
      const response = await apiRequest<ApiResponseInterface>('/users/login/', {
        method: 'POST',
        body: form,
      })

      if (response.status === 200) {
        const { user, token } = response.data
        AuthStore.getState().login(user, token)

        setTimeout(() => {
          if (user.isFirstTime) {
            setRoute('onboarding')
            router.replace('/onboarding')
          } else {
            router.replace('/home')
            setRoute('home')
          }
        }, 100)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setGeneralError(error.response?.data?.message || 'Login failed')
      } else {
        setGeneralError('Unexpected error occurred')
      }
      setLoading(false)
    }
  }

  return (
    <>
      <div className="w-full mb-3">
        <div className="mb-1">Email</div>
        <div className="form_input">
          <i className="bi bi-envelope-at text-lg ml-3"></i>
          <input
            className="custom_input"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
            type="email"
          />
        </div>
        {error?.emailMessage && (
          <div className="text-red-500 auth active">{error.emailMessage}</div>
        )}
      </div>

      <div className="w-full mb-2">
        <div className="mb-1">Password</div>
        <div className="form_input">
          <i className="bi bi-shield-lock text-lg ml-3"></i>
          <input
            className="custom_input"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter your password"
            type={`${showPassword ? 'text' : 'password'}`}
          />
          <i
            onClick={togglePasswordVisibility}
            className={`bi ${
              showPassword ? 'bi-eye' : 'bi-eye-slash'
            }  cursor-pointer text-lg ml-auto mr-3`}
          ></i>
        </div>
        {error?.passwordMessage && (
          <div className="text-red-500 auth active">
            {error.passwordMessage}
          </div>
        )}
      </div>

      <div className="mb-10 flex justify-between">
        <Link href="/sign-up" className="text-[var(--custom-color)]">
          {`Don't have account?`}
        </Link>
        <Link href="/forgotten-password" className="text-[var(--custom-color)]">
          Forgotten password?
        </Link>
      </div>

      {generalError && <div className="sm-response">{generalError}</div>}

      <CustomBtn label="Submit" loading={loading} onClick={handleSubmit} />

      <SocialAuth />
    </>
  )
}

export default SigninPage
