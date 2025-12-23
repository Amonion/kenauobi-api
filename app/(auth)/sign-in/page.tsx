import { Metadata, Viewport } from 'next'
import { baseViewport, generatePageMetadata } from '@/app/metadata'
import SigninPage from '@/components/Public/Auth/SigninPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Sign In - Connect, Learn & Excel with Peers on Schooling Social',
  description:
    'Learn about our mission to connect students and help them excel academically.',
  image: '/og-about.jpg',
  url: '/',
})

export const viewport: Viewport = baseViewport

const Signin: React.FC = () => {
  return (
    <>
      <SigninPage />
    </>
  )
}

export default Signin
