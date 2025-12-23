'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import CoinTicker from '@/components/Dashboard/CoinTicker'
import CustomBtn from '@/components/CustomBtn'

const CryptoChart = dynamic(() => import('@/components/Dashboard/CryptoChat'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center bg-slate-900 rounded-2xl text-slate-500">
      Loading Chart...
    </div>
  ),
})

export default function CryptoPage() {
  const [coins, setCoins] = useState<any[]>([])
  const [selectedCoinId, setSelectedCoinId] = useState('bitcoin')
  const [chartData, setChartData] = useState<any[]>([])
  const [loadingChart, setLoadingChart] = useState(true)

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) => setCoins(data))
  }, [])

  useEffect(() => {
    setLoadingChart(true)
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoinId}/market_chart?vs_currency=usd&days=7`
    )
      .then((res) => res.json())
      .then((data) => {
        // Map CoinGecko [ms, price] to { time, value } in seconds
        const formatted = data.prices.map(
          ([time, price]: [number, number]) => ({
            time: Math.floor(time / 1000), // Convert ms to s
            value: price,
          })
        )
        setChartData(formatted)
        setLoadingChart(false)
      })
  }, [selectedCoinId])

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-2 mb-5 gap-5">
        <div className="rounded-xl space-y-3 p-6 bg-[var(--secondaryBG)]">
          <div className="flex gap-2 items-center">
            <Image
              src={'/images/user.jpg'}
              alt="Ken Coins"
              sizes="100vw"
              width={0}
              height={0}
              className="h-12 w-12 object-cover rounded-full"
            />
            <div className="font-medium text-lg">malvisbrown@gmail.com</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <div className="">Total Balance</div>
              <div className="text-2xl gap-2 text-[var(--secondaryTxt)]">
                ₦456,023.00{' '}
                <span className="text-[12px] text-green-400">+23.44%</span>
              </div>
            </div>
            <div className="">
              <div className="">Crypto Balance</div>
              <div className="text-2xl gap-2 text-[var(--custom)]">
                $56,023.00{' '}
                <span className="text-[12px] text-red-500">-23.44%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl space-y-3 p-6 bg-[var(--secondaryBG)]">
          <div className="">
            <div className="flex justify-between gap-2">
              <div className="text-lg">Exchange</div>
              <div className="">1BTC = $85,000.22</div>
            </div>
            <div className="rounded-[10px] bg-[var(--primaryBG)]">
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="text-lg">You Sell</div>
                  <div className="relative">
                    <div className="flex gap-2 cursor-pointer items-center">
                      <img
                        src={'/images/btc.svg'}
                        alt={'Bitcoin name'}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <i className="bi bi-chevron-down text-[var(--custom)]"></i>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="border-b border-b-[var(--border)] flex-1" />
                  <i className="bi bi-arrow-down-up mx-3 text-lg"></i>
                  <div className="border-b border-b-[var(--border)] flex-1" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg">You Get</div>
                  <div className="relative">
                    <div className="flex gap-2 cursor-pointer items-center">
                      <img
                        src={'/images/usdt.svg'}
                        alt={'Bitcoin name'}
                        className="w-6 h-6 object-contain"
                      />
                      <i className="bi bi-chevron-down text-[var(--custom)]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">Enter BTC Amount</div>
            <div className="form_input">
              <input
                className="custom_input"
                name="amount"
                placeholder="Enter your amount"
                type={`number`}
              />
            </div>
          </div>
          <CustomBtn label="Exchange" loading={false} />
        </div>
      </div>
      <div className="mb-5 flex justify-center">
        <div className="grid max-w-[400px] w-full grid-cols-2 gap-3 items-center">
          <CustomBtn label="Deposit" loading={false} />
          <CustomBtn
            label="Withdraw"
            loading={false}
            className="bg-[var(--secondaryBG)] text-[var(--secondaryTxt)] border border-[var(--border)]"
          />
        </div>
      </div>
      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {!loadingChart ? (
            <CryptoChart
              data={chartData}
              coinName={
                selectedCoinId.charAt(0).toUpperCase() + selectedCoinId.slice(1)
              }
            />
          ) : (
            <div className="h-[400px] bg-slate-900 rounded-2xl animate-pulse" />
          )}
        </div>
        {coins.length > 0 && (
          <CoinTicker
            coins={coins}
            activeId={selectedCoinId}
            onSelect={(id) => setSelectedCoinId(id)}
          />
        )}
      </div>
    </main>
  )
}
