import CardListSkeleton from "@/components/card-list-skeleton";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import Profile from "@/components/profile";
import { cn, fadeIn } from "@/lib/utils";
import { Suspense } from "react";

export default async function Home() {
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
            technologies, DevOps, and Cloud Computing. When he&apos;s not in a terminal, Pratik enjoys bike rides and photography.
          </span>
        </Suspense>
      </section>
    </main>
  );
}
