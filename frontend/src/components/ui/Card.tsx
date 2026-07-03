import type { HTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

export function Card({ interactive = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl shadow-xl shadow-black/20',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-brand-600/10',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
