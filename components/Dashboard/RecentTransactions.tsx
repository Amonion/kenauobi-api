'use client'
import React from 'react'

export default function RecentTransactions() {
  return (
    <div className="bg-[var(--secondaryBG)] rounded-[10px] p-3">
      <div className="text-lg text-[var(--secondaryTxt)] mb-1">
        Recent Transactions
      </div>
      <div className="flex justify-between py-3 items-start border-b border-b-[var(--border)]">
        <div className="flex items-start gap-1">
          <img src={'/images/btc.svg'} alt={'Bitcoin'} className="w-7 h-7" />
          <div className="">
            <div className="font-medium text-[var(--secondaryTxt)] mb-[2px]">
              Bitcoin
            </div>
            <div className="text-sm">Buy</div>
          </div>
        </div>
        <div className="font-medium my-auto">$123,304.03</div>
        <div className="">
          <div className="text-green-400 font-medium">+1.23 BTC</div>
          <div className="text-sm">1:30 AM</div>
        </div>
      </div>
      <div className="flex justify-between py-3 items-start border-b border-b-[var(--border)]">
        <div className="flex items-start gap-1">
          <img src={'/images/usdt.svg'} alt={'Bitcoin'} className="w-7 h-7" />
          <div className="">
            <div className="font-medium text-[var(--secondaryTxt)] mb-[2px]">
              Tether USDT
            </div>
            <div className="text-sm">Buy</div>
          </div>
        </div>
        <div className="font-medium my-auto">$123,304.03</div>
        <div className="">
          <div className="text-green-400 font-medium">+1.23 BTC</div>
          <div className="text-sm">1:30 AM</div>
        </div>
      </div>
      <div className="flex justify-between py-3 items-start border-b border-b-[var(--border)]">
        <div className="flex items-start gap-1">
          <img src={'/images/btc.svg'} alt={'Bitcoin'} className="w-7 h-7" />
          <div className="">
            <div className="font-medium text-[var(--secondaryTxt)] mb-[2px]">
              Bitcoin
            </div>
            <div className="text-sm">Buy</div>
          </div>
        </div>
        <div className="font-medium my-auto">$123,304.03</div>
        <div className="">
          <div className="text-green-400 font-medium">+1.23 BTC</div>
          <div className="text-sm">1:30 AM</div>
        </div>
      </div>
      <div className="flex justify-between py-3 items-start border-b border-b-[var(--border)]">
        <div className="flex items-start gap-1">
          <img src={'/images/usdt.svg'} alt={'Bitcoin'} className="w-7 h-7" />
          <div className="">
            <div className="font-medium text-[var(--secondaryTxt)] mb-[2px]">
              Tether USDT
            </div>
            <div className="text-sm">Buy</div>
          </div>
        </div>
        <div className="font-medium my-auto">$123,304.03</div>
        <div className="">
          <div className="text-green-400 font-medium">+1.23 BTC</div>
          <div className="text-sm">1:30 AM</div>
        </div>
      </div>
    </div>
  )
}
