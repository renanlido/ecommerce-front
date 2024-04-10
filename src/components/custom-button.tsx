import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-full',
    'px-8',
    'py-4',
    'h-[52px]',
    'text-white',
    'text-base',
    'font-satoshi',
    'outline-none',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-gray-400',
    'focus:ring-offset-2',
    'focus:ring-offset-gray-900',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'flex',
    'items-center',
  ],
  variants: {
    variant: {
      primary: ['bg-gray-950', 'hover:bg-gray-800'],
      secondary: ['bg-[#F0F0F0]', 'hover:bg-[#E0E0E0]', 'text-gray-950'],
      outline: [
        'border',
        'border-gray-200',
        'bg-white',
        'text-gray-950',
        'hover:bg-gray-950',
        'hover:text-white',
      ],
      ghost: ['bg-[#F0F0F0]', 'hover:bg-[#E0E0E0]', 'text-gray-950', 'px-4'],
      ghostIcon: [
        'bg-[#F0F0F0]',
        'hover:bg-[#E0E0E0]',
        'text-gray-950',
        'flex',
        'items-center',
        'space-x-2',
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
