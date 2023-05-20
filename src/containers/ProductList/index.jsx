import { useContext, useEffect } from 'react'
import { getAllProducts, getProductByCategory } from '../../services'
import ProductCard from '../../components/ProductCard'
import styles from './ProductList.module.css'
import AppContext from '../../context/AppContext'
import { useParams } from 'react-router-dom'

const ProductList = () => {
  const { state, saveProducts } = useContext(AppContext)
  const { category } = useParams()
  useEffect(() => {
    (async () => {
      if (category) {
        const [error, products] = await getProductByCategory(category)
        if (!error) saveProducts(products)
      } else {
        const [error, products] = await getAllProducts()
        if (!error) saveProducts(products)
      }
    })()
  }, [category])

  return (
    <div className={styles.productsContainer}>
      {state.products.map(product => (
        <ProductCard key={`${product.id}_card`} {...product} />
      ))}
    </div>
  )
}

export { ProductList }
