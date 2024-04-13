interface ProductCardTitleProps {
  title: string
}

export function ProductCardTitle({ title }: ProductCardTitleProps) {
  // eslint-disable-next-line prettier/prettier
  return <h4 className="font-satoshi mt-4 font-bold md:text-xl">{title}</h4>
}
