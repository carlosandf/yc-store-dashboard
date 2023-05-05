import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputFile = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e

    //const files = Object.values(target)
    console.log(target.files.files)
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name='brand' placeholder='Marca'/>
        <input type="number" name='price' placeholder='Precio'/>
        <input type="text" name='ref' placeholder='Referencia'/>

        <input ref={inputFile} type="file" name='files' id="" multiple />
        <button>enviar</button>
      </form>
    </>
  )
}

export default App
