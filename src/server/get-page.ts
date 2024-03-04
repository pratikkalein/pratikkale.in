import url from "@/hashnode/api-url";
import { PublicationDocument } from "@/hashnode/generated/graphql";
import { request } from "graphql-request";

export default async function fetchPublication(slug: string) {
  const data = await request({
    url,
    document: PublicationDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
      slug,
    },
  });
  return data;
}
