import { HeaderNav } from "@/types";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <header className=" container mx-auto font-normal text-whitePrimary">
      <div className="flex flex-wrap justify-between p-4">
        <div className="flex items-center gap-2.5">
          <Image
            className="max-w-full rounded-full object-fill"
            src="/assets/images/perfil.jpg"
            width={48}
            height={48}
            alt="imagem de perfil"
          />
          <Link href="/">
            <h2>Henrique Goncalves</h2>
            <p className="text-sm text-graySec">Desenvolvedor Frontend</p>
          </Link>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center gap-10">
            {items.mainNav.map((item) => (
              <li className="py-4" key={item.title}>
                <Link
                  className="transition-all ease-in-out hover:text-purplePrimary"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Image
                className="cursor-pointer"
                src="/assets/svg/scheme.svg"
                width={24}
                height={24}
                alt="scheme button"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
