import { Outlet } from 'react-router-dom'
import { NotificationProvider } from './contexts/NotificationContext'

export default function App() {
  return (
    <NotificationProvider>
      <Outlet />
    </NotificationProvider>
  )
}
