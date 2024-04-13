import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-full',
    'px-8',
    'py-4',
    'h-[52px]',
    'text-white',
    'text-center',
    'text-sm',
    'font-satoshi',
    // 'hover:font-bold',
    'font-medium',
    'flex',
    'justify-center',
    'items-center',
    'transition-all',
    'duration-300',
  ],
  variants: {
    variant: {
      primary: ['bg-gray-950', 'hover:text-black', 'hover:bg-[#F0F0F0]'],
      secondary: [
        'bg-[#F0F0F0]',
        'hover:bg-gray-950',
        'text-gray-500',
        'hover:text-white',
      ],
      outline: [
        'border',
        'border-gray-200',
        'bg-white',
        'text-gray-950',
        'hover:bg-gray-950',
        'hover:text-white',
      ],
      ghost: [
        'bg-[#F0F0F0]',
        'hover:bg-[#E0E0E0]',
        'text-gray-950',
        'px-4',
        'hover:bg-gray-950',
        'hover:text-white',
      ],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function CustomButton({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
