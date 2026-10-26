import type { Metadata } from "next";
import Link from "next/link";
import Row, { Block } from "@/components/mono/Row";

export const metadata: Metadata = {
  title: "blog — ali vayani",
  description: "Thoughts on tech, recruiting, and whatever else I feel like writing about.",
};

type Post = { slug: string; title: string; date: string; description: string };

const posts: Post[] = [
  {
    slug: "my-swe-internship-guide",
    title: "guide to landing swe internships",
    date: "may 2025",
    description:
      "how i went from 200+ applications to 4 offers including stripe. resumes, interviews, and applying fast.",
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col gap-10">
      <Block>
        <Row k="blog">things i've learned, written down so i stop repeating myself.</Row>
      </Block>
      <Block>
        {posts.map((p, i) => (
          <Row key={p.slug} k={i === 0 ? "posts" : ""}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            <span className="text-dim"> · {p.date}</span>
            <p className="text-dim">{p.description}</p>
          </Row>
        ))}
      </Block>
    </div>
  );
}
