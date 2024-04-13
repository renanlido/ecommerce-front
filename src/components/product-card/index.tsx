import { StaticImageData } from 'next/image'

import { ProductCardImage } from './product-card-image'
import { ProductCardPrice } from './product-card-price'
import { ProductCardRatting } from './product-card-ratting'
import { ProductCardTitle } from './product-card-title'

interface ProductCardProps {
  title: string
  src: StaticImageData
  price: number
  discount?: number
  ratting?: number
}

export function ProductCard({
  title,
  src,
  price,
  discount,
  ratting,
}: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <ProductCardImage src={src} alt="T-shirt" />
      <div className="flex flex-col justify-center space-y-1 md:space-y-2">
        <ProductCardTitle title={title} />
        <ProductCardRatting ratting={ratting || 5} />
        <ProductCardPrice price={price} discount={discount} />
      </div>
    </div>
  )
}
