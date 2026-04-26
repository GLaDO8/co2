import Image from "next/image";

export function HeroMolecule() {
  return (
    <figure className="m-0 w-full max-w-[616px]">
      <Image
        src="/hero-molecule.svg"
        alt="Carbon dioxide molecule diagram with bond and oxygen callouts."
        width={616}
        height={482}
        loading="eager"
        className="block h-auto w-full"
      />
    </figure>
  );
}
