import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import InsertProduct from './pages/InsertProduct'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='insert-product' element={<InsertProduct />} />
    </Routes>
  )
}

export default App
