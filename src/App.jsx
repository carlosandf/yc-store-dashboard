import { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './services/supabase'
import InsertProduct from './pages/InsertProduct'
import ProductInfo from './containers/ProductInfo'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
import Layout from './containers/Layout'
import AppContext from './context/AppContext'
import './App.css'

function App () {
  const { state, setSigned } = useContext(AppContext)
  const { signed } = state

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setSigned(true)
        console.log(state)
      } else {
        setSigned(false)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={signed ? <Navigate to='/add-product' /> : <Login />} />
          <Route path='/add-product' element={signed ? <InsertProduct /> : <Navigate to='/login' />} />
          <Route path='/product/:category' element={<Home />} />
          <Route path='/product/:category/:id' element={<ProductInfo />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
