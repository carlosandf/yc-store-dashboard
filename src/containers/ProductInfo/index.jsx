/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import styles from './ProductInfo.module.css'
import { getOneProduct } from '../../services'
import Loading from '../../components/Loading'
import formater from '../../utils/formatText'
import urlGenerator from '../../utils/urlGenerator'
import { useNavigate, useParams } from 'react-router-dom'
import Icon from '../../components/Icon'

const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const [index, setIndex] = useState(0)
  const [curretImage, setCurrentImage] = useState(product?.images[0])
  const navigate = useNavigate()
  const { id } = useParams()

  const formattedPrice = Number(product?.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

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
    navigate(-1)
  }

  if (product === null) {
    return (
      <dir className={styles.productInfo}>
        <Loading />
      </dir>
    )
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productInfo}>
        <section className={styles.imagesGalery}>
          <div
            onClick={closeModal}
            className={styles.closeButton}
          >
            <Icon type='close' />
          </div>
          {product.images.length > 1 && (
            <>
              {
                index > 0 && (
                  <div
                    onClick={prevImage}
                    className={styles.previousButton}>
                    <Icon type='arrow_left' />
                  </div>
                )
              }
              {
                index < product.images.length - 1 && (
                  <div
                    onClick={nextImage}
                    className={styles.nextButton}>
                    <Icon type='arrow_right' />
                  </div>
                )
              }
            </>
          )}
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
            <div>
              <p className={styles.itemDetail}>
                <b className={styles.detail_label}>- Marca:</b>
                {' '}
                <span className={styles.detail_value}>{product?.brand}</span>
              </p>
            {
              product?.details.map(detai => (
                <p key={`${detai[0]}_${product.rerence}`} className={styles.itemDetail}>
                  <b className={styles.detail_label}>-{' '} {detai[0]}{detai[1] && ':'}</b>
                  {' '}
                  <span className={styles.detail_value}>{detai[1]}</span>
                </p>
              ))
            }
            </div>
          </div>
        </section>
        <section className={styles.actions}>
          <a href={urlGenerator(product.reference, formattedPrice, curretImage)} target='_blank' rel="noreferrer">Hacer pedido</a>
        </section>
      </div>
    </div>
  )
}

export default ProductInfo
