const rangeBands = [
  {
    range: "400-600 ppm",
    label: "Normal",
    risk: "Outdoor baseline; fresh indoor air.",
    color: "#78B957",
  },
  {
    range: "600-1,000 ppm",
    label: "Good",
    risk: "Ventilation is keeping up.",
    color: "#B4D84C",
  },
  {
    range: "1,000-1,500 ppm",
    label: "Stale",
    risk: "Stale air; ventilation is slipping.",
    color: "#EBFB54",
  },
  {
    range: "1,500-2,500 ppm",
    label: "Elevated",
    risk: "Shared air builds up; time matters.",
    color: "#F2BA42",
  },
  {
    range: "2,500-5,000 ppm",
    label: "High",
    risk: "Poor ventilation; add fresh air.",
    color: "#DE7136",
  },
  {
    range: "5,000-10,000 ppm",
    label: "Very high",
    risk: "Ventilate or leave.",
    color: "#B93A32",
  },
];

const axisTicks = [
  "400 ppm",
  "600 ppm",
  "1,000 ppm",
  "1,500 ppm",
  "2,500 ppm",
  "5,000 ppm",
  "10,000 ppm",
];

function getTickLabelClassName(index: number) {
  if (index === 0) {
    return "left-0 text-left";
  }

  if (index === axisTicks.length - 1) {
    return "right-0 text-right";
  }

  return "left-1/2 -translate-x-1/2 text-center";
}

export function CO2RangeGuide() {
  return (
    <section
      aria-labelledby="co2-range-guide-title"
      className="border border-paper-border bg-paper-white px-2 py-2 shadow-[2px_2px_0_0_var(--color-paper-shadow)]"
    >
      <div className="flex flex-col gap-4">
        <h3
          id="co2-range-guide-title"
          className="m-0 font-departure text-[16px] leading-5 font-normal text-paper-ink"
        >
          CO₂ range guide
        </h3>

        <figure className="m-0 overflow-x-auto pb-1">
          <figcaption className="sr-only">
            CO2 ranges from 400 ppm to 10,000 ppm, with risk increasing from
            normal fresh air to very high ventilation risk.
          </figcaption>
          <div className="min-w-[680px]">
            <div className="grid grid-cols-6 gap-2">
              {rangeBands.map((band) => (
                <div className="flex flex-col items-center" key={band.range}>
                  <p className="m-0 flex min-h-[68px] items-start justify-center px-1 text-center font-body text-[13px] leading-[18px] text-paper-ink">
                    {band.risk}
                  </p>
                  <span
                    aria-hidden="true"
                    className="h-12 border-l border-dashed border-paper-muted"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-6 gap-2">
              {rangeBands.map((band) => (
                <div
                  className="h-7 border border-paper-border"
                  key={band.range}
                  style={{ backgroundColor: band.color }}
                  title={`${band.range}: ${band.label}`}
                />
              ))}
            </div>

            <div className="relative h-[58px] pt-5">
              <div
                aria-hidden="true"
                className="absolute top-5 right-0 left-0 border-t border-paper-border"
              />
              {axisTicks.map((tick, index) => (
                <div
                  className="absolute top-2"
                  key={tick}
                  style={{
                    left: `${(index / (axisTicks.length - 1)) * 100}%`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="block h-5 border-l border-paper-border"
                  />
                  <span
                    className={`absolute top-7 whitespace-nowrap font-departure text-[12px] leading-4 text-paper-muted ${getTickLabelClassName(index)}`}
                  >
                    {tick}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
