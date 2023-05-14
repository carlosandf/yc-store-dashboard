/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'
import styles from './ProductInfo.module.css'
import AppContext from '../../context/AppContext'

const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const [index, setIndex] = useState(0)
  const [curretImage, setCurrentImage] = useState(product?.images[index])
  const { state, toggleModal } = useContext(AppContext)

  const { id } = state.modal

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)

      if (error === null) {
        setProduct(data[0])
        setCurrentImage(data[0].images[0])
      }
    })()

    return () => {
      console.log(curretImage)
    }
  }, [])

  const nextImage = () => {
    const length = product?.images?.length
    if (index < length - 1) {
      setIndex(index + 1)
      setCurrentImage(product?.images[index])
    }
  }

  const prevImage = () => {
    if (index > 0) {
      setIndex(index - 1)
      setCurrentImage()
      setCurrentImage(product?.images[index])
    }
  }
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
          onClick={prevImage}
          className={styles.previousButton}
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className={styles.nextButton}
        >
          &gt;
        </button>
        <picture className={styles.imageContainer} key={`${product?.id}_details`}>
          <img
            key={`${product?.images[index]}_image_galery-id`}
            src={product?.images[index]}
            alt={product?.title}
          />
        </picture>
      </div>
      {product?.title}
    </div>
  )
}

export default ProductInfo
