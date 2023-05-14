/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'
import styles from './ProductInfo.module.css'
import AppContext from '../../context/AppContext'

const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const { state, toggleModal } = useContext(AppContext)

  const { id } = state.modal

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)

      if (error === null) {
        console.log({ data, error })
        setProduct(data[0])
      }
    })()
  }, [])

  return (
    <div className={styles.productInfo}>
      <div className={styles.imagesGalery}>
        <button
          onClick={() => toggleModal({ isOpen: false, id: '' })}
          className={styles.closeButton}
        >
          +
        </button>
        <button
          onClick={() => toggleModal({ isOpen: false, id: '' })}
          className={styles.previousButton}
        >
          &lt;
        </button>
        <button
          onClick={() => toggleModal({ isOpen: false, id: '' })}
          className={styles.nextButton}
        >
          &gt;
        </button>
        <picture className={styles.imageContainer} key={`${product?.id}_details`}>
          {
            product?.images?.map(image => (
              <img key={`${image}_image_galery-id`} src={image} alt={product.title} />
            ))
          }
        </picture>
      </div>
      {product?.title}
    </div>
  )
}

export default ProductInfo
