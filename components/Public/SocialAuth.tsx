'use client'
import Image from 'next/image'
import Link from 'next/link'

const SocialAuth: React.FC = () => {
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
          <div className="social_icon">
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
