import type { GraphBar } from "./types";

type RebreathedAirGraphProps = {
  bars: GraphBar[];
};

const GRAPH_ROWS = 24;
const COLUMN_WIDTH = 8;
const TOP_GAP_ROWS = 2;
const GRAPH_TICKS = [
  { row: 0, label: "24%" },
  { row: Math.floor(GRAPH_ROWS / 2), label: "12%" },
  { row: GRAPH_ROWS - 1, label: " 0%" },
];

function centerText(text: string, width: number) {
  if (text.length >= width) {
    return text;
  }

  const leftPadding = Math.floor((width - text.length) / 2);
  const rightPadding = width - text.length - leftPadding;
  return `${" ".repeat(leftPadding)}${text}${" ".repeat(rightPadding)}`;
}

function toPercentValue(value: string) {
  return Number.parseFloat(value.replace("%", ""));
}

function glyphForLevel(level: number, height: number) {
  void level;
  void height;
  return "█";
}

function buildGraphLines(
  bars: Array<GraphBar & { height: number }>,
  {
    columnWidth,
    barWidth,
  }: {
    columnWidth: number;
    barWidth: number;
  }
) {
  const graphLines = Array.from({ length: GRAPH_ROWS }, (_, row) => {
    const tickLabel =
      GRAPH_TICKS.find((tick) => tick.row === row)?.label ?? "   ";
    const axis = row === 0 ? "▲" : "│";
    const cells = bars
      .map((bar) => {
        const fillStart = GRAPH_ROWS - bar.height;
        const labelRow =
          bar.height === 0 ? GRAPH_ROWS - 3 : Math.max(0, fillStart - 2);

        if (row === labelRow) {
          return centerText(bar.rebreathedAir, columnWidth);
        }

        if (row < fillStart) {
          return " ".repeat(columnWidth);
        }

        const level = row - fillStart;
        return centerText(
          glyphForLevel(level, bar.height).repeat(
            Math.min(barWidth, columnWidth)
          ),
          columnWidth
        );
      })
      .join("");

    return `${tickLabel} ${axis}${cells}`;
  });

  const xAxis = `    └${bars.map(() => "―".repeat(columnWidth)).join("")}►`;
  const ppmLabels = `     ${bars.map((bar) => centerText(bar.ppm, columnWidth)).join("")}`;

  return [...graphLines, xAxis, ppmLabels].join("\n");
}

export function RebreathedAirGraph({ bars }: RebreathedAirGraphProps) {
  const maxValue = Math.max(
    ...bars.map((bar) => toPercentValue(bar.rebreathedAir))
  );
  const usableGraphRows = GRAPH_ROWS - TOP_GAP_ROWS;
  const normalizedBars = bars.map((bar) => {
    const value = toPercentValue(bar.rebreathedAir);
    const height =
      value === 0 ? 0 : Math.ceil((value / maxValue) * usableGraphRows);

    return {
      ...bar,
      height: Math.max(0, Math.min(usableGraphRows, height)),
    };
  });
  const desktopGraph = buildGraphLines(normalizedBars, {
    columnWidth: COLUMN_WIDTH,
    barWidth: 2,
  });
  const mobileGraph = buildGraphLines(normalizedBars, {
    columnWidth: 6,
    barWidth: 2,
  });

  return (
    <div className="pt-3">
      <div className="hidden items-center justify-center gap-3 min-[481px]:flex">
        <div className="shrink-0 self-center whitespace-nowrap font-departure text-paper-muted [font-size:var(--graph-axis-text-fluid)] [writing-mode:vertical-rl] [transform:rotate(180deg)] max-[480px]:[font-size:var(--graph-axis-text-fluid-mobile)]">
          % rebreathed air
        </div>
        <div className="overflow-hidden">
          <div className="min-w-fit">
            <figure className="m-0">
              <figcaption className="sr-only">
                Rebreathed air percentage by ppm
              </figcaption>
              <pre className="m-0 whitespace-pre font-departure text-paper-ink [font-size:var(--graph-text-fluid)] [line-height:var(--graph-line-height)]">
                {desktopGraph}
              </pre>
            </figure>
            <div className="pt-2 text-center font-departure text-paper-muted [font-size:var(--graph-axis-text-fluid)] leading-5 max-[480px]:[font-size:var(--graph-axis-text-fluid-mobile)] max-[480px]:leading-4">
              ppm
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-[480px]:block">
        <div className="pb-2 text-center font-departure text-paper-muted [font-size:var(--graph-axis-text-fluid-mobile)] leading-none">
          % rebreathed air
        </div>
        <div className="overflow-hidden">
          <figure className="m-0">
            <figcaption className="sr-only">
              Rebreathed air percentage by ppm
            </figcaption>
            <pre className="m-0 whitespace-pre font-departure text-paper-ink [font-size:var(--graph-text-fluid-mobile)] [line-height:var(--graph-line-height-mobile)] [letter-spacing:var(--graph-letter-spacing-mobile)]">
              {mobileGraph}
            </pre>
          </figure>
        </div>
        <div className="pt-2 text-center font-departure text-paper-muted [font-size:var(--graph-axis-text-fluid-mobile)] leading-none">
          ppm
        </div>
      </div>
    </div>
  );
}
