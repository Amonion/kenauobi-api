'use client'
import { ethers } from 'ethers'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const SocialAuth: React.FC = () => {
  const handleMetaMaskLogin = async () => {
    if (!window.ethereum) {
      alert(
        'MetaMask not installed! Please install metamask in your browser to continue.'
      )
      return
    }

    try {
      // Connect to MetaMask
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()

      // Get wallet address
      const address = await signer.getAddress()

      // Sign a message to prove ownership
      const message = 'Login to MyApp'
      const signature = await signer.signMessage(message)

      // Call NextAuth credentials provider
      await signIn('credentials', {
        address,
        signature,
        callbackUrl: '/dashboard', // where to redirect after login
      })
    } catch (err) {
      console.error('MetaMask login failed', err)
    }
  }
  return (
    <>
      <div className="text-center mt-5">
        <div className="flex mb-3 items-center">
          <div className="custom_line" />
          <div className="mx-3 text-[var(--secondaryTxt)]">OR</div>
          <div className="custom_line" />
        </div>
        <div className="flex justify-center mb-5">
          <Link href="/" className="social_icon">
            <Image
              src={'/images/google.png'}
              alt="Ken Coins"
              sizes="100vw"
              width={0}
              height={0}
              className="h-[25px] w-[25px]"
            />
          </Link>
          <Link href="/" className="social_icon">
            <Image
              src={'/images/apple.png'}
              alt="Ken Coins"
              sizes="100vw"
              width={0}
              height={0}
              className="h-[25px] w-[25px]"
            />
          </Link>
          <div onClick={handleMetaMaskLogin} className="social_icon">
            <Image
              src={'/images/metamask.png'}
              alt="Ken Coins"
              sizes="100vw"
              width={0}
              height={0}
              className="h-[25px] w-[25px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialAuth
