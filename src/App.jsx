import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './services/supabase'
import { AppContextProvider } from './context/AppContext.jsx'
import Login from './pages/Login'
import InsertProduct from './pages/InsertProduct'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'

function App () {
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
    <AppContextProvider>
      <Header signed={signed} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={signed ? <InsertProduct /> : <Navigate to='/login' />} />
        <Route path='/login' element={signed ? <Navigate to='/add-product' /> : <Login />} />
      </Routes>
    </AppContextProvider>
  )
}

export default App
