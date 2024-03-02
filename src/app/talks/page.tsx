import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import fetchPublication from "@/server/get-page";

export default async function Talks() {
  const host = process.env.HASHNODE_HOST || ""; // Ensure host is defined
  const slug = "talks";
  const data = (await fetchPublication(host, slug)) as { publication: { staticPage: { title: string; content: { markdown: string } } } };

  return (
    <main>
      <section className={cn(fadeIn, "animation-delay-200 mt-6 ")}>
        <h1 className="font-bold text-2xl mb-3">{data?.publication.staticPage.title}</h1>
        <p className="mb-6 text-justify">
          I love diving into the world of tech, and even more so, sharing what I discover. You&apos;ll often find me giving talks or running workshops
          at community events – it&apos;s where I get to geek out with others who are just as curious. Let&apos;s explore the latest in tech and learn
          something new together!
        </p>
        <div className="flex flex-col items-center">
          <Mdx code={data?.publication.staticPage.content.markdown} />
        </div>
      </section>
    </main>
  );
}
