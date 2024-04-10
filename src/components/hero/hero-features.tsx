import { cn } from '@/lib/utils'

interface HeroFeaturesProps {
  numbers: string
  text: string
  className?: string
}

export function HeroFeatures({ numbers, text, className }: HeroFeaturesProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span
        className={cn(
          'font-satoshi text-2xl font-bold md:text-[40px]',
          className,
        )}
      >
        {numbers}
      </span>
      <span
        className={cn(
          'font-satoshi text-xs font-light md:mt-5 md:text-base',
          className,
        )}
      >
        {text}
      </span>
    </div>
  )
}
