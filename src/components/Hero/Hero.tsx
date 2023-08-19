import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4">
        <h1 className="text-5xl leading-tight text-whitePrimary">
          Olá! Me chamo Henrique, prazer,{<br />} e sou desenvolvedor Front-end;
          {<br />}versado em {<span className="text-purplePrimary">React</span>}{" "}
          e {<span className="text-purplePrimary">Typescript</span>}.
        </h1>
      </div>
      <div className="z-10 mx-auto max-w-max animate-bounce cursor-pointer p-4">
        <Image
          src="/assets/svg/down.svg"
          width={48}
          height={48}
          alt="down button"
        />
      </div>
    </section>
  );
};
