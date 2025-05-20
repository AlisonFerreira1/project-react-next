import Image from "next/image";
import Habilidades from "../components/habilidades";
const descricao = [
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
  {
    icon: "icone",
    nomeh: "Html",
    nivel: "avançado",
  },
];
export default function habilidade() {
  return (
    <section className="m-[5rem] grid grid-cols-2 gap-[3rem] ">
      <div className="col-span-2 flex justify-center">
        <h1 className="text-[40px]">Habilidades</h1>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[20px]">Titulo habilidades </h2>
        <span className="flex text-justify">
          Iniciante em programação, atualmente cursando período de Ciência da
          Computação. Tenho experiência com frameworks como Angular, linguagens
          de marcação como HTML, além de conhecimento em linguagens de
          programação como Python, Java e Java Script.
        </span>
        <div className="grid gri-cols-1 sm:grid-cols-2 gap-[0.5rem]">
          {" "}
          {descricao.map((xp, index) => (
            <Habilidades
              key={index}
              icon={xp.icon}
              nomeh={xp.nomeh}
              nivel={xp.nivel}
            />
          ))}
        </div>
      </div>
      <Image src="/imagemh.png" alt=" logo" width={500} height={500}></Image>
    </section>
  );
}
