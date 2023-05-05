import { supabase } from "./supabase";

const createNewWatch = async ({}) => {

}

const uploadFiles = async (files, filePath, ref) => {

  const images = []
  let error = null

  for (const file of files) {
    const {
        data,
        err 
      } = await supabase
        .storage
        .from('images')
        .upload(`${filePath}/${ref}_${images.length}.png`, file)
    
    if (err) {
      error = err
      console.log(error)
    } else {
      console.log(data)
      images.push(data?.path)
    }
  }

  return [error, images]
}

export {
  uploadFiles
}