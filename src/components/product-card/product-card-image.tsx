import Image, { StaticImageData } from 'next/image'

interface ProductCardImageProps {
  src: StaticImageData
  alt: string
}

export function ProductCardImage({ src, alt }: ProductCardImageProps) {
  return (
    <div className="flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F0EEED]">
      <Image src={src} alt={alt} />
    </div>
  )
}
