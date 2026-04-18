import type { ReactNode } from "react";

export type BulletItem = {
  marker?: string;
  text: string;
};

export type AccordionContent = {
  intro: string;
  bullets: BulletItem[];
  outro?: string;
};

export type GraphBar = {
  ppm: string;
  rebreathedAir: string;
};

export type TimelineCardData = {
  range: string;
  title: string;
  body?: ReactNode[];
  bullets?: BulletItem[];
  citationArrowParagraph?: number;
  accordion?: {
    title: string;
    subtitle: string;
    content: AccordionContent;
  };
  rebreathedAirGraph?: {
    bars: GraphBar[];
  };
  bodyFooter?: ReactNode;
};

export type PlaceCardData = {
  title: string;
  range: string;
  imageSrc: string;
  imageAlt: string;
  imageBackgroundClassName: string;
};
