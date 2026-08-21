const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'livora_DEV',
    allowedformat: ["jpg", "png", "jpeg", "pdf"],
    process: process.env.CLOUDINARY_API_SECRET,
  },
});

module.exports = {
    cloudinary,
    storage,
};