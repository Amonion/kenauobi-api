'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import CoinTicker from '@/components/Dashboard/CoinTicker'
import CustomBtn from '@/components/CustomBtn'
import RecentTransactions from '@/components/Dashboard/RecentTransactions'
import ListedCurrencies from '@/components/Dashboard/ListedCurrencies'

export default function CryptoPage() {
  return (
    <main className="min-h-screen space-y-7">
      <div className="grid md:grid-cols-2 gap-10 md:gap-5">
        <div className="rounded-xl flex flex-col space-y-3 sm:p-6 sm:bg-[var(--secondaryBG)]">
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
              <div className="sm:text-2xl gap-2 text-[var(--secondaryTxt)]">
                ₦456,023.00{' '}
                <span className="text-[12px] text-green-400">+23.44%</span>
              </div>
            </div>
            <div className="">
              <div className="">Crypto Balance</div>
              <div className="sm:text-2xl gap-2 text-[var(--custom)]">
                $56,023.00{' '}
                <span className="text-[12px] text-red-500">-23.44%</span>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="mb-1">Your Wallets</div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:p-2 bg-[var(--primaryBG)] rounded-[10px]">
              <div className="flex">
                <div className="flex flex-col items-end font-medium">
                  <div className="flex items-center">
                    <img
                      src={'/images/btc.svg'}
                      alt={'Bitcoin'}
                      className="w-[18px] h-[18px]"
                    />
                    <div className="text-[var(--secondaryTxt)] ml-2">
                      Bitcoin
                    </div>
                  </div>
                  <div className="text-sm">Balance</div>
                </div>
                <div className="mx-2" />
                <div className="flex flex-col">
                  <span className="mr-auto">$0.004</span>
                  <div className="mr-auto">₦200,459.11</div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-end font-medium">
                  <div className="flex items-center">
                    <img
                      src={'/images/usdt.svg'}
                      alt={'Bitcoin'}
                      className="w-[18px] h-[18px]"
                    />
                    <div className="text-[var(--secondaryTxt)] ml-2">
                      Tether
                    </div>
                  </div>
                  <div className="text-sm">Balance</div>
                </div>
                <div className="mx-2" />
                <div className="flex flex-col">
                  <span className="mr-auto">$0.004</span>
                  <div className="mr-auto text-sm">₦200,459.11</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl space-y-3 p-3 sm:p-6 bg-[var(--secondaryBG)]">
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
      <div className="flex justify-center">
        <div className="grid max-w-[400px] w-full grid-cols-2 gap-3 items-center">
          <CustomBtn label="Deposit" loading={false} />
          <CustomBtn
            label="Withdraw"
            loading={false}
            className="bg-[var(--secondaryBG)] text-[var(--secondaryTxt)] border border-[var(--border)]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 items-start">
        <ListedCurrencies />
        <RecentTransactions />
      </div>
    </main>
  )
}
