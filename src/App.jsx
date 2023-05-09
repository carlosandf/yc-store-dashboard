import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import InsertProduct from './pages/InsertProduct'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/insert-product' element={<InsertProduct />} />
      </Routes>
    </>
  )
}

export default App
