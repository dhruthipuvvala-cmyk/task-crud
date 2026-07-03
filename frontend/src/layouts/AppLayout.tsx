import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

import { pageVariants } from '../animations/variants'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center gap-2.5 px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-600/30">
            <FiCheckCircle size={18} />
          </span>
          <div className="leading-tight">
            <p className="font-bold text-white">TaskFlow</p>
            <p className="text-[11px] text-slate-400">Task management dashboard</p>
          </div>
        </div>
      </header>

      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-5 py-8"
      >
        {children}
      </motion.main>
    </div>
  )
}
