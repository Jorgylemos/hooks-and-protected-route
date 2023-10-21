import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { UserProvider } from './context/AuthProvider'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { ProtectedLayout } from './components/ProtectedLayout'

export default function App() {
  return (
    <UserProvider>
      <Suspense>
        <Navbar />
      </Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      </Routes>
    </UserProvider>
  )
}