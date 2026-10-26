import type { ReactNode } from "react";

/** One labeled line: dim key in a left gutter, value on the right. Stacks on phones. */
export default function Row({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr]">
      <span className="text-dim">{k}</span>
      <span>{children}</span>
    </div>
  );
}

export function Block({ children }: { children: ReactNode }) {
  return <section className="flex flex-col gap-1.5">{children}</section>;
}
