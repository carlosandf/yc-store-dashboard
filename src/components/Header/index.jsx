import Icon from '../Icon'
import styles from './Header.module.css'
import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../Menu'

const inputsInitialState = {
  min: '',
  max: ''
}

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [filterData, setFilterData] = useState(inputsInitialState)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { state, saveFilterProducts } = useContext(AppContext)

  const handleChange = (evt, target) => {
    setFilterData({
      ...filterData,
      [target]: evt.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const min = Number(filterData.min)
    const max = Number(filterData.max)

    const filterProducts = state.products.filter(product => {
      return product.price >= min && product.price <= max
    })

    if (filterProducts.length === 0) {
      saveFilterProducts([])
      return setMessage('No hay productos en este rango de precios')
    }
    navigate('/filtered')
    saveFilterProducts([...filterProducts])
    setOpenFilter(!openFilter)
  }

  return (
    <header className={styles.header}>
      <div onClick={() => setToggle(!toggle)} className={styles.menuButtom}>
        <Icon type={toggle ? 'close' : 'hamburger'} />
      </div>
      <Menu
        toggle={toggle}
        setToggle={setToggle}
      />
      <div className={styles.wrapperButtonContainer}>
        <button onClick={() => setOpenFilter(!openFilter)}>Filtrar por precios</button>
      </div>
      {openFilter && (
        <form onSubmit={handleSubmit} className={styles.filterForPrice}>
          <div>
            <label htmlFor='min' className={styles.inputContainer}>
              <span>Desde</span>
              <input
                onChange={e => handleChange(e, 'min')}
                value={filterData.min}
                type='number'
                id='min'
              />
            </label>
            <label htmlFor='max' className={styles.inputContainer}>
              <span>Hasta</span>
              <input
                value={filterData.max.toString()}
                onChange={e => handleChange(e, 'max')}
                type='number'
                id='max'
              />
            </label>
          </div>
          <p className={styles.message}>{message}</p>
          <button>Filtrar</button>
        </form>
      )}
    </header>
  )
}

export default Header
