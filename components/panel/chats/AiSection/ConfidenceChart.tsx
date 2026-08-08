"use client"

import { useId } from "react"

type ConfidenceChartProps = {
  value: number
}

export default function ConfidenceChart({
  value,
}: ConfidenceChartProps) {

  const gradientId = useId()

  const radius = 65
  const circumference = 2 * Math.PI * radius

  const dashOffset =
    circumference * (1 - value / 100)

  return (
    <div className="relative h-42.5 w-42.5">

      <svg
        viewBox="0 0 170 170"
        className="h-full w-full -rotate-90"
      >

        <defs>

          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#FF477E"
            />

            <stop
              offset="100%"
              stopColor="#8B2FC9"
            />
          </linearGradient>

        </defs>


        {/* Background */}

        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke="#3B1A57"
          strokeWidth="14"
        />


        {/* Progress */}

        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />

      </svg>


      {/* Percentage */}

      <div className="absolute inset-0 flex items-center justify-center">

        <span className="text-3xl font-semibold text-white">
          {value}%
        </span>

      </div>

    </div>
  )
}