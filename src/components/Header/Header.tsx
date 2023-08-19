import { MainLogo } from "../MainLogo";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="container mx-auto font-normal text-whitePrimary">
      <div className="flex flex-wrap items-center justify-between p-4">
        <MainLogo />

        <nav aria-label="menu de links para navegação" role="navigation">
          {children}
        </nav>
      </div>
    </header>
  );
};
