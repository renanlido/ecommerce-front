import { ChevronDown, Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  return (
    <div className="fixed inset-0 flex h-16 w-full items-center justify-center bg-white md:h-24">
      <div className="flex w-full max-w-7xl items-center justify-between space-x-10">
        <h1 className="font-integralCF cursor-pointer text-[32px] font-black">
          SHOP.CO
        </h1>
        <div className="font-satoshi flex flex-1 items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="font-satoshi flex items-end space-x-0 focus:outline-none">
              <span>Shop</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={'#'}>On Sales</Link>
          <Link href={'#'}>New Arrivals</Link>
          <Link href={'#'}>Brands</Link>
        </div>
        <div className="flex h-12 w-[577px] items-center rounded-full bg-gray-200 px-4">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="h-full w-full bg-transparent pl-4 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
