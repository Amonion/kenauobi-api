'use client'

import React from 'react'

// 1. Define the structure of an individual coin
interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
}

// 2. Define the props the component accepts
interface CoinTickerProps {
  coins: Coin[]
  onSelect: (id: string) => void
  activeId: string
}

export default function CoinTicker({
  coins,
  onSelect,
  activeId,
}: CoinTickerProps) {
  return (
    <div className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth">
      {coins.map((coin) => (
        <button
          key={coin.id}
          onClick={() => onSelect(coin.id)}
          className={`flex-shrink-0 flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
            activeId === coin.id ? 'bg-[var(--secondaryBG)]' : ''
          }`}
        >
          {/* Ensure image has dimensions to prevent layout shift */}
          <img
            src={coin.image}
            alt={coin.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <div className="text-left">
            <p
              className={`${
                activeId === coin.id ? 'text-[var(--custom)]' : ''
              } font-bold uppercase text-xs leading-none`}
            >
              {coin.symbol}
            </p>
            <p className="text-[10px] mt-1">
              $
              {coin.current_price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}
