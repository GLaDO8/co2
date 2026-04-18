import { CitationArrow } from "@/components/co2/CitationArrow";
import { Frame } from "@/components/co2/Frame";
import { HeroMolecule } from "@/components/co2/HeroMolecule";
import { MonoBullets } from "@/components/co2/MonoBullets";
import { PlaceCard } from "@/components/co2/PlaceCard";
import { RebreathedAirFormula } from "@/components/co2/RebreathedAirFormula";
import { RebreathedAirGraph } from "@/components/co2/RebreathedAirGraph";
import { SectionCard } from "@/components/co2/SectionCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-paper-bg px-4 py-10 md:px-8 md:py-[72px]">
      <Frame title="CO2 is no joke">
        <section className="flex flex-col gap-[15px]">
          <section className="flex flex-col gap-6 md:gap-8">
            <p className="m-0 max-w-[752px] font-tx text-[18px] leading-6 text-paper-ink">
              Carbon dioxide is commonly known for its macro effects as a
              greenhouse gas, but most people are not aware of what elevated
              indoor CO2 does to an individual. Let&apos;s explore.
            </p>
            <HeroMolecule />
          </section>

          <section className="flex flex-col gap-[15px]">
            <SectionCard title="What is normal?">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Outside air contains anywhere between 400-500 ppm of CO2. ppm
                is parts per million, or how many units of something exist
                within a million units.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                At these levels, your brain is at peak performance, cerebral
                blood flow is smooth and blood pH is balanced. This is the air
                we evolved to breathe.
              </p>
            </SectionCard>

            <SectionCard title="CO2 and airborne infection risk">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                The correlation between CO2 concentration and risk of airborne
                diseases is well-established.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                CO2 is mainly a ventilation and rebreathed-air indicator, not a
                complete picture of air quality. High indoor CO2 usually means
                that a higher fraction of what you are breathing was already in
                someone else&apos;s lungs.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Humans exhale CO2 at around 40,000 ppm. As indoor air gets
                stale, that pushes up the odds of transmission for respiratory
                infections between humans.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                We can calculate the percentage of rebreathed air in the room
                using the formula below.
              </p>
              <RebreathedAirFormula />
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                If we plot this for various CO2 concentrations, the exposure
                risk climbs fast as CO2 accumulates.
              </p>
              <RebreathedAirGraph
                bars={[
                  { ppm: "400-600", rebreathedAir: "0%" },
                  { ppm: "1000", rebreathedAir: "1.5%" },
                  { ppm: "1400", rebreathedAir: "2.5%" },
                  { ppm: "2500", rebreathedAir: "5%" },
                  { ppm: "5000", rebreathedAir: "11.5%" },
                  { ppm: "10,000", rebreathedAir: "24%" },
                ]}
              />
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                In fact, there are studies showing that CO2 is a useful proxy
                for SARS-CoV-2 risk in shared indoor air
                <CitationArrow />. Keeping CO2 as low as possible reduces the
                amount of rebreathed air you share with everyone else in the
                room.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Okay, but how do you make sense of what 5,000 ppm means? Read
                on, anon.
              </p>
            </SectionCard>

            <SectionCard title="What does CO2 physiologically do?">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                CO2 is a vasodilator. It widens blood vessels and increases
                blood flow in your brain, which can raise pressure enough to
                give you a mild headache, drowsiness, and confusion.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                CO2 also dissolves in blood and lowers pH. At the
                concentrations people usually encounter indoors, this is not
                full-blown respiratory acidosis, but it can still make that
                heavy, sleepy feeling worse.
              </p>
            </SectionCard>

            <SectionCard title="Ventilation, occupancy and exposure duration">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                CO2 is not just about the number on the meter. It is about how
                many people are sharing a space, how much fresh air is entering
                it, and how long you stay there. Those three variables decide
                how quickly rebreathed air accumulates.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                A crowded bedroom overnight, a packed classroom for an hour, and
                a bus commute with shut windows can all land in a similar ppm
                range, but the path there is different. Higher occupancy raises
                CO2 faster, weak ventilation clears it more slowly, and longer
                exposure gives your body more time to feel the effects and your
                infection risk more time to compound <CitationArrow />.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                That is why the same 1,500 ppm reading feels much worse in a
                tiny sealed room than in a large space that only spiked briefly.
                The reading matters, but the shape of the exposure matters too.
              </p>
            </SectionCard>

            <section className="flex flex-col gap-4">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Below are ballpark numbers for CO2 levels in some common places
                you breathe in. Remember that CO2 levels and their effects vary
                with ventilation, occupancy, and duration of exposure.
              </p>

              <div className="border border-paper-border bg-paper-white px-2 py-2 shadow-[2px_2px_0_0_var(--color-paper-shadow)]">
                <div className="flex items-start justify-between gap-3">
                  <p className="m-0 font-departure text-[16px] leading-5 text-paper-ink">
                    Outdoor air CO2 levels for reference
                  </p>
                  <span className="shrink-0 bg-paper-lime font-departure text-[16px] leading-5 text-paper-ink">
                    400-500 ppm
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px] md:flex-row md:items-start">
                <div className="flex flex-1 flex-col gap-[15px]">
                  <PlaceCard
                    title="Clubs"
                    range="2500-9000+ ppm"
                    imageSrc="/clubs.webp"
                    imageAlt="Dithered crowd in a club."
                    imageBackgroundClassName="bg-[#3D4005]"
                    description="A crowded club can soon get hot and humid with elevated levels of CO2, sometimes reaching 9,000+ ppm."
                  />
                  <PlaceCard
                    title="Closed meeting rooms"
                    range="1500-2500 ppm"
                    imageSrc="/meeting-room.webp"
                    imageAlt="Dithered meeting room."
                    imageBackgroundClassName="bg-[#282B02]"
                    description="Depending on the size of the room, long meetings can push CO2 into a range where thinking slows down and the room starts to feel heavy."
                    imageContainerClassName="h-[267px]"
                    imageClassName="object-contain scale-110"
                  />
                  <PlaceCard
                    title="Gyms"
                    range="1500-2500 ppm"
                    imageSrc="/gym.webp"
                    imageAlt="Dithered gym scene."
                    imageBackgroundClassName="bg-[#282B02]"
                    description="A crowded gym with dozens of people exhaling at elevated heart rates. You know where this is going."
                    imageContainerClassName="h-[267px]"
                    imageClassName="object-contain scale-110"
                  />
                  <PlaceCard
                    title="Closed bedrooms"
                    range="1500-2500 ppm"
                    imageSrc="/bedroom.webp"
                    imageAlt="Dithered bedroom."
                    imageBackgroundClassName="bg-[#36390E]"
                    description="Overnight, CO2 can rise steadily if there is no fresh air circulating in the room, disturbing your sleep."
                    imageContainerClassName="h-[267px]"
                    imageClassName="object-contain scale-108"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-[15px]">
                  <PlaceCard
                    title="Airplanes"
                    range="1500-2500 ppm"
                    imageSrc="/airplane-updated.webp"
                    imageAlt="Dithered airplane."
                    imageBackgroundClassName="bg-[#36390E]"
                    description="Flights usually have abundant fresh air mixed with filtered air in the cabin. Crowding can still increase CO2, but usually only to higher levels on long flights. Cabin humidity is also very low, which is why your mouth and lips dry out."
                    imageContainerClassName="h-[267px]"
                    imageClassName="object-contain scale-108"
                  />
                  <PlaceCard
                    title="Buses (decent crowd)"
                    range="1500-2500 ppm"
                    imageSrc="/bus-updated.webp"
                    imageAlt="Dithered bus."
                    imageBackgroundClassName="bg-[#282B02]"
                    description="Short bus commutes are usually fine, but overnight bus journeys can be much more problematic."
                  />
                  <PlaceCard
                    title="Cars"
                    range="1500-2500 ppm"
                    imageSrc="/car-updated.webp"
                    imageAlt="Dithered car."
                    imageBackgroundClassName="bg-[#282B02]"
                    description="Long car rides with closed windows, full recirculation, and multiple passengers can become surprisingly risky. Read on."
                  />
                </div>
              </div>

              <p className="m-0 font-tx text-[12px] leading-4 font-medium text-paper-ink">
                Verified over multiple measurements made using an Aranet4
                sensor.
              </p>
            </section>

            <SectionCard title="Effects on cognition">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                You&apos;re in a packed meeting room. Someone closed the door 30
                minutes ago. Humans exhale CO2 at 40,000 ppm. With little fresh
                air entering the room, you&apos;re gradually inhaling what others
                have exhaled, about 1% of what you breathe.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                % rebreathed air = (indoor_co2 - outdoor_co2)/(exhaled_co2 -
                outdoor_co2)
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Cognitive impairment has started to creep in. Controlled studies
                found about a 15% drop in cognitive scores around this range
                <CitationArrow />. Physical symptoms begin here. You might feel:
              </p>
              <MonoBullets
                items={[
                  { text: "Subtle fatigue" },
                  { text: "Slight headache" },
                  { text: "Heaviness in the room" },
                ]}
              />
            </SectionCard>

            <SectionCard title="CO2 and car rides">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Cars are a nasty tradeoff. Recirculation helps keep traffic
                particles and fumes out, but it also lets exhaled CO2 build very
                quickly inside a small cabin.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Experimental vehicle studies found cabin CO2 can reach roughly
                1,500 ppm within about 20 minutes with one occupant, and around
                3,000 ppm within the same time with two occupants. Separate
                recirculation studies found full recirculation can drive cabin
                CO2 to around 3,000 ppm, while allowing some fresh air keeps CO2
                much lower without giving up all the particle protection
                <CitationArrow />.
              </p>
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                The practical rule is simple: full recirculation is useful
                briefly in heavy traffic, tunnels, or smoky air, but it is a bad
                idea for long rides with passengers and closed windows.
              </p>
            </SectionCard>

            <SectionCard title="My god, what can I do about it?">
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Fresh outdoor air is the fix. If a room feels stale, crack a
                window, open a door, step outside for a few minutes, or reduce
                how many people are packed into the space. If you sleep in a
                closed bedroom, leave a window or door slightly open when you
                can.
              </p>
              <MonoBullets
                items={[
                  { text: "Open windows for cross-ventilation whenever possible" },
                  { text: "Avoid long stays in small crowded rooms" },
                  { text: "Use car recirculation briefly, not for whole rides" },
                  { text: "Use a CO2 monitor if you spend time indoors for work" },
                ]}
                compact
              />
              <p className="m-0 font-tx text-[18px] leading-6 text-paper-ink">
                Personal fixes help, but the real solution is ventilation that
                matches the occupancy of the room <CitationArrow />.
              </p>
            </SectionCard>
          </section>
        </section>
      </Frame>
    </main>
  );
}
