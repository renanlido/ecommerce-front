'use client'

import { X } from 'lucide-react'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'

export function TopBarCupom() {
  const [showTopBarCupom, setShowTopBarCupom] = useState(true)
  return (
    <div
      className={`flex h-[34px] w-full items-center justify-between bg-black transition-all duration-700 md:px-28
         ${showTopBarCupom ? 'mt-0' : '-mt-9'}`}
    >
      <div className="flex w-full items-center justify-center">
        <span className="font-satoshi text-xs font-light text-white md:text-sm">
          Sign up and get 20% off to your first order.
          <a href="#" className="ml-2 text-xs font-bold md:text-sm">
            Sign Up Now
          </a>
        </span>
      </div>
      <X
        onClick={() => setShowTopBarCupom(false)}
        className="mr-auto hidden cursor-pointer text-white md:block"
      />
    </div>
  )
}
