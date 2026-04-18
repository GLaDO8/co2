import Image from "next/image";

type PlaceCardProps = {
  title: string;
  range: string;
  imageSrc: string;
  imageAlt: string;
  imageBackgroundClassName: string;
  description: string;
  imageClassName?: string;
  imageContainerClassName?: string;
};

export function PlaceCard({
  title,
  range,
  imageSrc,
  imageAlt,
  imageBackgroundClassName,
  description,
  imageClassName,
  imageContainerClassName,
}: PlaceCardProps) {
  return (
    <article className="flex flex-col gap-2 border border-paper-border bg-paper-white p-2 shadow-[2px_2px_0_0_var(--color-paper-shadow)]">
      <header className="flex items-start justify-between gap-3">
        <h3 className="m-0 font-departure text-[16px] leading-5 font-normal text-paper-ink">
          {title}
        </h3>
        <span className="shrink-0 bg-paper-lime font-departure text-[16px] leading-5 text-paper-ink">
          {range}
        </span>
      </header>
      <div
        className={`${imageBackgroundClassName} ${imageContainerClassName ?? "h-[263px]"} relative overflow-hidden`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-contain ${imageClassName ?? ""}`}
          sizes="(max-width: 767px) 100vw, 352px"
        />
      </div>
      <p className="m-0 px-1 pb-1 font-tx text-[16px] leading-[22px] text-paper-ink">
        {description}
      </p>
    </article>
  );
}
