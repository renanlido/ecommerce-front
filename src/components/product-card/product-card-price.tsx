import { currency } from '@/lib/currency'

interface ProductCardPriceProps {
  price: number
  discount?: number
}

export function ProductCardPrice({ price, discount }: ProductCardPriceProps) {
  const discountedPrice = price - (price * (discount || 0)) / 100
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <span className="font-satoshi text-xl font-bold md:text-2xl">
        {currency(discountedPrice)}
      </span>
      {discount && (
        <span className="font-satoshi text-xl font-bold text-gray-400 line-through md:text-2xl">
          {currency(price)}
        </span>
      )}
      {discount && (
        <div className="">
          <span className="font-satoshi.h-5 rounded-full bg-[#ff3333] bg-opacity-10 px-2 py-1 text-[10px] font-bold text-[#ff3333] md:px-3 md:py-[6px] md:text-xs">
            -{discount}%
          </span>
        </div>
      )}
    </div>
  )
}
