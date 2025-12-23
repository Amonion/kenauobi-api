'use client'

import { useEffect, useRef } from 'react'
import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
  // 1. Import AreaSeries definition for v5
  AreaSeries,
} from 'lightweight-charts'

interface ChartDataPoint {
  time: UTCTimestamp | string
  value: number
}

interface CryptoChartProps {
  data: ChartDataPoint[]
  coinName: string
}

export default function CryptoChart({ data, coinName }: CryptoChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart: IChartApi = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#d1d5db',
      },
      grid: {
        vertLines: { color: '#1e293b' },
        horzLines: { color: '#1e293b' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    })

    // 2. Use the new addSeries method instead of addAreaSeries
    const lineSeries: ISeriesApi<'Area'> = chart.addSeries(AreaSeries, {
      lineColor: '#2563eb',
      topColor: '#2563eb',
      bottomColor: 'rgba(37, 99, 235, 0.1)',
      lineWidth: 2,
    })

    lineSeries.setData(data)
    chart.timeScale().fitContent()

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [data])

  return (
    <div className="bg-[var(--secondaryBG)] p-6 rounded-2xl border border-slate-800">
      <h2 className="text-xl font-bold text-white mb-4">
        {coinName} Price History
      </h2>
      <div ref={chartContainerRef} className="w-full" />
    </div>
  )
}
