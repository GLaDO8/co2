import Image from "next/image";

export function HeroMolecule() {
  return (
    <figure className="m-0 w-full">
      <Image
        src="/hero-molecule.svg"
        alt="Carbon dioxide molecule diagram with bond and oxygen callouts."
        width={616}
        height={482}
        className="block h-auto w-full"
      />
    </figure>
  );
}
