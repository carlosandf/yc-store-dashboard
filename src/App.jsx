import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { supabase } from './services/supabase'
import Login from './pages/Login'
import InsertProduct from './pages/InsertProduct'
import Header from './components/Header'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false)
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/')
        setSigned(true)
      } else {
        navigate('/login')
        setSigned(false)
      }
    })
  }, [])
  return (
    <>
      <Header signed={signed} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<InsertProduct />} />
      </Routes>
    </>
  )
}

export default App
