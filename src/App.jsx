import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './services/supabase'
import Login from './pages/Login'
import InsertProduct from './pages/InsertProduct'
import Header from './components/Header'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setSigned(true)
      } else {
        setSigned(false)
      }
    })
  }, [])
  return (
    <>
      <Header signed={signed} />
      <Routes>
        <Route path='/' element={signed ? <InsertProduct /> : <Navigate to='/login'/>} />
        <Route path='/login' element={signed ? <Navigate to='/'/> : <Login />} />
      </Routes>
    </>
  )
}

export default App
