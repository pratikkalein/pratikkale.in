import CardListSkeleton from "@/components/card-list-skeleton";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import Profile from "@/components/profile";
import { cn, fadeIn } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const images = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
      alt: "JavaScript",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      alt: "Nextjs",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-plain.svg",
      alt: "C++",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      alt: "Firebase",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
      alt: "Google Cloud",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg",
      alt: "Docker",
    },
  ];

  return (
    <main className="flex flex-col gap-2 mt-6 ">
      <section className={cn(fadeIn, "animation-delay-200")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <span className="text-base sm:text-xl">
            <Profile />
          </span>
        </Suspense>
      </section>
      <section className={cn(fadeIn, "animation-delay-400 flex flex-col items-center gap-2")}>
        <Suspense fallback={<CardListSkeleton />}>
          <span className="text-justify  mt-3">
            Pratik is a Developer and Cloud enthusiast. He is the organizer of GDG Cloud Pune. He was also the GDSC Lead for the year 2021-2022.
            Pratik enjoys writing technical blogs and articles to share his insights with the community. He is often found discussing Cloud Native
            technologies, DevOps, and Web. When he&apos;s not coding, he enjoys bike rides and photography.
          </span>
        </Suspense>
      </section>

      <section className={cn(fadeIn, "animation-delay-400 ")}>
        <Suspense fallback={<CardListSkeleton />}>
          <h2 className="text-xl font-bold mt-2">Stuff I Know</h2>
          <p className="flex flex-wrap gap-4 mt-4">
            {images.map((image) => (
              <Image key={image.alt} src={image.src} alt={image.alt} width={45} height={45} />
            ))}
          </p>
        </Suspense>
      </section>
    </main>
  );
}
