"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { MonoBullets } from "./MonoBullets";
import type { AccordionContent } from "./types";

type AccordionProps = {
  title: string;
  subtitle: string;
  content?: AccordionContent;
  children?: ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({
  title,
  subtitle,
  content,
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
          <span className="font-tx text-[18px] leading-6 font-bold text-paper-ink">
            {title}
          </span>
          <span className="font-tx text-[18px] leading-6 text-paper-muted">
            {open ? subtitle : "click to expand"}
          </span>
        </div>
        <span className="font-tx w-6 shrink-0 text-center text-[24px] leading-6 font-semibold text-paper-ink">
          {open ? "-" : "+"}
        </span>
      </button>
      {open ? (
        <div className="pt-2 font-tx text-[18px] leading-6 text-paper-ink">
          {children ?? (
            <>
              {content?.intro ? <p className="m-0">{content.intro}</p> : null}
              {content?.bullets?.length ? (
                <div className="pt-1">
                  <MonoBullets items={content.bullets} compact />
                </div>
              ) : null}
              {content?.outro ? (
                <p className="m-0 pt-3">{content.outro}</p>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </section>
  );
}
