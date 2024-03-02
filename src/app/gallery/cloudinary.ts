const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/blog`;

export default cloudinaryUrl;
