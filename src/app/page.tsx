import Link from "next/link";
import Image from "next/image";
import Row, { Block } from "@/components/mono/Row";
import { projects } from "@/data/data";

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_180px] sm:gap-8">
        <div className="flex flex-col gap-10">
      <Block>
        <Row k="name"><span className="text-bright">ali vayani</span></Row>
        <Row k="now">organizing <Ext href="https://hacktx.com">hacktx</Ext> and studying cs @ <Ext href="https://www.cs.utexas.edu/">ut austin</Ext></Row>
        <Row k="next">back at <Ext href="https://stripe.com">stripe</Ext>, winter 27</Row>
        <Row k="links">
          <Ext href="https://github.com/ali-vayani">github</Ext> ·{" "}
          <Ext href="https://linkedin.com/in/ali-vayani">linkedin</Ext> ·{" "}
          <a href="mailto:ali.vayani@utexas.edu">email</a> ·{" "}
          <Ext href="https://open.spotify.com/user/3xv7snxs9kpffyb00n3a7n5i9">spotify</Ext>
        </Row>
      </Block>

      <Block>
        <Row k="about">
          i like problems that are ambiguous and force you to think about how systems interact.
          lately that&apos;s been ml infra, and learning pytorch properly instead of copy-pasting it.
        </Row>
      </Block>
        </div>
        <Image
          src="/me.jpg"
          alt="ali, mid arnold palmer"
          width={707}
          height={980}
          className="w-full max-w-[180px] rounded-[4px] sm:w-[180px]"
          priority
        />
      </div>


      <Block>
        <Row k="i believe">
          <span className="text-bright">don&apos;t gatekeep knowledge.</span>{" "}
          <em>it&apos;s never your effort alone that gets you somewhere, someone helped. pay it forward with what you learned.</em>
        </Row>
        <Row k="">
          <span className="text-bright">hard work trumps everything.</span>{" "}
          <em>i&apos;ve failed interviews, exams, and so much more. but what matters is coming back having learned something.</em>
        </Row>
      </Block>

      <Block>
        <Row k="experience">
          <Ext href="https://stripe.com">stripe</Ext>, swe intern, summer 26
          <span className="text-dim italic"> · performance and dev infra for stripe&apos;s fork of <Ext href="https://cube.dev">cube.js</Ext></span>
        </Row>
        <Row k="">
          <Ext href="https://www.aramco.com/en">aramco</Ext>, swe intern, summer 25
          <span className="text-dim italic"> · ingestion and performance for an internal rag service</span>
        </Row>
        <Row k="">
          <Ext href="https://freetailhackers.com/">freetail hackers</Ext>, tech director 26, organizer 25
          <span className="text-dim italic"> · rebuilt <Ext href="https://rodeo.freetailhackers.com">rodeo</Ext>, a hackathon management platform, 3000 users. built <Ext href="https://gitlab.com/freetail-hackers/echo">echo</Ext>, a hackathon judging platform. zero downtime.</span>
        </Row>
      </Block>

      <Block>
        {projects.map((p, i) => (
          <Row key={p.link} k={i === 0 ? "projects" : ""}>
            <Ext href={p.link}>{p.title}</Ext>
            <span className="text-dim italic"> · {p.description}</span>
          </Row>
        ))}
      </Block>

      <Block>
        <Row k="obsessed with">bringing people together</Row>
        <Row k="">optimizing for my goals</Row>
        <Row k="">matcha and <Ext href="https://beliapp.co/app/alivayani">belimaxxing</Ext></Row>
        <Row k="">what i&apos;m wearing</Row>
        <Row k="">building and learning cool sh*t</Row>
        <Row k=""><Ext href="https://www.pokemon.com/us/pokedex/gengar">gengar</Ext></Row>
      </Block>

      <Block>
        <Row k="writing">
          <Link href="/blog/my-swe-internship-guide">guide to landing swe internships</Link>
          <span className="text-dim italic"> · may 2025</span>
        </Row>
        <Row k=""><Link href="/blog" className="text-dim border-0 hover:text-violet">all posts →</Link></Row>
      </Block>
    </div>
  );
}
