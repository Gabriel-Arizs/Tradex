import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})

export const deleteImage = async publicId => {
  try {
    if (!publicId) return
    return await cloudinary.v2.uploader.destroy(publicId)
  } catch (error) {
    throw new Error('Error al eliminar la imagen')
  }
}

export default cloudinary
