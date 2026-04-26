import Image from "next/image";

type PlaceCardProps = {
  title: string;
  range: string;
  imageSrc: string;
  imageAlt: string;
  imageBackgroundClassName: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
  loading?: "eager" | "lazy";
};

export function PlaceCard({
  title,
  range,
  imageSrc,
  imageAlt,
  imageBackgroundClassName,
  description,
  imageWidth = 1404,
  imageHeight = 1068,
  loading = "lazy",
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
      <div className={`${imageBackgroundClassName} overflow-hidden`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading={loading}
          className="block h-auto w-full"
          sizes="(max-width: 767px) 100vw, 352px"
        />
      </div>
      <p className="m-0 px-1 pb-1 font-geist text-[16px] leading-[22px] text-paper-ink">
        {description}
      </p>
    </article>
  );
}
