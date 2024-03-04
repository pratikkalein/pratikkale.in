import AllBlogPostsList from "@/components/all-blog-posts-list";
import BlogTagsFilter from "@/components/blog-tags-filter";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import Search from "@/components/search";
import { cn, fadeIn } from "@/lib/utils";
import { Metadata } from "next/types";
import { Suspense } from "react";

export async function generateMetadata() {
  const title = "Pratik Kale | Blog";
  const description =
    "Welcome to Pratik Kale's blog! Here, I share my adventures in tech, from the latest trends to my own experiments. It's all about exploring what fascinates us. Let's get curious together.";
  const images = "https://raw.githubusercontent.com/pratikkalein/pratikkalein/main/meta.png";
  const url = "https://pratikkale.in/blog";

  const metadata: Metadata = {
    metadataBase: new URL("https://pratikkale.in/blog"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@pratikkalein",
      site: "@pratikkalein",
    },
  };

  return metadata;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: string;
    tags?: string;
  };
}) {
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || "date";
  const tags = searchParams?.tags || "";

  return (
    <main className="mb-8 mt-6 flex flex-col gap-y-4 ">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-row gap-x-2")}>
        <Search placeholder="Search blog posts..." />
        {/* <Sort /> */}
        <Suspense fallback={null}>
          <BlogTagsFilter />
        </Suspense>
      </section>
      <section className={cn(fadeIn, "animation-delay-400 flex flex-col items-center")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <AllBlogPostsList query={query} sort={sort} tags={tags} />
        </Suspense>
      </section>
    </main>
  );
}
