import type { Metadata } from "next";
import { isValidElement } from "react";
import Link from "next/link";
import Row, { Block } from "@/components/mono/Row";
import ReadingProgress from "./ReadingProgress";

export const metadata: Metadata = {
  title: "SWE Internship Guide — ali vayani",
  description: "Ali Vayani's guide to landing SWE internships: resume tips, interview prep, and applying fast.",
};

export default function SWEInternshipGuide() {
  return (
    <>
      <ReadingProgress />
      <div className="flex flex-col gap-10">
        <Block>
          <Row k="title"><span className="text-bright">guide to landing swe internships</span></Row>
          <Row k="date">may 2025 · ~10 min read</Row>
          <Row k="note">
            <span className="text-dim">
              written for ut students, but most of this applies regardless of where you go
            </span>
          </Row>
          <Row k="tl;dr">
            build things with real users, make your resume defensible and impact-focused,
            start leetcode early, communicate, learn company-specific interview formats,
            and apply as soon as roles open.
          </Row>
        </Block>

        {/* body */}
            <article className="flex flex-col gap-10">

              <Section n={1} title="Intro">
                <P>Here&apos;s my guide to landing SWE internships.</P>
                <P>
                  Just to build some ethos on why I think I&apos;m credible on giving advice for
                  this: this past cycle I was in the trenches. I applied to like 200+ companies,
                  got 5+ interviews, and ended with 4 offers including one at <A href="https://stripe.com/" color="#6772e5">Stripe</A>, the company
                  that processes ~2% of the world&apos;s GDP and the one I&apos;ll be working at
                  this summer.
                </P>
                <P>I was also lucky enough to land a freshman year internship at <A href="https://americas.aramco.com/en" color="#3eb458">Aramco</A>.</P>
                <P>
                  I don&apos;t think what I accomplished was due to me being &ldquo;smarter&rdquo;
                  or anything. It was just &ldquo;optimizing&rdquo; for the game that recruiting
                  is. The reason I&apos;m writing this is because I think I&apos;ve learned a lot,
                  and I don&apos;t see the point in gatekeeping this info, especially since I
                  wouldn&apos;t be where I am without the help of so many people.
                </P>
              </Section>

              <Section n={2} title="What's the Goal?">
                <P>First, before you do anything, what is your goal?</P>
                <P>
                  The reason this question is important is because it&apos;ll allow you to realize:
                </P>
                <OL>
                  <li>How much work you need to put in</li>
                  <li>How far you are</li>
                </OL>
                <P>
                  For example, my goal was to always land the best internship possible. This meant
                  that even when I had 3 offers in my hand, I still applied and still interviewed
                  when I thought the company or opportunity was better.
                </P>
                <P>
                  If you&apos;re not as crazy/obsessed as I am, then maybe you can get content
                  faster and not stress as much as I did.
                </P>
              </Section>

              <Section n={3} title="Reality">
                <P>Now that you have a goal in mind, let me be real.</P>
                <P>
                  Getting a SWE internship in this market is not easy, but it&apos;s not as hard as
                  people make it out to be. If you&apos;re spending your time doing something — ie:
                  focusing on school, being active in orgs, or just tinkering on the side — you
                  will 100% be fine.
                </P>
                <P>
                  I have a lot of friends that didn&apos;t grind the way I did and now they&apos;re
                  interning at Amazon, Patreon, IBM, and other strong companies.
                </P>
                <P>
                  I think going to a T10 CS program helps a lot, so even if you&apos;re entering
                  your junior year and you don&apos;t have any formal experience, you&apos;ll be
                  fine as long as you put in the work.
                </P>
                <P>
                  if you don&apos;t go to a target CS program then know your journey will be harder,
                  but it&apos;s still very doable. you might have to fight for more oppurtunities to
                  land a big name brand, but it&apos;s still possible, you just have to optimize for
                  different things in addition to what i have to say here.
                </P>
              </Section>

              <Section n={4} title="Resume">
                <P>
                  Your resume is single-handedly the most important thing when applying to
                  internships.
                </P>
                <P>
                  It doesn&apos;t matter if you&apos;re a <A href="https://leetcode.com/" color="#FFA116">LeetCode</A> demon if you can&apos;t land a
                  single interview.
                </P>
                <P>When it comes to building a resume, there are two things that matter:</P>
                <OL>
                  <li>The content</li>
                  <li>The framing</li>
                </OL>

                <Sub title="Content">
                  <P>
                    You ofc need projects and experiences to put on the resume. This can be open
                    source contributions, projects you&apos;ve made, or previous internships/work
                    experience you have.
                  </P>
                  <P>
                    I think the single highest EV thing you can have on your resume is working on
                    something with <strong className="text-bright">real users</strong>.
                  </P>
                  <P>
                    This doesn&apos;t mean you need to build something from the ground up. This
                    means you can contribute to open source projects or join orgs.
                  </P>
                  <Callout>
                    UT Registration Plus is a hack istg. Just push one PR to that jawn and you can
                    say you pushed code to a platform with 60k+ users.
                  </Callout>
                  <P>
                    With AI, it&apos;s become so much easier to larp your experiences that one of
                    the only ways to stand out is by shipping to real users.
                  </P>
                </Sub>

                <Sub title="Framing">
                  <P>You want to always put your accomplishments in the best light possible.</P>
                  <P>
                    Don&apos;t lie, but also don&apos;t be afraid to put your work in the best
                    light possible. If you had impact, quantify it. If you had users, number them.
                  </P>
                  <P>
                    Numbers and metrics are so important because they{" "}
                    <strong className="text-bright">SHOW</strong> impact.
                  </P>
                  <P>My rule is:</P>
                  <Callout>Every bullet point should be defendable in an interview.</Callout>
                  <P>
                    If you&apos;re asked about a number, be able to explain how you came to that
                    conclusion.
                  </P>
                  <P>
                    Don&apos;t say one of your coworkers/teammates measured it — a friend did this
                    once and the interviewer just stared at him.
                  </P>
                  <P>
                    Also, make sure to use the <A href="https://simplify.jobs/blog/how-to-use-the-xyz-resume-format" color="#0ea5e9">XYZ format</A>. Google literally tells you to. Search it
                    up if you&apos;re not familiar with it.
                  </P>
                </Sub>

                <Sub title="Quick Note on Grad Date">
                  <P>
                    If you&apos;re an underclassman, I&apos;d rec pushing your grad date up a year
                    on your resume. This will give you a competitive edge.
                  </P>
                  <P>
                    Even if you don&apos;t currently plan on graduating early, you definitely can
                    and plans change. I initially never thought I would, but now I&apos;m very
                    heavily considering it if I get the return offer.
                  </P>
                  <P>
                    Also, if you think you can&apos;t, you probably can, but you may have to take a
                    summer semester — your last semester — or switch from the BS → BSA.
                  </P>
                </Sub>
              </Section>

              <Section n={5} title="Interview Prep">
                <P>Some general advice is do 1-2 <A href="https://leetcode.com/" color="#FFA116">LeetCode</A> questions a day.</P>
                <P>
                  I will say this is sound advice and def do that. LeetCode sadly isn&apos;t
                  something you can cram like that, so start early and be consistent.
                </P>
                <P>
                  I&apos;d highly recommend going through the <A href="https://neetcode.io/" color="#22c55e">NeetCode roadmap</A> or solving the <A href="https://neetcode.io/" color="#22c55e">Blind 75</A> at the minimum. These are questions that have patterns that consistently repeat.
                </P>
                <P>
                  At the end of the day, LeetCode is just pattern recognition with a twist, so the
                  more questions the better.
                </P>

                <Sub title="LeetCode Is Not the Only Format">
                  <P>Now onto some truth.</P>
                  <P>
                    LeetCode interviews are not the only type of interviews. Out of all the
                    interviews I&apos;ve done, only 2 of them were LeetCode-style.
                  </P>
                  <P>
                    This doesn&apos;t mean LeetCode is obsolete and you don&apos;t need to do it.
                    This just means it&apos;s not the only other format.
                  </P>
                  <P>
                    Some companies ask pure conceptual questions and others mimic real programming.
                    These questions are harder to prep for, so your best bet is crowdsourcing info.
                  </P>
                  <P>
                    Most larger tech companies do LeetCode because it&apos;s easy for them, so
                    practice.
                  </P>
                  <Callout>Bloomberg has like 5 rounds of LeetCode iirc.</Callout>
                  <P>
                    With that being said, if you want to be OD and a degenerate like me, then
                    I&apos;d recommend joining the{" "}
                    <A href="https://www.cscareers.dev/" color="#6366f1">cscareerdev</A> Discord server and looking for people who&apos;re
                    interviewing at the same company as you and asking for their experiences.
                  </P>
                  <P>
                    You&apos;d be surprised at how much you can learn and how much of an edge this
                    can provide.
                  </P>
                  <P>
                    I&apos;ve also heard interview formats are subject to change this year with the
                    addition of AI tools. I know I&apos;ve heard Meta is switching things up, and I
                    know Amazon asked some people some weird AI prompting questions.
                  </P>
                </Sub>

                <Sub title="Communicating">
                  <P>One thing that will always be consistent though is communicating.</P>
                  <P>
                    No matter the technical interview, always explain your thought process. There
                    should never be more than 5 seconds of silence. You should always be saying
                    what&apos;s going through your mind.
                  </P>
                  <P>
                    This is partially why I landed <A href="https://stripe.com/" color="#6772e5">Stripe</A> despite not full solving a technical round.
                  </P>
                </Sub>

                <Sub title="Quick Note on Behavioral">
                  <P>STAR method is supreme.</P>
                  <P>
                    This is the only thing you need to know for behavioral, plus
                    stories/experiences. Use ChatGPT or a friend to prep beforehand.
                  </P>
                  <P>
                    ChatGPT is also really good at cooking up practice questions. I&apos;d just walk
                    around my apt reciting answers out loud.
                  </P>
                </Sub>
              </Section>

              <Section n={6} title="Applying">
                <P>Okay, now onto actually applying to the job.</P>
                <P>Applying is easy, but applying fast isn&apos;t.</P>
                <P>
                  Nowadays, each job is getting thousands of applications. This means there are
                  thousands of people applying for a position that will only be given to a couple
                  hundred people at most, and that&apos;s for a larger company.
                </P>
                <P>
                  One of the only ways to get your resume looked at is applying as soon as possible.
                </P>
                <P>
                  I think for each interview I got, I had applied to the role within 2-3 hours of
                  it dropping, if not faster. I remember literally applying to jobs in a movie
                  theater.
                </P>
                <P>
                  The way I went about it was just spam checking zero2sudo&apos;s IG stories and
                  applying ASAP.
                </P>
                <P>
                  Another method: search for SWE internships on LinkedIn, filter by &ldquo;past
                  24hrs,&rdquo; and change <Code>84000</Code> in the URL to <Code>3600</Code>. This
                  filters to the past 1 hour instead of 24.
                </P>
              </Section>

              <Section n={7} title="Bonus: Referrals & Networking">
                <P>Some very generic advice people give out is to network or get referrals.</P>
                <P>Out of all the interviews I got, only one of them came from a referral.</P>
                <P>
                  Referrals are really common nowadays because of how large the pools are, but I
                  think they&apos;re useful in some specific edge cases.
                </P>
                <P>
                  I got my freshman year internship at <A href="https://americas.aramco.com/en" color="#3eb458">Aramco</A> through a referral. The pool of people
                  that could refer was small. Because of this, I think my referral mattered so much
                  more because not many people had the opportunity of getting one.
                </P>
                <P>This was due to it being Aramco Americas, a small American branch for a Saudi company.</P>
                <P>
                  I&apos;ve also heard companies like <A href="https://stripe.com/" color="#6772e5">Stripe</A> &amp; Databricks fast track your
                  application if you get referred. There just aren&apos;t many people to give
                  referrals, so they get valued more.
                </P>
                <P>
                  A way to determine if a referral is helpful is just by looking at company size.
                  Stripe and Databricks have ~10k employees compared to Google&apos;s 200k or
                  Amazon&apos;s 350k.
                </P>
                <P>If the connection is harder to make, then it&apos;s worth more.</P>
              </Section>

              {/* closing */}
              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] border-t border-line pt-10"><span className="text-dim">fin</span><div className="flex flex-col gap-4">
                <P>I know this might sound like a lot and I&apos;m not gonna lie to you, it is a lot to do.</P>
                <P>What I do want you to know tho is it&apos;s so worth the hard work and effort.</P>
                <P>
                  You get so many cool opportunities, you get to meet so many cool people, and on
                  top of it you get paid to learn.
                </P>
                <P>
                  If you cared enough to read about all of that, then I&apos;m confident you will
                  100% be fine.
                </P>
                <P>
                  Good luck with everything, keep your head up, and just have faith everything will
                  work out because it always does, even if it doesn&apos;t seem like it at first.
                </P>
                <P>
                  If you ever need help, feel free to reach out. Always down to look at resumes,
                  help with projects, or run mock interviews.
                </P>
              </div></div>

            </article>

        <Row k="">
          <Link href="/blog" className="text-dim border-0 hover:text-violet">← back to blog</Link>
        </Row>
      </div>
    </>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-[130px_1fr]">
      <span className="text-dim">{String(n).padStart(2, "0")}</span>
      <div className="flex flex-col gap-4">
        <h2 className="text-bright">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <h3 className="text-dim">## {title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="flex flex-col gap-1">
      {Array.isArray(children)
        ? children.map((child, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-dim shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span>{isValidElement<{ children: React.ReactNode }>(child) ? child.props.children : child}</span>
            </li>
          ))
        : children}
    </ol>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l border-violet-dim pl-4 text-dim">{children}</p>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-line bg-white/5 px-1.5 py-0.5 text-bright">
      {children}
    </code>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode; color?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
