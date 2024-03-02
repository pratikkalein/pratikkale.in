import LatestBlogPostsList from "@/components/latest-blog-posts-list";
import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";
import { cn, fadeIn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <div className="flex flex-col gap-4 pb-12 pt-12 text-center items-center sm:gap-8 sm:py-10">
        <section className={cn(fadeIn, "animation-delay-400")}>
          <span className="text-base sm:text-xl">
            <Profile />
          </span>
        </section>
      </div>

      <section className={cn(fadeIn, "animation-delay-600 flex flex-col items-center ")}>
        <div>
          <hr className={cn(fadeIn, "dark:border-white border-gray-700 mb-8 animation-delay-600")} />
          <LatestBlogPostsList />

          <Button asChild className="mt-6 bg-mycolor text-white dark:hover:text-mycolor self-start">
            <Link href={"/blog"}>
              Read More <ArrowRightCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
