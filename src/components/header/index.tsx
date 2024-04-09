import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

import { CustonDropdownMenu } from './custon-dropdown-menu'
import { MenuMobile } from './menu-mobile'

export function Header() {
  return (
    <div className="fixed flex h-16 w-full items-center justify-center bg-white px-4 md:h-24">
      <MenuMobile />
      <div className="ml-2 flex w-full max-w-7xl items-center justify-between space-x-10">
        <h1 className="-mt-1 cursor-pointer font-integralCF text-2xl font-bold md:text-[32px]">
          SHOP.CO
        </h1>
        <div className="hidden flex-1 items-center space-x-4 font-satoshi md:flex">
          <CustonDropdownMenu />

          <Link href={'#'}>On Sales</Link>
          <Link href={'#'}>New Arrivals</Link>
          <Link href={'#'}>Brands</Link>
        </div>
        <div className="hidden h-12 w-[577px] items-center rounded-full bg-gray-200 px-4 md:flex">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="h-full w-full bg-transparent pl-4 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 cursor-pointer md:hidden" />
          <ShoppingCart className="h-5 w-5 cursor-pointer" />
          <User className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
