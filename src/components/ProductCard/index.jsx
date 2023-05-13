const ProductCard = ({ images, price, title }) => {
  return (
    <div>
      <picture>
        {images.map(url => (
          <img key={`${url}_card`} src={url} alt='' />
        ))}
      </picture>
      <section>
        <div>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div>
          <button>Hacer pedido</button>
        </div>
      </section>
    </div>
  )
}

export default ProductCard
