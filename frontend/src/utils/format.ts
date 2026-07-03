import { STATUS, type Status } from '../types/task'

/** Human-friendly date, e.g. "Aug 1, 2026". Returns "—" for null. */
export function formatDate(iso: string | null): string {
  if (!iso) return '—'
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/** A task is overdue when its (non-done) due date is before today. */
export function isOverdue(dueDate: string | null, status: Status): boolean {
  if (!dueDate || status === STATUS.DONE) return false
  const due = new Date(dueDate)
  if (Number.isNaN(due.getTime())) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return due < today
}
