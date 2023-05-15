import { useContext } from 'react'
import PropTypes from 'prop-types'
import ProductInfo from './ProductInfo'
import AppContext from '../context/AppContext'

const Layout = ({ children }) => {
  const { state } = useContext(AppContext)
  return (
    <div>
      {children}
      {state.modal.isOpen && <ProductInfo />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
