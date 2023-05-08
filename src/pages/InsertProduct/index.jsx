import { useRef, useState } from 'react'
import { uploadFiles, createNewProduct } from '../../services'
import styles from './InsertProduct.module.css'

// const MAIN_INITIAL_STATE = {}

const InsertProduct = () => {
  const [loadind, setLoading] = useState(false)
  const inputFile = useRef()
  const mainData = useRef()
  const measuresAndDetails = useRef()

  const handleClick = async () => {
    // const [info, setInfo] = useState({})
    try {
      setLoading(true)
      const main = new FormData(mainData.current)
      const { brand, price, ref } = Object.fromEntries(main)

      const measuresData = new FormData(measuresAndDetails.current)
      const measuresDataEntries = Object.fromEntries(measuresData)

      const files = Object.values(inputFile.current.files)
      const [errorOne, images] = await uploadFiles(files, 'watches', ref)

      const [errorTwo] = await createNewProduct({
        brand,
        price,
        ref,
        measures: {...measuresDataEntries},
        images
      })

      setLoading(false)
      if (errorOne || errorTwo) {
        throw new Error('Ha ocurrido un error')
      }
    } catch (error) {
      return <h3>Lo siento, algo salió mal :(</h3>
    }
  }

  return (
    <div>
      {loadind && <h3>Enviando...</h3>}
      <form ref={mainData} className={styles.form}>
        <h3>Datos principales</h3>
        <input type="text" name='brand' placeholder='Marca'/>
        <input type="number" name='price' placeholder='Precio'/>
        <input type="text" name='ref' placeholder='Referencia'/>
      </form>

      <form ref={measuresAndDetails} className={styles.form}>
      <h3>Mediadas</h3>
        <input type="text" name='dial_diameter' placeholder='Diametro del dial' />
        <input type="text" name='thickness' placeholder='Grosor de la carcasa' />
        <input type="text" name='length' placeholder='Longitud' />
        <input type="text" name='belt_width' placeholder='Ancho de la correa' />
        <input type="text" name='weight' placeholder='Peso' />
        <input type="text" name='belt_material' placeholder='Material de la correa' />
        <input type="text" name='dial_material' placeholder='Material del dial' />

        <h3>Detalles</h3>
        <textarea name="details"></textarea>
      </form>

      <form action="" className={styles.form}>
        <h3>Sube algunas imagenes</h3>
        <input ref={inputFile} type="file" name='files' id="" multiple />
        <button type='button' onClick={handleClick}>Enviar</button>
      </form>
    </div>
  )
}

export default InsertProduct