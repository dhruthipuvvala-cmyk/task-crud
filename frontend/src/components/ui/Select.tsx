import type { SelectHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

const FIELD =
  'w-full appearance-none rounded-xl border border-white/10 bg-surface-900/60 px-3.5 py-2.5 text-sm text-slate-100 transition-colors focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/20'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export function Select({ label, className, children, ...props }: SelectProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      )}
      <select className={cn(FIELD, className)} {...props}>
        {children}
      </select>
    </label>
  )
}
