import { Metadata, Viewport } from 'next'
import { baseViewport, generatePageMetadata } from '@/app/metadata'
import SignupPage from '@/components/Public/Auth/SignupPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Sign Up - Connect, Learn & Excel with Peers on Schooling Social',
  description:
    'Learn about our mission to connect students and help them excel academically.',
  image: '/og-about.jpg',
  url: '/',
})

export const viewport: Viewport = baseViewport

const Signin: React.FC = () => {
  return (
    <>
      <SignupPage />
    </>
  )
}

export default Signin
