'use client'
import React, { useEffect, useState } from 'react'

export default function ListedCurrencies() {
  const [coins, setCoins] = useState<any[]>([])

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) => setCoins(data))
  }, [])
  return (
    <div className="bg-[var(--secondaryBG)] rounded-[10px] p-3">
      <div className="text-lg text-[var(--secondaryTxt)] mb-1">
        Listed Currencies
      </div>

      <table className="w-full">
        <tbody>
          {coins.slice(0, 7).map((coin) => (
            <tr key={coin.id}>
              <td className="py-3">
                <div className="flex items-center gap-1 font-medium">
                  <img src={coin.image} alt={coin.name} className="w-7 h-7" />
                  <div className="text-[var(--secondaryTxt)]">
                    {coin.name}
                  </div>{' '}
                  <span className="text-sm">{coin.symbol}</span>
                </div>
              </td>
              <td>
                $
                {coin.current_price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>
                <div
                  className={`${
                    coin.price_change_percentage_24h < 0
                      ? 'text-[var(--danger)]'
                      : 'text-[var(--success)]'
                  }`}
                >
                  {coin.price_change_percentage_24h}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
