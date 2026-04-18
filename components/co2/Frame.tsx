import type { ReactNode } from "react";

type FrameProps = {
  title: string;
  children: ReactNode;
};

export function Frame({ title, children }: FrameProps) {
  return (
    <div className="mx-auto flex w-full max-w-[752px] flex-col gap-[33px]">
      <div className="w-fit bg-paper-lime">
        <h1 className="m-0 font-departure text-[28px] leading-[34px] font-normal text-paper-ink">
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}
