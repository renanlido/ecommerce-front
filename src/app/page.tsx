import {
  ChevronDown,
  Facebook,
  Instagram,
  MinusIcon,
  Plus,
  Settings2,
  Twitter,
  Youtube,
} from 'lucide-react'

import { CustomButton } from '@/components/custom-button'

export default function Home() {
  return (
    <main className=" flex flex-col px-4 pt-28 md:pt-36">
      <h1 className="mb-2 text-2xl font-bold">Custom Button</h1>
      <div className="flex w-full max-w-xs flex-wrap gap-4 md:max-w-7xl ">
        <CustomButton variant="primary">Primary(Default)</CustomButton>
        <CustomButton className="w-full">Primary(Default) Full</CustomButton>
        <CustomButton variant="secondary">Secondary</CustomButton>
        <CustomButton variant="outline">Outline</CustomButton>
        <CustomButton variant="ghost">
          <Settings2 className="h-5 w-5" />
        </CustomButton>
        <CustomButton
          variant="ghost"
          className="flex items-center justify-between space-x-8 px-8"
        >
          <p>GhostIcon</p>
          <ChevronDown className="h-5 w-5" />
        </CustomButton>
        <CustomButton
          variant="ghost"
          className="flex items-center justify-between space-x-8"
        >
          <MinusIcon className="h-5 w-5" />
          <p>1</p>
          <Plus className="h-5 w-5" />
        </CustomButton>
        <div className="flex items-center space-x-4">
          <CustomButton variant="ghost">
            <Facebook className="h-5 w-5" />
          </CustomButton>
          <CustomButton variant="ghost">
            <Youtube className="h-5 w-5" />
          </CustomButton>
          <CustomButton variant="ghost">
            <Instagram className="h-5 w-5" />
          </CustomButton>
          <CustomButton variant="ghost">
            <Twitter className="h-5 w-5" />
          </CustomButton>
        </div>
        <div className="flex w-full max-w-xs flex-wrap items-center gap-4 md:max-w-7xl">
          <CustomButton variant="secondary">XX-Small</CustomButton>
          <CustomButton variant="secondary">X-Small</CustomButton>
          <CustomButton variant="secondary">Small</CustomButton>
          <CustomButton variant="secondary">Medium</CustomButton>
          <CustomButton variant="secondary">Large</CustomButton>
          <CustomButton variant="secondary">X-Large</CustomButton>
          <CustomButton variant="secondary">XX-Large</CustomButton>
          <CustomButton variant="secondary">3X-Large</CustomButton>
          <CustomButton variant="secondary">4X-Large</CustomButton>
        </div>
      </div>
      <div className="my-4 w-full border-2 border-b" />
    </main>
  )
}
