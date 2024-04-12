'use client'

import { useEffect, useState } from 'react'

import { useRattingStore } from '@/store/ratting-store'

import { HalfStar } from './half-star'
import { Star } from './star'

export function ProductCardRatting() {
  const { ratting } = useRattingStore()
  const [roundedRatting, setRoundedRatting] = useState(ratting)

  useEffect(() => {
    setRoundedRatting(Math.round(ratting * 2) / 2)
  }, [ratting, setRoundedRatting])

  console.log(roundedRatting)

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (roundedRatting - index >= 1) {
      return <Star key={index} />
    }
    if (roundedRatting - index === 0.5) {
      return <HalfStar key={index} />
    }
    return <Star key={index} />
  })
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-1">{stars}</div>
      <span className="font-satoshi text-xs md:text-sm">{ratting}/5</span>
    </div>
  )
}
