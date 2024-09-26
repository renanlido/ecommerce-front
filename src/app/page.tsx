import { Slider } from '@/components/brands/slider'

export default function Home() {
  return (
    <main className=" flex flex-col pt-28 md:pt-36">
      <div className=" flex flex-col">
        <h1 className="w-full text-2xl font-bold">Slider</h1>
        <Slider />
      </div>
    </main>
  )
}
