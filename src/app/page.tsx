import { Brands } from '@/components/header/brands'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Brands />
    </main>
  )
}
