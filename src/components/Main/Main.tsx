"use client";

import { IconsMain } from "@/types/IconsLang";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type IconsProps = {
  icons: IconsMain;
};

export const Main = ({ icons }: IconsProps) => {
  const ref = useRef(null);

  return (
    <>
      <div className="mt-28 grid justify-items-center gap-12 px-4 lg:gap-24">
        <div className="w-60">
          <Image
            className="rounded-full"
            src="/assets/images/perfil.png"
            width={729}
            height={730}
            alt="foto de perfil"
          />
        </div>

        <div>
          <div ref={ref}>
            <h1 className="mb-2 text-2xl leading-tight text-whitePrimary lg:text-5xl">
              Desenvolvedor Frontend em busca de oportunidade profissional
              <span className=" text-purplePrimary">.</span>
            </h1>
            <span className="text-graySec">
              Sergipe, Barra dos coqueiros 🌴
            </span>
          </div>
          <div className="mt-10 grid gap-10 text-base text-whitePrimary lg:text-xl">
            <p>
              Olá! Sou um apaixonado desenvolvedor frontend com uma sólida base
              em tecnologias como o{" "}
              <span className="text-purplePrimary">React.js</span>,{" "}
              <span className="text-purplePrimary">Typescript</span> e{" "}
              <span className="text-purplePrimary">Next.js</span>.
            </p>
            <p>
              Sempre fui conectado com a tecnologia. Lembro que, por volta dos
              10 anos, frequentava fórums para fazer servidor private de alguns
              jogos; na época não tinha muito conhecimento, mas seguia os
              tutoriais e me famialirazava com PHP, Banco de dados e Linux.
            </p>
            <p>
              Um pouco mais maduro, comecei meus estudos em desenvolvimento
              frontend, e me apaixonei. O sentimento que sinto ao transformar
              uma ideia, principalmente de automatizar algum processo manual, me
              faz sentir que estou no caminho certo.
            </p>
            <p>
              {" "}
              Estou ansioso por uma oportunidade que me permita demonstrar
              minhas habilidades. Tenho facilidade em aprender e transmitir
              conhecimento, sou proativo e estou em constante aperfeiçoamento.
              Posso garantir que entregarei o meu melhor, com muita dedicação e
              empenho!
            </p>
            <p>
              Veja meus projetos; lá detalho quais foram minhas
              responsabilidades e o que eu visava entregar. Csao se interesse,{" "}
              <Link
                href="https://wa.me/5571987510739?text=Ol%C3%A1+Henrique%21"
                className="text-purplePrimary underline transition-colors duration-300 hover:text-purple-400"
                target="_blank"
              >
                entre em contato comigo!
              </Link>
            </p>
          </div>
        </div>

        <div className="justify-self-start">
          <h2 className="relative mb-10 text-2xl text-whitePrimary before:absolute before:-left-2 before:h-[30px] before:w-[2px] before:bg-purplePrimary before:content-['']">
            Tecnologias e Conhecimentos
          </h2>
          <div className="flex flex-wrap gap-5">
            {icons.icons.map((items) => (
              <Image
                key={items.title}
                src={items.src}
                alt={items.title}
                width={items.src.endsWith("figma.svg") ? 32 : 48}
                height={48}
              />
            ))}
          </div>
        </div>

        <div>
          <Image
            src="/assets/images/imageMain.png"
            width={643}
            height={800}
            alt="foto nas dunas"
          />
        </div>

        <div className="border-greySec mt-10 w-full border-t-[1px]"></div>
      </div>
    </>
  );
};
