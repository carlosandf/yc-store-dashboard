import { useRef, useState } from 'react'
import { uploadFiles, createNewProduct } from '../../services'
import Alert from '../../components/Alert'
import styles from './InsertProduct.module.css'

const INITIAL_STATE = {
  title: '',
  price: '',
  ref: '',
  category: '',
  details: ''
}

const InsertProduct = () => {
  const [loadind, setLoading] = useState(false)
  const [alert, setAlert] = useState({ status: '', message: '', open: false })
  const [data, setData] = useState(INITIAL_STATE)
  const inputFile = useRef()
  const mainData = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const filesValues = Object.values(inputFile.current.files)
      const [errorOne, images] = await uploadFiles({ files: filesValues, path: 'products', ref: data.ref })
      const user_id = window.localStorage.getItem('user_id')

      const [errorTwo] = await createNewProduct({
        ...data,
        images,
        user_id
      })

      setLoading(false)
      if (errorOne || errorTwo) {
        throw new Error('Ha ocurrido un error')
      }
      setAlert({
        open: true,
        message: 'Se guardó correctamente',
        status: 'success'
      })
      setData(INITIAL_STATE)
      inputFile.current.value = ''
    } catch (error) {
      console.log(error)
      setAlert({
        open: true,
        message: 'Ha ocurrido un error :(',
        status: 'error'
      })
    }

    setTimeout(() => {
      setAlert({
        ...alert,
        open: false
      })
    }, 3000)
  }

  return (
    <div>
      {loadind && <h3>Enviando...</h3>}
      {alert.open && <Alert message={alert.message} status={alert.status} />}
      <form onSubmit={handleSubmit} ref={mainData} className={styles.form}>
        <h3>Datos principales</h3>
        <input
          onChange={e => setData({ ...data, title: e.target.value })}
          type="text"
          name='title'
          value={data.title}
          placeholder='Marca'
          required
        />
        <input
          onChange={e => setData({ ...data, price: e.target.value })}
          type="number"
          name='price'
          value={data.price}
          placeholder='Precio'
          required
        />
        <input
          onChange={e => setData({ ...data, ref: e.target.value })}
          type="text"
          name='ref'
          value={data.ref}
          placeholder='Referencia'
          required
        />
        <input
          onChange={e => setData({ ...data, category: e.target.value })}
          type="text"
          name='category'
          value={data.category}
          placeholder='Categoria'
          required
        />
        <h3>Detalles</h3>
        <span>Separa cada caracteristica con comas ( , )</span>
        <textarea
          onChange={e => setData({ ...data, details: e.target.value })}
          value={data.details}
          name="details"
          required
        >
        </textarea>

        <h3>Sube algunas imagenes</h3>
        <input
          required
          ref={inputFile}
          type="file"
          name='files'
          multiple
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default InsertProduct
