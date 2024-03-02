import axios from "axios";

export const GET = async (res) => {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

    // Using Basic Authentication for Cloudinary API
    const response = await axios.get(url, {
      params: {
        max_results: 30, // Adjust based on your needs
      },
      auth: {
        username: apiKey,
        password: apiSecret,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ message: "Error fetching images" });
  }
};
