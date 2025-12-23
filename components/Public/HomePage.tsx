'use client'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeProvider'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import HomeFooter from './HomeFooter'

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Amazing platform! Highly recommend.',
    avatar: '/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Best student community ever.',
    avatar: '/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Alex Brown',
    text: 'Helped me ace my exams!',
    avatar: '/avatar3.jpg',
  },
  {
    id: 4,
    name: 'Sarah Lee',
    text: 'Love the study groups feature.',
    avatar: '/avatar4.jpg',
  },
  {
    id: 5,
    name: 'Mike Wilson',
    text: 'Incredible learning experience.',
    avatar: '/avatar5.jpg',
  },
  // Add more if you want, but 5 works perfectly
]

const HomePage: React.FC = () => {
  const { theme } = useTheme()

  return (
    <>
      <div>
        <div className="custom_container">
          <div className="grid gap-5 md:grid-cols-2 py-[60px] min-h-[80vh] items-center">
            <div className="flex flex-col items-start">
              <div className="rounded-full px-4 border border-[var(--border)] mb-5 py-1 bg-[var(--foregroundBG)] text-[var(--custom)]">
                Future of crypto trading
              </div>
              <div className="text-[var(--secondaryTxt)] text-[30px] leading-[40px] sm:text-[50px] sm:leading-[60px] lg:text-[80px] font-medium lg:leading-[90px] mb-5 md:mb-10">
                Fast & Secure Cryptocurrency Exchange
              </div>
              <div className="mb-10">
                Trade cryptocurrencies with ease, security, and advanced
                features on our cutting-edge platform.
              </div>
              <div>
                <button className="custom_btn bg-[var(--custom)] text-black">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                src={
                  theme === 'dark'
                    ? '/images/dark_hero.png'
                    : '/images/logos/app_dark_logo.png'
                }
                alt="Ken Coins"
                sizes="100vw"
                width={0}
                height={0}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
            What our <span className="text-[var(--custom)]">clients say</span>
          </div>
          <div className="mx-auto text-center max-w-[700px]">
            Our clients from different countries that have used our services;
            have tested and trusted our swift deposit, exchange and withdrawal
            processes.
          </div>
          <div className="relative overflow-hidden py-12">
            <div className="flex animate-marquee items-center gap-12">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-80 rounded-xl bg-[var(--secondaryBG)] p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[var(--secondaryTxt)]">
                        {review.name}
                      </p>
                      <p className="text-sm">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {reviews.map((review) => (
                <div
                  key={`dup-${review.id}`}
                  className="flex-shrink-0 w-80 rounded-xl bg-[var(--secondaryBG)] p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[var(--secondaryTxt)]">
                        {review.name}
                      </p>
                      <p className="text-sm">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
            Most Traded{' '}
            <span className="text-[var(--custom)]">cryptocurrencies</span>
          </div>
          <div className="mx-auto text-center max-w-[700px] mb-5">
            The dynamics of the markets weekly can be seen below, with some
            cryptocurrencies being traded more and others less.
          </div>
          <div className="relative grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--secondaryBG)] px-3 py-4 rounded-[10px]">
              <div className="mb-3">Highest Volume</div>
              <Image
                src={`/images/btc.svg`}
                alt={'Bitcoin'}
                width={30}
                height={30}
                className="mb-3"
              />
              <div className="mb-1 text-xl font-semibold text-[var(--secondaryTxt)]">
                Bitcoin
              </div>
              <div className="text-xl text-[var(--secondaryTxt)]">
                $3,000.45
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="flex items-center justify-between mb-5">
            <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
              Our Listed{' '}
              <span className="text-[var(--custom)]">Cryptocurrencies</span>
            </div>
            <Link
              href={`/`}
              className="ml-3 text-sm flex items-center rounded-full text-[var(--secondaryTxt)] px-5 py-[6px] border border-[var(--custom)]"
            >
              Start Trading{' '}
              <i className="bi bi-arrow-right text-[var(--custom)] ml-2"></i>
            </Link>
          </div>
          <div className="relative w-full overflow-auto">
            <table className="w-full coin_table">
              <thead className="bg-[var(--custom)] text-black">
                <tr>
                  <td>Coin Name</td>
                  <td>Coin Price</td>
                  <td>24h %</td>
                  <td>24h High Price</td>
                  <td>24h Low Price</td>
                  <td>Direction</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/btc.svg`}
                        alt={'Bitcoin'}
                        width={20}
                        height={20}
                        className="mr-2"
                      />{' '}
                      Bitcoin
                    </div>
                  </td>
                  <td>$98,000.43</td>
                  <td>
                    <div className={`text-red-500`}>12.22%</div>
                  </td>
                  <td>$98,322.11</td>
                  <td>$97,322.11</td>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/bear.png`}
                        alt={'Bitcoin'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[100px] h-auto"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/btc.svg`}
                        alt={'Bitcoin'}
                        width={20}
                        height={20}
                        className="mr-2"
                      />{' '}
                      Bitcoin
                    </div>
                  </td>
                  <td>$98,000.43</td>
                  <td>
                    <div className={`text-green-500`}>12.22%</div>
                  </td>
                  <td>$98,322.11</td>
                  <td>$97,322.11</td>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/bull.png`}
                        alt={'Bitcoin'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[100px] h-auto"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/btc.svg`}
                        alt={'Bitcoin'}
                        width={20}
                        height={20}
                        className="mr-2"
                      />{' '}
                      Bitcoin
                    </div>
                  </td>
                  <td>$98,000.43</td>
                  <td>
                    <div className={`text-red-500`}>12.22%</div>
                  </td>
                  <td>$98,322.11</td>
                  <td>$97,322.11</td>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/bear.png`}
                        alt={'Bitcoin'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[100px] h-auto"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/btc.svg`}
                        alt={'Bitcoin'}
                        width={20}
                        height={20}
                        className="mr-2"
                      />{' '}
                      Bitcoin
                    </div>
                  </td>
                  <td>$98,000.43</td>
                  <td>
                    <div className={`text-green-500`}>12.22%</div>
                  </td>
                  <td>$98,322.11</td>
                  <td>$97,322.11</td>
                  <td>
                    <div className="flex items-center font-semibold">
                      <Image
                        src={`/images/bull.png`}
                        alt={'Bitcoin'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[100px] h-auto"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
            Most Traded{' '}
            <span className="text-[var(--custom)]">Cryptocurrencies</span>
          </div>
          <div className="mx-auto text-center max-w-[700px] mb-5">
            The dynamics of the markets weekly can be seen below, with some
            cryptocurrencies being traded more and others less.
          </div>
          <div className="relative grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4">
            <div className="home_card">
              <i className="bi bi-people card_icon"></i>
              <div className="mb-1 leading-[45px] text-[40px] font-bold text-[var(--custom)]">
                100K <span className="text-[30px] -ml-2">+</span>
              </div>
              <div className="text-lg">Active Users</div>
            </div>
            <div className="home_card">
              <i className="bi bi-headset card_icon"></i>
              <div className="mb-1 leading-[45px] text-[40px] font-bold text-[var(--custom)]">
                24/7
              </div>
              <div className="text-lg">Support Agents</div>
            </div>
            <div className="home_card">
              <i className="bi bi-globe-americas card_icon"></i>
              <div className="mb-1 leading-[45px] text-[40px] font-bold text-[var(--custom)]">
                81
              </div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="home_card">
              <i className="bi bi-cash-coin card_icon"></i>
              <div className="mb-1 leading-[45px] text-[40px] font-bold text-[var(--custom)]">
                $100M <span className="text-[30px] -ml-2">+</span>
              </div>
              <div className="text-lg">Total Volume</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
            We Deliver{' '}
            <span className="text-[var(--custom)]">Best Solutions</span>
          </div>
          <div className="mx-auto text-center max-w-[700px] mb-10">
            One application with multiple options to give you freedom of buying
            & selling.
          </div>

          <div className="relative grid gap-4 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="flex items-start z-10 relative pt-10 mb-auto">
                <div className="flex flex-col items-end">
                  <div className="text-[var(--secondaryTxt)] text-xl font-medium">
                    Planning
                  </div>
                  <div className="">
                    Map the crypto projects scope with framer template
                  </div>
                </div>
                <div className="service_circle -right-10 top-10">
                  <Image
                    src={`/images/plan.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
              </div>
              <div className="flex items-start z-10 relative pb-10">
                <div className="flex flex-col items-end">
                  <div className="text-[var(--secondaryTxt)] text-xl font-medium">
                    Prototype
                  </div>
                  <div className="">
                    Build crypto website test for your product and apps
                  </div>
                </div>
                <div className="service_circle -right-10 bottom-10 ">
                  <Image
                    src={`/images/type.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <Image
                src={`/images/phone.png`}
                alt={'Bitcoin'}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[500px] w-auto"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-start z-10 relative pt-10 mb-auto">
                <div className="service_circle -left-10 top-10">
                  <Image
                    src={`/images/filter.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
                <div className="flex flex-col items-start pl-6">
                  <div className="text-[var(--secondaryTxt)] text-xl font-medium">
                    Planning
                  </div>
                  <div className="">
                    Map the crypto projects scope with framer template
                  </div>
                </div>
              </div>
              <div className="flex items-start z-10 relative pb-10">
                <div className="service_circle -left-10 bottom-10">
                  <Image
                    src={`/images/rocket.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
                <div className="flex flex-col items-start pl-7">
                  <div className="text-[var(--secondaryTxt)] text-xl font-medium">
                    Prototype
                  </div>
                  <div className="">
                    Build crypto website test for your product and apps
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full">
              <Image
                src={`/images/cyclic.png`}
                alt={'Bitcoin'}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[500px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-16">
        <div className="custom_container">
          <div className="rounded-[15px] border border-[var(--border)] bg-[var(--secondaryBG)] p-[50px] flex items-center justify-between">
            <div className="max-w-[800px]">
              <div className="text-[40px] text-[var(--secondaryTxt)]">
                Crypto powered by framer platform
              </div>
              <div className="">
                Our landing page empower framer developers to have free, safer
                and more trustworthy experiences get our template now and build
                your.
              </div>
            </div>
            <div className="">
              <button className="custom_btn bg-[var(--custom)] text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:pt-16 pt-10">
        <div className="custom_container">
          <div className="relative grid gap-4 md:grid-cols-2">
            <div className="-mt-[120px]">
              <Image
                src={`/images/locked.svg`}
                alt={'Bitcoin'}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="">
              <div className="text-[30px] font-semibold text-[var(--secondaryTxt)]">
                Create Your Cryptocurrency{' '}
                <span className="text-[var(--custom)]">Portfolio Today</span>
              </div>
              <div className="max-w-[700px] mb-[40px]">
                One application with multiple options to give you freedom of
                buying & selling.
              </div>
              <div className="flex text-[20px] py-5 text-[var(--secondaryTxt)] items-center border-b border-b-[var(--border)]">
                <div className="service_circle rel mr-3">
                  <Image
                    src={`/images/plan.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
                Manage Your Portfolio
              </div>
              <div className="flex text-[20px] py-5 text-[var(--secondaryTxt)] items-center border-b border-b-[var(--border)]">
                <div className="service_circle rel mr-3">
                  <Image
                    src={`/images/plan.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
                Manage Your Portfolio
              </div>
              <div className="flex text-[20px] py-5 text-[var(--secondaryTxt)] items-center">
                <div className="service_circle rel mr-3">
                  <Image
                    src={`/images/plan.png`}
                    alt={'Bitcoin'}
                    width={25}
                    height={25}
                    sizes="100vw"
                    className=""
                  />
                </div>
                Manage Your Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="custom_container">
          <div className="relative grid gap-4 items-center md:grid-cols-2">
            <div className="">
              <div className="text-[30px] font-semibold text-[var(--secondaryTxt)]">
                Upgrade Your{' '}
                <span className="text-[var(--custom)]">Crypto Business</span>
              </div>
              <div className="max-w-[700px] mb-[40px]">
                Get faster, safer, more affordable cloud object storage with no
                centeral point of failure.
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">100% Secure</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">Free figma file</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">A fraction of the cost</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">Powerful in performance</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">More durable</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">Designed for crypto</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">Easier to use</div>
                </div>
                <div className="flex items-center text-[var(--secondaryTxt)]">
                  <CheckCircle className="text-[var(--custom)] mr-3" />
                  <div className="text-lg">100% free framer template</div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src={`/images/meter.png`}
                alt={'Bitcoin'}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <div className="custom_container">
          <div className="text-center text-[30px] font-semibold text-[var(--secondaryTxt)]">
            Frequently Asked{' '}
            <span className="text-[var(--custom)]">Questions</span>
          </div>
          <div className="mx-auto text-center max-w-[700px] mb-10">
            One application with multiple options to give you freedom of buying
            & selling.
          </div>

          <div className="relative flex flex-col gap-4 items-center">
            <div className="rounded-[15px] max-w-[1000px] border border-[var(--border)] bg-[var(--secondaryBG)] p-[20px] items-center justify-between">
              <div className="text-[var(--secondaryTxt)] relative text-xl font-medium">
                What does Ken Coins do?{' '}
                <i className="bi bi-x-lg font-bold absolute right-0 top-0 text-[var(--custom)]"></i>
              </div>
              <div className="text-sm mt-5">
                Crypgo is short for Crypgocurrency, which refers to a type of
                digital or virtual currency that uses Crypgographic techniques
                for secure transactions. It operates on decentralized networks,
                often based on blockchain technology, a distributed ledger that
                records all transactions transparently and immutably.{' '}
              </div>
            </div>
            <div className="rounded-[15px] w-full max-w-[1000px] border border-[var(--border)] bg-[var(--secondaryBG)] p-[20px] items-center justify-between">
              <div className="text-[var(--secondaryTxt)] relative text-xl font-medium">
                Is crypto available worldwide?{' '}
                <i className="bi bi-plus-lg font-bold absolute right-0 top-0 text-[var(--custom)]"></i>
              </div>
              <div className="text-sm hidden mt-5">
                Crypgo is short for Crypgocurrency, which refers to a type of
                digital or virtual currency that uses Crypgographic techniques
                for secure transactions. It operates on decentralized networks,
                often based on blockchain technology, a distributed ledger that
                records all transactions transparently and immutably.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter />
    </>
  )
}

export default HomePage
