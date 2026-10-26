"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/** The redesign previews ship their own nav, background and footer. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/redesign")) return <>{children}</>;

  const nav = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[760px] flex-col px-6 py-10 sm:px-10 sm:py-14">
      <header className="mb-14 flex items-baseline justify-between">
        <Link href="/" className="border-0 text-bright hover:text-violet">
          ali vayani
        </Link>
        <nav className="flex gap-4">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`border-0 ${active ? "text-bright" : "text-dim hover:text-violet"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 flex items-end justify-between text-xs text-dim">
        <span>austin, tx · last updated oct 2026</span>
        <a
          href="https://www.pokemon.com/us/pokedex/gengar"
          target="_blank"
          rel="noopener noreferrer"
          className="border-0 opacity-85 hover:opacity-100"
          aria-label="gengar"
        >
          <Image src="/gengar.png" alt="" width={56} height={56} className="pixel" priority />
        </a>
      </footer>
    </div>
  );
}
