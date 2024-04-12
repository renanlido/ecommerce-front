import { StaticImageData } from 'next/image'

import { ProductCardImage } from './product-card-image'
import { ProductCardRatting } from './product-card-ratting'
import { ProductCardTitle } from './product-card-title'

interface ProductCardProps {
  title: string
  src: StaticImageData
}

export function ProductCard({ title, src }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <ProductCardImage src={src} alt="T-shirt" />
      <div className="flex flex-col justify-center space-y-1 md:space-y-2">
        <ProductCardTitle title={title} />
        <ProductCardRatting />
      </div>
    </div>
  )
}
