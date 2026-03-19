// middlewares/upload.middleware.js
import multer from 'multer'
import CloudinaryStorage from 'multer-storage-cloudinary'
import cloudinary from '../services/cloudinary.service.js'

const createUploadMiddleware = (folder = 'default', options = {}) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `Tradex/${folder}`,
      resource_type: 'auto',
      allowed_formats: options.allowedFormats ?? ['jpg', 'jpeg', 'png', 'webp'],
      transformation: options.transformation ?? [{ width: 1200, crop: 'limit' }]
    }
  })

  const upload = multer({
    storage,
    limits: {
      fileSize: options.maxSizeMB ? options.maxSizeMB * 1024 * 1024 : 5 * 1024 * 1024
    },
    fileFilter: (_req, file, cb) => {
      const allowedMimetypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      const allowedExtensions = /\.(jpg|jpeg|png|webp|gif)$/i

      if (allowedMimetypes.includes(file.mimetype) || allowedExtensions.test(file.originalname)) {
        return cb(null, true)
      }

      cb(new Error('Solo se permiten imágenes'))
    }
  })

  return upload
}

export default createUploadMiddleware
