export type CitationLink = {
  url: string;
  title: string;
  description: string;
  faviconUrl?: string;
};

export const citations = {
  covidProxy: {
    url: "https://pubs.acs.org/doi/10.1021/acs.estlett.1c00183",
    title:
      "Exhaled CO2 as a COVID-19 Infection Risk Proxy for Different Indoor Environments and Activities",
    description:
      "Shows how exhaled CO2 can act as a practical proxy for shared rebreathed air and airborne infection risk indoors.",
  },
  vehicleAccumulation: {
    url: "https://pubmed.ncbi.nlm.nih.gov/28873666/",
    title:
      "Carbon dioxide accumulation inside vehicles: The effect of ventilation and driving conditions",
    description:
      "Modeling and measurements showing how recirculation, trip duration, speed, and passenger count drive cabin CO2 higher.",
  },
  sleepLatency: {
    url: "https://www.sciencedirect.com/science/article/pii/S0013935124016906",
    title:
      "Impact of carbon dioxide exposures on sleep latency among healthy volunteers: A randomized order, paired crossover study, evidence from the multiple sleep latency test",
    description:
      "A controlled sleep study reporting shorter sleep latency and higher subjective sleepiness after elevated CO2 exposure.",
  },
} satisfies Record<string, CitationLink>;

type CitationArrowProps = {
  citation: CitationLink;
};

function CitationGlyph() {
  return (
    <span className="inline-block bg-paper-lime px-0.5 align-middle font-departure text-[12px] leading-4 text-paper-ink transition-transform duration-150 group-hover:translate-x-px group-hover:-translate-y-px group-focus-visible:translate-x-px group-focus-visible:-translate-y-px">
      ↗
    </span>
  );
}

export function CitationArrow({ citation }: CitationArrowProps) {
  const parsedUrl = new URL(citation.url);
  const hostname = parsedUrl.hostname.replace(/^www\./, "");
  const faviconUrl = citation.faviconUrl ?? `${parsedUrl.origin}/favicon.ico`;

  return (
    <a
      href={citation.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open citation: ${citation.title}`}
      className="group relative ml-1 inline-flex align-middle no-underline focus:outline-none"
    >
      <CitationGlyph />
      <span className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-[min(320px,calc(100vw-2rem))] flex-col gap-2 border border-paper-border bg-paper-white p-2 shadow-[2px_2px_0_0_var(--color-paper-shadow)] group-hover:flex group-focus-visible:flex">
        <span className="flex items-center gap-2 font-tx text-[12px] leading-4 text-paper-muted">
          {/* biome-ignore lint/performance/noImgElement: external favicons are tiny remote assets that do not benefit from Next Image here */}
          <img
            src={faviconUrl}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 shrink-0 border border-paper-border bg-paper-white object-contain"
          />
          <span className="truncate">{hostname}</span>
        </span>
        <span className="font-tx text-[14px] leading-5 text-paper-ink">
          {citation.title}
        </span>
        <span className="font-tx text-[12px] leading-4 text-paper-muted">
          {citation.description}
        </span>
      </span>
    </a>
  );
}
