import { Post } from "@/hashnode/generated/graphql";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function BlogPostListItem({ post }: Props) {
  return (
    <li>
      <div className="flex flex-col prose prose-neutral dark:prose-invert gap-2">
        <div>
          <Link href={`/blog/${post.slug}`} className="no-underline">
            <span className="text-xl font-semibold  hover:text-mycolor  decoration-mycolor">{post.title}</span>
          </Link>
          <div className="flex items-center text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="mx-1">•</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2">
          {post.tags?.map((tag) => (
            <p className="m-0 text-sm dark:text-white" key={tag.name}>
              #{tag.name.toLocaleLowerCase()}
            </p>
          ))}
        </div>
        <span className="leading-tight text-sm text-muted-foreground text-justify">{post.brief}</span>
      </div>
    </li>
  );
}
