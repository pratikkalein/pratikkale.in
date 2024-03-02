import ImageSkeleton from "@/components/image-skeleton";
import { cn, fadeIn } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import cloudinaryUrl from "./cloudinary";

let loading = true;
async function getData() {
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const response = await axios.get(cloudinaryUrl, {
    params: {
      max_results: 30,
    },
    auth: {
      username: apiKey,
      password: apiSecret,
    },
  });
  if (!response == 200) {
    throw new Error(response.statusText);
  }
  return response.data;
}

async function Gallery() {
  const data = await getData();
  const images = data.resources;
  loading = false;

  if (loading) {
    return <ImageSkeleton />;
  }

  return (
    <>
      <section className={cn(fadeIn, "animation-delay-200 mt-6 ")}>
        <h1 className="text-2xl font-bold mb-4">Gallery</h1>
        <p className="mb-6 text-justify">
          I&apos;m passionate about photography, capturing everything from the dynamic energy of street life to the tranquil beauty of landscapes.
          Each photo tells a story, whether it&apos;s a spontaneous moment in the city or the serene calm of nature. I&apos;d love for you to join me
          on this visual journey. For more of my work and to stay updated with my latest captures, follow me on{" "}
          <a href="https://instagram.com/pratikkale.in" className="underline decoration-mycolor decoration-2" target="_blank" rel="noreferrer">
            Instagram.
          </a>{" "}
          Let&apos;s connect and explore the world through my lens together!
        </p>

        <div className={cn(fadeIn, "animation-delay-600 responsive-columns")}>
          {images.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Image src={image.url} alt={image.public_id} width={400} height={100} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
