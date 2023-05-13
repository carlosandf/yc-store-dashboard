import { useEffect, useState } from 'react'
import { getAllProducts } from '../../services'
import ProductCard from '../../components/ProductCard'

const ProductList = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    (async () => {
      const [error, products] = await getAllProducts()

      if (!error) {
        setProductList(products)
      }
    })()
  }, [])
  return (
    <div>
      {productList.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export { ProductList }
