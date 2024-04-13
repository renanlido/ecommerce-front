import { ProductCard } from '@/components/product-card'

import Jeans from '../../public/assets/images/products/jeans.png'
import Tshirt from '../../public/assets/images/products/t-shirt_01.png'

export default function Home() {
  return (
    <main className=" flex w-full flex-col items-center justify-center gap-12 py-20 pt-28 md:pt-36">
      <ProductCard
        title="T-shirt with tape details"
        src={Tshirt}
        price={120}
        ratting={4.6}
      />
      <ProductCard
        title="Skinny Fit Jeans"
        src={Jeans}
        price={260}
        discount={20}
        ratting={3.5}
      />
    </main>
  )
}
