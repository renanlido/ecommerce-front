import { Menu } from 'lucide-react'
import Link from 'next/link'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { CustonDropdownMenu } from './custon-dropdown-menu'

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <div className="font-satoshi flex h-full flex-col items-center justify-center space-y-4 text-xl md:hidden">
          <CustonDropdownMenu />

          <Link href={'#'}>On Sales</Link>
          <Link href={'#'}>New Arrivals</Link>
          <Link href={'#'}>Brands</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
