import styles from './ProductCard.module.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ProductCard = ({ images, price, title, id }) => {
  const { toggleModal } = useContext(AppContext)
  const formattedPrice = Number(price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className={styles.card}>
      <div className={styles.gallery}>
        <picture className={styles.imageContainer} key={`${images[0]}_card`}>
          <img className={styles.cardImage} src={images[0]} alt='' />
        </picture>
      </div>
      <section className={styles.infoAndAction}>
        <div className={styles.info}>
          <p className={styles.price}>{formattedPrice}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.action}>
          <button
            className={styles.button}
            onClick={() => toggleModal({ isOpen: true, id })}
          >
            Ver detalles
          </button>
        </div>
      </section>
    </div>
  )
}

export default ProductCard
