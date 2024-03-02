import url from "@/hashnode/api-url";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(url, {
  headers: {
    "Cache-Control": "no-cache",
  },
});
// Define your GraphQL query
const query = gql`
  query Publication($host: String!, $slug: String!) {
    publication(host: $host) {
      isTeam
      title
      staticPage(slug: $slug) {
        title
        content {
          markdown
        }
      }
    }
  }
`;

// Define an async function to execute the query
export default async function fetchPublication(host: string, slug: string) {
  try {
    const variables = { host, slug };
    const data = (await client.request(query, variables)) as { publication: { staticPage: { content: { markdown: string } } } };
    return data;
  } catch (error) {
    console.error(error);
  }
}
