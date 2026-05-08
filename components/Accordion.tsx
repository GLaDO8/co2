"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type AccordionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({
  title,
  subtitle,
  children,
  defaultOpen = true,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border border-black px-2 py-2">
      <button
        type="button"
        className="flex w-full items-start gap-3 text-left"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-0 md:flex-row md:items-start md:gap-3">
          <span className="font-body text-[18px] leading-6 font-bold text-paper-ink">
            {title}
          </span>
          <span className="font-body text-[18px] leading-6 text-paper-muted">
            {open ? subtitle : "click to expand"}
          </span>
        </div>
        <span className="font-body w-6 shrink-0 text-center text-[24px] leading-6 font-semibold text-paper-ink">
          {open ? "-" : "+"}
        </span>
      </button>
      {open ? (
        <div className="pt-2 font-body text-[18px] leading-6 text-paper-ink">
          {children}
        </div>
      ) : null}
    </section>
  );
}
