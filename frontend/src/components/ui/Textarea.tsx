import type { TextareaHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

const FIELD =
  'w-full resize-y rounded-xl border border-white/10 bg-surface-900/60 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/20'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      )}
      <textarea className={cn(FIELD, error && 'border-rose-500/60', className)} {...props} />
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  )
}
