import { Metadata, Viewport } from 'next'
import { baseViewport, generatePageMetadata } from '../metadata'
import HomePage from '@/components/Public/HomePage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Home - Connect, Learn & Excel with Peers on Schooling Social',
  description:
    'Learn about our mission to connect students and help them excel academically.',
  image: '/og-about.jpg',
  url: '/',
})

export const viewport: Viewport = baseViewport

const Home: React.FC = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default Home
