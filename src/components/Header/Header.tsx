import { MainLogo } from "../MainLogo";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] border-b-[1px] border-graySec bg-black font-normal text-whitePrimary">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between p-4">
        <MainLogo />

        <nav aria-label="menu de links para navegação" role="navigation">
          {children}
        </nav>
      </div>
    </header>
  );
};
