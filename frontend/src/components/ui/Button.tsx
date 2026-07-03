import { motion, type HTMLMotionProps } from 'framer-motion'

import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/25',
  secondary: 'glass text-slate-100 hover:border-white/20',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25',
}

const SIZES: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5 gap-1.5',
  md: 'text-sm px-4 py-2.5 gap-2',
  lg: 'text-base px-5 py-3 gap-2',
}

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: Variant
  size?: Size
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60 disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
