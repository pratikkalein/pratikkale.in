import url from "@/hashnode/api-url";
import { GetPostsDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

type Props = {
  first?: number;
  after?: string;
};

export default async function getLatestBlogPosts({ first = 3, after = undefined }: Props) {
  const { publication } = await request({
    url,
    document: GetPostsDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
      first,
      after,
    },
  });

  return publication?.posts;
}
