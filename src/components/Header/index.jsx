import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Header.module.css'
import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import Menu from '../Menu'

const inputsInitialState = {
  min: '',
  max: ''
}

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [filterData, setFilterData] = useState(inputsInitialState)
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

    saveFilterProducts(filterProducts)
    console.log(filterProducts)
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
                value={filterData.min}
                onChange={e => handleChange(e, 'min')}
                type='number'
                id='min'
              />
            </label>
            <label htmlFor='max' className={styles.inputContainer}>
              <span>Hasta</span>
              <input
                value={filterData.max}
                onChange={e => handleChange(e, 'max')}
                type='number'
                id='max'
              />
            </label>
          </div>
          <button>Filtrar</button>
        </form>
      )}
    </header>
  )
}

Header.propTypes = {
  signed: PropTypes.bool
}

export default Header
