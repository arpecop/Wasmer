import Link from "next/link";

type ItemT = {
  genid: string;
  text: string;
  random: number;
};

import apps from "../../lib/apps";

export default function SimilarArticles({
  thread,
  text,
}: {
  thread: { q: ItemT; a: ItemT }[];
  text: string;
}) {
  // const preurl = "https://userz.net/";
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">{text}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {thread.map(({ q }) => (
          <div key={q.genid} className='rounded-lg border bg-card text-card-foreground shadow-sm p-4'>

            {q.text.slice(0, 190)}

            <Link
              href={`${apps[q.random].url}${q.genid}`}
              className="text-blue-500 hover:underline flex"
            >
              Read more
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}
