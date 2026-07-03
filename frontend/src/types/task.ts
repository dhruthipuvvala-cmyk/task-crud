/** Task domain types — the single source of truth for the API contract. */

export const STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
} as const

export type Status = (typeof STATUS)[keyof typeof STATUS]

export const PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY]

/** A task as returned by the API. */
export interface Task {
  id: number
  title: string
  description: string
  status: Status
  status_display: string
  priority: Priority
  priority_display: string
  due_date: string | null
  created_at: string
  updated_at: string
}

/** Payload for creating / fully updating a task. */
export interface TaskInput {
  title: string
  description: string
  status: Status
  priority: Priority
  due_date: string | null
}

/** Aggregated dashboard statistics (GET /tasks/stats/). */
export interface TaskStats {
  total: number
  todo: number
  in_progress: number
  done: number
  overdue: number
  by_priority: Record<Priority, number>
  completion_rate: number
}

/** Standard DRF paginated envelope. */
export interface Paginated<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

/** Query parameters accepted by the task list endpoint. */
export interface TaskQuery {
  search?: string
  status?: Status
  priority?: Priority
  ordering?: string
}
