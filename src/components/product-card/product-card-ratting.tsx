'use client'

import { useEffect, useState } from 'react'

import { HalfStar } from './half-star'
import { Star } from './star'

interface ProductCardRattingProps {
  ratting: number
}

export function ProductCardRatting({ ratting }: ProductCardRattingProps) {
  const [roundedRatting, setRoundedRatting] = useState(ratting)

  useEffect(() => {
    setRoundedRatting(Math.round(ratting * 2) / 2)
  }, [ratting, setRoundedRatting])

  const stars = Array.from(
    { length: Math.round(roundedRatting) },
    (_, index) => {
      if (roundedRatting - index >= 1) {
        return <Star key={index} />
      }
      if (roundedRatting - index === 0.5) {
        return <HalfStar key={index} />
      }
      return <Star key={index} />
    },
  )
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-1">{stars}</div>
      <span className="font-satoshi text-xs md:text-sm">{ratting}/5</span>
    </div>
  )
}
