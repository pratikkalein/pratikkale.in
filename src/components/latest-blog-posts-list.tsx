import { Post } from "@/hashnode/generated/graphql";
import getLatestBlogPosts from "@/server/get-latest-blog-posts";
import BlogPostList from "./blog-post-list";

async function LatestBlogPostsList() {
  let after = "";
  const posts = await getLatestBlogPosts({ after });

  const postList: Post[] = posts ? posts.edges.map((edge) => edge.node as Post) : [];

  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Blogs</h1>
      <BlogPostList posts={postList} />
    </>
  );
}

export default LatestBlogPostsList;
