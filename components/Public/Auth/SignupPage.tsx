'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Cookies from 'js-cookie'
import apiRequest, { ApiResponseInterface } from '@/lib/axios'
import axios from 'axios'
import { getDeviceInfo } from '@/lib/helpers'
import { validateInputs, ValidationResult } from '@/lib/validateInputs'
import CustomBtn from '@/components/CustomBtn'
import SocialAuth from '../SocialAuth'

const SignupPage: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ValidationResult | null>(null)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const [isChecked, setIsChecked] = useState(false)
  const [sFormData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async () => {
    setError(null)

    const { password, email, confirmPassword } = sFormData
    const validation = validateInputs(password, confirmPassword, email)
    if (!validation.valid) {
      setError(validation)
      return
    }

    // if (!locating) {
    //   setGeneralError('Please enable location to continue with signup.')
    //   setLoading(false)
    //   return
    // }

    if (!isChecked) {
      setGeneralError('Please accept the terms and conditions to continue.')
      return
    }

    setLoading(true)

    const form = new FormData()
    form.append('email', sFormData.email.trim().toLocaleLowerCase())
    form.append('password', sFormData.password.trim())
    form.append('signupOS', getDeviceInfo().os)
    form.append('signupBrowser', getDeviceInfo().browser)
    form.append('signupDevice', getDeviceInfo().device)
    try {
      setLoading(true)
      const response = await apiRequest<ApiResponseInterface>('/users/', {
        method: 'POST',
        body: form,
      })

      if (response.status === 200) {
        Cookies.set('signup_success', 'true', { expires: 0.01 })
        router.replace('/signup-successful/')
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
      <form className="w-full">
        <div className="w-full mb-3">
          <div className="mb-1">Email</div>
          <div className="form_input">
            <i className="bi bi-envelope-at text-lg ml-3"></i>
            <input
              className="custom_input"
              name="email"
              value={sFormData.email}
              onChange={(e) =>
                setFormData({ ...sFormData, email: e.target.value })
              }
              placeholder="Enter your email"
              type="email"
            />
          </div>
          {error?.emailMessage && (
            <div className="text-red-500 text-[12px]">{error.emailMessage}</div>
          )}
        </div>

        <div className="w-full mb-3">
          <div className="mb-1">Password</div>
          <div className="form_input">
            <i className="bi bi-shield-lock text-lg ml-3"></i>
            <input
              className="custom_input"
              name="password"
              value={sFormData.password}
              onChange={(e) =>
                setFormData({ ...sFormData, password: e.target.value })
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
            <div className="text-red-500 text-[12px]">
              {error.passwordMessage}
            </div>
          )}
        </div>

        <div className="w-full mb-2">
          <div className="mb-1">Confirm Password</div>
          <div className="form_input">
            <i className="bi bi-shield-lock text-lg ml-3"></i>
            <input
              className="custom_input"
              name="confirmPassword"
              value={sFormData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...sFormData, confirmPassword: e.target.value })
              }
              placeholder="Confirm your password"
              type={`${showPassword ? 'text' : 'password'}`}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`bi ${
                showPassword ? 'bi-eye' : 'bi-eye-slash'
              }  cursor-pointer text-lg ml-auto mr-3`}
            ></i>
          </div>
          {error?.confirmPasswordMessage && (
            <div className="text-red-500 text-[12px] active">
              {error.confirmPasswordMessage}
            </div>
          )}
        </div>
        <div className="mb-10 flex justify-between">
          <Link href="/sign-in" className="hover:text-[var(--custom)]">
            {`Don't have account?`}
          </Link>
          <Link
            href="/forgotten-password"
            className="hover:text-[var(--custom)]"
          >
            Forgotten password?
          </Link>
        </div>

        <div className="mb-2 text-sm">
          {isChecked ? (
            <i
              onClick={() => setIsChecked(false)}
              className="bi bi-check-square text-[12px] mr-2 text-[var(--custom)] cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => setIsChecked(true)}
              className="bi bi-square text-[12px] mr-2 cursor-pointer"
            ></i>
          )}
          By creating account you have agreed to our{' '}
          <Link href="/terms-conditions" className="text-[var(--custom)]">
            terms and conditions
          </Link>
          <div className="f-response-msg auth"></div>
        </div>

        {generalError && <div className="sm-response">{generalError}</div>}

        <CustomBtn
          label="Create Account"
          loading={loading}
          onClick={handleSubmit}
        />

        <SocialAuth />
      </form>
    </>
  )
}

export default SignupPage
