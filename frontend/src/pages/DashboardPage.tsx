import { useState } from 'react'
import { FiActivity, FiPlus } from 'react-icons/fi'

import { Badge, Button, Card, Modal, Skeleton } from '../components/ui'
import { useTasks } from '../hooks/useTasks'

/**
 * Milestone 5 page: verifies the architecture end-to-end (layout, primitives,
 * hook, API connectivity, loading/error states). The full dashboard UI is
 * built in the next milestone.
 */
export function DashboardPage() {
  const { tasks, stats, loading, error, refetch } = useTasks()
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Overview</h1>
          <p className="text-sm text-slate-400">Architecture &amp; API connectivity check</p>
        </div>
        <Button onClick={() => setOpen(true)}>
          <FiPlus /> New Task
        </Button>
      </div>

      {loading && (
        <div className="grid gap-4 sm:grid-cols-3">
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
          <Skeleton className="h-28" />
        </div>
      )}

      {error && !loading && (
        <Card className="p-6">
          <p className="text-rose-300">{error}</p>
          <Button variant="secondary" size="sm" className="mt-3" onClick={() => void refetch()}>
            Retry
          </Button>
        </Card>
      )}

      {!loading && !error && (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card interactive className="p-5">
              <p className="text-sm text-slate-400">Total tasks</p>
              <p className="mt-1 text-3xl font-bold text-white">{stats?.total ?? 0}</p>
            </Card>
            <Card interactive className="p-5">
              <p className="text-sm text-slate-400">Completed</p>
              <p className="mt-1 text-3xl font-bold text-white">{stats?.done ?? 0}</p>
            </Card>
            <Card interactive className="p-5">
              <p className="text-sm text-slate-400">Completion</p>
              <p className="mt-1 text-3xl font-bold text-white">{stats?.completion_rate ?? 0}%</p>
            </Card>
          </div>

          <Card className="flex items-center gap-2 p-5 text-slate-300">
            <FiActivity className="text-brand-400" />
            <span className="text-sm">Connected to API — {tasks.length} task(s) loaded</span>
            <Badge tone="emerald" className="ml-auto">
              live
            </Badge>
          </Card>
        </>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title="New Task">
        <p className="text-sm text-slate-400">
          The full create / edit form arrives in the next milestone. The modal, buttons, and
          form primitives are already wired and ready.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </div>
      </Modal>
    </div>
  )
}
