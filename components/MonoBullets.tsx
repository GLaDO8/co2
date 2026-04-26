import type { BulletItem } from "./types";

type MonoBulletsProps = {
  items: BulletItem[];
  compact?: boolean;
};

export function MonoBullets({ items, compact = false }: MonoBulletsProps) {
  return (
    <div className={compact ? "space-y-0" : "space-y-0.5"}>
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-3">
          {/* Paper uses literal Departure Mono glyphs rather than list-style bullets. */}
          <span
            aria-hidden="true"
            className="font-departure w-3 shrink-0 text-[18px] leading-6 text-paper-ink"
          >
            {item.marker ?? "*"}
          </span>
          <span className="font-tx text-[18px] leading-6 text-paper-ink">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
