/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { getAllProducts } from '../../services'
import ProductCard from '../../components/ProductCard'
import styles from './ProductList.module.css'
import AppContext from '../../context/AppContext'

const ProductList = () => {
  const { state, saveProducts } = useContext(AppContext)
  useEffect(() => {
    (async () => {
      const [error, products] = await getAllProducts()
      if (!error) {
        saveProducts(products)
      }
    })()
  }, [])
  return (
    <div className={styles.productsContainer}>
      {state.products.map(product => (
        <ProductCard key={`${product.id}_card`} {...product} />
      ))}
    </div>
  )
}

export { ProductList }
