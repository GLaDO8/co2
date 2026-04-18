import type { ReactNode } from "react";
import { Accordion } from "./Accordion";
import { CitationArrow } from "./CitationArrow";
import { MonoBullets } from "./MonoBullets";
import { RebreathedAirGraph } from "./RebreathedAirGraph";
import type { TimelineCardData } from "./types";

type TimelineCardProps = {
  card: TimelineCardData;
};

function BodyParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
      {children}
    </p>
  );
}

export function TimelineCard({ card }: TimelineCardProps) {
  return (
    <article className="border border-paper-border bg-paper-white shadow-[2px_2px_0_0_var(--color-paper-shadow)]">
      <header className="flex flex-col gap-2 border-b border-paper-border px-2 py-2 md:flex-row md:items-start md:gap-3">
        <span className="w-fit bg-paper-lime font-departure text-[18px] leading-[22px] text-paper-ink">
          {card.range}
        </span>
        <h2 className="m-0 font-departure text-[18px] leading-[22px] font-normal text-paper-ink">
          {card.title}
        </h2>
      </header>
      <div className="space-y-3 px-2 py-2">
        {card.body?.map((paragraph, index) =>
          typeof paragraph === "string" ? (
            <BodyParagraph key={index}>
              {paragraph}
              {card.citationArrowParagraph === index ? <CitationArrow /> : null}
            </BodyParagraph>
          ) : (
            <div key={index}>
              {paragraph}
              {card.citationArrowParagraph === index ? <CitationArrow /> : null}
            </div>
          )
        )}
        {card.bullets ? <MonoBullets items={card.bullets} /> : null}
        {card.accordion ? (
          <div className="pt-2">
            <Accordion
              title={card.accordion.title}
              subtitle={card.accordion.subtitle}
              content={card.accordion.content}
              defaultOpen
            />
          </div>
        ) : null}
        {card.rebreathedAirGraph ? (
          <RebreathedAirGraph bars={card.rebreathedAirGraph.bars} />
        ) : null}
        {card.bodyFooter}
      </div>
    </article>
  );
}
