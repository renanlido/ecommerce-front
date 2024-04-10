import { ChevronDown, MinusIcon, Plus, Settings2 } from 'lucide-react'

import { CustomButton } from '@/components/custom-button'

export default function Home() {
  return (
    <main className=" flex flex-col px-4 pt-28 md:pt-36">
      <h1 className="mb-2 text-2xl font-bold">Custom Button</h1>
      <div className="flex w-full max-w-xs flex-wrap gap-4 md:max-w-7xl ">
        <CustomButton>Primary(Default)</CustomButton>
        <CustomButton variant="secondary">Secondary</CustomButton>
        <CustomButton variant="outline">Outline</CustomButton>
        <CustomButton variant="ghost">
          <Settings2 className="h-5 w-5" />
        </CustomButton>
        <CustomButton variant="ghostIcon">
          <p>GhostIcon</p>
          <ChevronDown className="h-5 w-5" />
        </CustomButton>
        <CustomButton
          variant="ghostIcon"
          className="flex items-center justify-between space-x-8"
        >
          <MinusIcon className="h-5 w-5" />
          <p>1</p>
          <Plus className="h-5 w-5" />
        </CustomButton>
      </div>
      <div className="my-4 w-full border-2 border-b" />
    </main>
  )
}
