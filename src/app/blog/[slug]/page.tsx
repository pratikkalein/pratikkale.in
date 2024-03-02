import Analytics from "@/components/analytics";
import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPost from "@/server/get-blog-post";
import Image from "next/image";
import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params);
  const title = post?.seo?.title || post?.title;
  const description = post?.seo?.description || post?.subtitle || post?.title;
  const images = post?.coverImage?.url;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Pratik Kale | Blog",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@pratikkale",
    },
  };

  return metadata;
}

export default async function Page({ params }: Props) {
  const blogPost = await getBlogPost(params);

  if (!blogPost) {
    return null;
  }

  const {
    publishedAt,
    readTimeInMinutes,
    title,
    id,
    publication,
    content: { markdown },
  } = blogPost;

  return (
    <main className="max-w-2xl mx-auto flex flex-col mt-6">
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h3 className="text-xs font-light">
          {new Date(publishedAt).toLocaleDateString()} • {readTimeInMinutes} min read
        </h3>
      </section>
      <article className={cn(fadeIn, "animation-delay-400")}>
        <Image src={blogPost.coverImage?.url!} alt={title} width={1200} height={600} />
        <Mdx code={markdown} />
      </article>

      <Analytics postId={id} publicationId={publication?.id!} />
    </main>
  );
}
