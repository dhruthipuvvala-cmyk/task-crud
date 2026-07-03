import type { ReactNode } from 'react'

import { cn } from '../../utils/cn'

export type BadgeTone = 'indigo' | 'cyan' | 'amber' | 'emerald' | 'slate' | 'rose'

const TONES: Record<BadgeTone, string> = {
  indigo: 'bg-brand-500/15 text-brand-300 border-brand-400/30',
  cyan: 'bg-accent-500/15 text-accent-400 border-accent-400/30',
  amber: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  slate: 'bg-slate-500/15 text-slate-300 border-slate-400/30',
  rose: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
}

export interface BadgeProps {
  tone?: BadgeTone
  children: ReactNode
  className?: string
}

export function Badge({ tone = 'slate', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
