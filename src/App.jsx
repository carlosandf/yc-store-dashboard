import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './services/supabase'
import AppContext from './context/AppContext.jsx'
import InsertProduct from './pages/InsertProduct'
import ProductInfo from './containers/ProductInfo'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
import Layout from './containers/Layout'
import useInitialState from './hooks/useInitialState'
import './App.css'

function App () {
  const [signed, setSigned] = useState(false)

  const initialState = useInitialState()

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
    <AppContext.Provider value={initialState}>
      <Header signed={signed} />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={signed ? <Navigate to='/add-product' /> : <Login />} />
          <Route path='/add-product' element={signed ? <InsertProduct /> : <Navigate to='/login' />} />
          <Route path='/product/:category' element={<Home />} />
          <Route path='/product/:category/:id' element={<ProductInfo />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  )
}

export default App
