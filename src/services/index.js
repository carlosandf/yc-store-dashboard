/* eslint-disable camelcase */
import { supabase } from './supabase'

const baseUrl = import.meta.env.VITE_IMAGE_URL

const getAllProducts = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')

  return [error, products]
}

const getOneProduct = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)

  return [error, data]
}

const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return [data, error]
}

const createNewProduct = async ({ title, price, reference, category, details, images, user_id }) => {
  const { data, error } = await supabase
    .from('products')
    .insert([
      {
        title,
        price: Number(price),
        reference,
        category,
        details,
        images,
        user_id
      }
    ])

  return [error, data]
}

const uploadFiles = async ({ files, path, reference }) => {
  console.log(files)
  const images = []
  let error = null

  for await (const file of files) {
    console.log(file)
    const { data, err } = await supabase
      .storage
      .from('images')
      .upload(`/${path}/${reference}_00${images.length}.png`, file)

    if (err) {
      error = err
      console.log(error)
    } else {
      images.push(`${baseUrl}/${data?.path}`)
    }
  }

  return [error, images]
}

export {
  createNewProduct,
  getAllProducts,
  getOneProduct,
  uploadFiles,
  login
}
