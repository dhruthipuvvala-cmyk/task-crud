import { MotionConfig } from 'framer-motion'

import { ToastProvider } from './components/ui'
import { AppLayout } from './layouts/AppLayout'
import { DashboardPage } from './pages/DashboardPage'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <AppLayout>
          <DashboardPage />
        </AppLayout>
      </ToastProvider>
    </MotionConfig>
  )
}
