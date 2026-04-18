import {
  heroIntro,
  placeCards,
  placesIntro,
  timelineCards,
} from "@/components/co2/data";
import { Frame } from "@/components/co2/Frame";
import { HeroMolecule } from "@/components/co2/HeroMolecule";
import { PlacesGrid } from "@/components/co2/PlacesGrid";
import { TimelineCard } from "@/components/co2/TimelineCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-paper-bg px-4 py-10 md:px-8 md:py-[72px]">
      <Frame title="CO2 is no joke">
        <section className="flex flex-col gap-[33px]">
          <section className="flex flex-col gap-6 md:gap-8">
            <p className="m-0 max-w-[752px] font-tx text-[18px] leading-6 text-paper-ink">
              {heroIntro}
            </p>
            <HeroMolecule />
          </section>

          <section className="flex flex-col gap-6 md:gap-[24px]">
            {timelineCards.map((card) => (
              <TimelineCard key={card.range} card={card} />
            ))}
          </section>

          <section className="flex flex-col gap-[15px]">
            <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
              {placesIntro}
            </p>
            <PlacesGrid places={placeCards} />
          </section>
        </section>
      </Frame>
    </main>
  );
}
