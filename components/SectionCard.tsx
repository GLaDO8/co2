import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  contentClassName?: string;
};

export function SectionCard({
  title,
  children,
  contentClassName,
}: SectionCardProps) {
  return (
    <section className="border border-paper-border bg-paper-white shadow-[2px_2px_0_0_var(--color-paper-shadow)]">
      <div className="border-b border-paper-border px-2 py-2">
        <div className="w-fit bg-paper-lime">
          <h2 className="m-0 font-departure text-[20px] leading-6 font-normal text-paper-ink">
            {title}
          </h2>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 px-2 py-2 ${contentClassName ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
