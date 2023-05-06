import { supabase } from "./supabase";

const createNewWatch = async ({}) => {

}

const uploadFiles = async (files, filePath, ref) => {

  const images = []
  let error = null

  files.forEach( async file => {
    console.log({files})
    const image = {...file}
    console.log({image})
    const { data, err } = await supabase
      .storage
      .from('images')
      .upload(`/${filePath}/${ref}_00${images.length}.png`, file)

      if (err) {
        error = err
        console.log(error)
      } else {
        console.log(data)
        console.log(file)
      images.push(data?.path)
    }
  });

  // for (const file of files) {
    
  // }

  return [error, images]
}

export {
  uploadFiles
}