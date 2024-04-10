import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: ['rounded-full', 'px-16', 'py-4', 'text-white', 'text-base', ''],
  variants: {
    variant: {
      primary: ['bg-gray-950', 'hover:bg-gray-800'],
      secondary: ['bg-gray-500', 'hover:bg-gray-600'],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function CustomButton({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant })} />
}
