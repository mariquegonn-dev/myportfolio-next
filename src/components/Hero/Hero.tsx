type HeroProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <section className="mt-28 hidden flex-col gap-10 lg:flex lg:gap-0">
      <div className="container mx-auto mt-20 flex justify-center px-4 lg:mt-0 lg:min-h-[80vh] lg:items-center">
        <h1 className="text-2xl leading-tight text-whitePrimary lg:text-5xl">
          Olá! Me chamo Henrique, prazer,{<br />} e sou desenvolvedor Front-end;
          {<br />}versado em {<span className="text-purplePrimary">React</span>}{" "}
          e {<span className="text-purplePrimary">Typescript</span>}.
        </h1>
      </div>
      {children}
    </section>
  );
};
