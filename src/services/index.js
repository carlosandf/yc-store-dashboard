import { supabase } from "./supabase";

const baseUrl = import.meta.env.VITE_IMAGE_URL

const login = async ({ email, password }) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return [data, error]
}

const createNewProduct = async ({ brand, price, ref, measures, images }) => {
  const { data, error } = await supabase
  .from('watches')
  .insert([
    {
      brand,
      price: Number(price),
      ref: ref,
      measures,
      images
    }
  ])

  return [error, data]
}

const uploadFiles = async (files, filePath, ref) => {

  const images = []
  let error = null

  for await (const file of files) {
    const { data, err } = await supabase
      .storage
      .from('images')
      .upload(`/${filePath}/${ref}_00${images.length}.png`, file)

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
  uploadFiles,
  login
}