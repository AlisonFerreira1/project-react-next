import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-2 items-center m-[7rem]">
      <Image
        className="rounded-[2rem]"
        src="/fotoperfil.png"
        alt="Next.js logo"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-8">
        <h1 className="w-[280px] leading-none text-[40px] break-words whitespace-normal bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">
          Welcome I’m Alison Ferreira
        </h1>
        <h2 className="text-[30px]  bg-gradient-to-r from-white via-red-500 to-red-800 bg-clip-text text-transparent">
          Am Web design & Developer
        </h2>
        <span className="text-justify text-[18px] ">
          Iniciante em programação, atualmente cursando período de Ciência da
          Computação. Tenho experiência com frameworks como Angular, linguagens
          de marcação como HTML, além de conhecimento em linguagens de
          programação como Python, Java e Java Script.
        </span>
      </div>
    </section>
  );
}
