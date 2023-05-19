import styles from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ images, price, title, id, category }) => {
  const formattedPrice = Number(price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
  const navigate = useNavigate()

  const handLeClick = () => {
    navigate(`/product/${category}/${id}`)
  }
  return (
    <div onClick={handLeClick} className={styles.card}>
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
      </section>
    </div>
  )
}

export default ProductCard
