import { HeaderNav } from "@/types";
import Link from "next/link";

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <header className="text-whitePrimary container mx-auto bg-red-600 font-normal">
      <div className="flex justify-between p-4 ">
        <div className="flex items-center gap-2.5">
          <p>Logo</p>
          <Link href="/">
            <h2>Henrique Goncalves</h2>
            <p className="text-graySec text-sm">Desenvolvedor Frontend</p>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-10">
            {items.mainNav.map((item) => (
              <li className="py-4" key={item.title}>
                <Link
                  className="hover:text-purplePrimary transition-all ease-in-out"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>Img</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
