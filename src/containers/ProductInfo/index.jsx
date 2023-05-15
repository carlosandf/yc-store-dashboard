/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import styles from './ProductInfo.module.css'
import AppContext from '../../context/AppContext'
import { getOneProduct } from '../../services'
import Loading from '../../components/Loading'
import formater from '../../utils/formatText'
import urlGenerator from '../../utils/urlGenerator'

const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const [index, setIndex] = useState(0)
  const [curretImage, setCurrentImage] = useState(product?.images[0])
  const { state, toggleModal } = useContext(AppContext)

  const formattedPrice = Number(product?.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  const { id } = state.modal

  useEffect(() => {
    (async () => {
      const [error, data] = await getOneProduct(id)

      if (error === null) {
        const formatDetail = formater(data[0].details)
        setProduct({ ...data[0], details: formatDetail })
        setCurrentImage(data[0].images[0])
      }
    })()
  }, [])

  const nextImage = () => {
    const length = product?.images?.length
    if (index < length - 1) {
      setIndex(index + 1)
      setCurrentImage(product?.images[index + 1])
    }
  }

  const prevImage = () => {
    if (index > 0) {
      setIndex(index - 1)
      setCurrentImage()
      setCurrentImage(product?.images[index - 1])
    }
  }

  const closeModal = () => {
    toggleModal({ isOpen: false, id: '' })
    window.document.body.style.overflow = 'auto'
  }

  if (product === null) {
    return (
      <dir className={styles.productInfo}>
        <Loading />
      </dir>
    )
  }
  return (
    <div className={styles.productInfo}>
      <section className={styles.imagesGalery}>
        <p
          onClick={closeModal}
          className={styles.closeButton}
        >
          +
        </p>
        <p
          onClick={prevImage}
          className={styles.previousButton}
        >
          &lt;
        </p>
        <p
          onClick={nextImage}
          className={styles.nextButton}
        >
          &gt;
        </p>
        <picture className={styles.imageContainer} key={`${product?.id}_details`}>
          <img
            key={`${product?.images[index]}_image_galery-id`}
            src={product?.images[index]}
            alt={product?.title}
          />
        </picture>
      </section>
      <section className={styles.productInfo_detail}>
        <div className={styles.info}>
          <p className={styles.info_title}>{product?.title}</p>
          <p className={styles.info_price}>{formattedPrice}</p>
        </div>
        <div className={styles.productDetails}>
          {
            product?.details.map(detai => (
              <div key={`${detai[0]}_${product.rerence}`}>
                <p className={styles.itemDetail}>
                  <b className={styles.detail_label}>-{' '} {detai[0]}{detai[1] && ':'}</b>
                  {' '}
                  <span className={styles.detail_value}>{detai[1]}</span>
                </p>
              </div>
            ))
          }
        </div>
      </section>
      <section className={styles.actions}>
        <a href={urlGenerator(product.reference, formattedPrice, curretImage)} target='_blank' rel="noreferrer">Hacer pedido</a>
      </section>
    </div>
  )
}

export default ProductInfo
