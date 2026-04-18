import Image from "next/image";
import type { PlaceCardData } from "./types";

type PlacesGridProps = {
  places: PlaceCardData[];
};

function PlaceCard({ place }: { place: PlaceCardData }) {
  return (
    <article className="border border-paper-border bg-paper-white shadow-[2px_2px_0_0_var(--color-paper-shadow)]">
      <header className="flex items-start justify-between gap-3 px-2 py-2">
        <h3 className="m-0 font-departure text-[16px] leading-5 font-normal text-paper-ink">
          {place.title}
        </h3>
        <span className="shrink-0 bg-paper-lime font-departure text-[16px] leading-5 text-paper-ink">
          {place.range}
        </span>
      </header>
      <div
        className={`m-2 ${place.imageBackgroundClassName}`}
      >
        <Image
          src={place.imageSrc}
          alt={place.imageAlt}
          width={351}
          height={263}
          className="block h-auto w-full"
        />
      </div>
    </article>
  );
}

export function PlacesGrid({ places }: PlacesGridProps) {
  return (
    <section className="grid gap-[15px] md:grid-cols-2">
      {places.map((place) => (
        <PlaceCard key={place.title} place={place} />
      ))}
    </section>
  );
}
