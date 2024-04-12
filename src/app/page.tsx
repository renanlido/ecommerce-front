import { ProductCard } from '@/components/product-card'

import Jeans from '../../public/assets/images/products/jeans.png'
import Tshirt from '../../public/assets/images/products/t-shirt_01.png'

export default function Home() {
  return (
    <main className=" flex w-full flex-col items-center justify-center gap-12 pt-28 md:pt-36">
      <ProductCard title="T-SHIRT WITH TAPE DETAILS" src={Tshirt} />
      <ProductCard title="SKINNY FIT JEANS" src={Jeans} />
    </main>
  )
}
