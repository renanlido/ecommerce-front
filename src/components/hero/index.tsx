'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useTopBarCupomStore } from '@/store/top-bar-cupom-store'

import coverDesk from '../../../public/assets/images/hero-cover-desk.jpg'
import coverMobi from '../../../public/assets/images/hero-cover-mob.png'
import { Button } from '../ui/button'

import { HeroFeatures } from './hero-features'

export function Hero() {
  const { isTopBarCupomVisible } = useTopBarCupomStore()
  return (
    <div
      className={cn(
        'flex w-full flex-col bg-[#F2F0F1] px-0 pt-8 transition-all duration-700 md:flex-row md:px-[100px]',
        isTopBarCupomVisible ? 'mt-[97px]' : 'mt-16 ',
      )}
    >
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center px-4 md:w-1/2 md:space-y-8">
          <h1 className="w-full font-integralCF text-4xl font-bold leading-tight md:text-[64px] md:leading-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mt-5 font-satoshi text-sm font-light md:w-[577px] md:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="mt-6 w-full rounded-full px-16 py-2 font-satoshi text-white">
            Shop Now
          </Button>
          <div className="mt-5 flex flex-wrap items-center justify-evenly gap-4 md:w-full md:gap-0 md:space-x-6">
            <HeroFeatures numbers="200+" text="International Brands" />
            <div className="h-14 w-px bg-gray-300 md:h-20" />
            <HeroFeatures numbers="2,000+" text="High-Quality Products" />
            <div className="hidden h-14 w-px bg-gray-300 md:block md:h-20" />
            <HeroFeatures numbers="30,000+" text="Happy Customers" />
          </div>
        </div>
        <Image src={coverMobi} alt="Hero Cover" className="block md:hidden" />
        <Image src={coverDesk} alt="Hero Cover" className="hidden md:block" />
      </div>
    </div>
  )
}
