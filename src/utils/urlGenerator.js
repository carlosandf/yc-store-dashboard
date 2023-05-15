const urlGenerator = (ref, price, image) => {
  const url = `https://api.whatsapp.com/send?phone=${import.meta.env.VITE_NUMBER_PHONE}&text=Hola%20quiero%20comprar%20%C3%A9ste%20producto%3A%0A*Ref:* ${ref}%0A*Precio:* ${price}%0A*Imagen:* ${image}`

  return url
}

export default urlGenerator
