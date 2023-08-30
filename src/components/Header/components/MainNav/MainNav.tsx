"use client";

import { HeaderNav } from "@/types";
import { useMenuMobile } from "../MenuMobile/hooks/useMenuMobile";
import { MenuMobile } from "../MenuMobile";
import { LinkMenu } from "../LinkMenu/LinkMenu";
import OutsideClickHandler from "react-outside-click-handler";

type menuNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: menuNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMenuMobile();
  return (
    <>
      <ul className="hidden items-center gap-10 lg:flex">
        {items.mainNav.map((item) => (
          <li key={item.title}>
            <LinkMenu href={item.href} title={item.title} />
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <MenuMobile
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      {isOpenMenu && (
        <div className="absolute left-0 top-24 z-[1000] grid min-h-screen w-full items-start bg-black">
          <ul className="grid justify-center justify-items-center gap-4 px-4 text-xl">
            {items.mainNav.map((item) => (
              <li key={item.href}>
                <OutsideClickHandler onOutsideClick={() => handleToggleMenu()}>
                  <LinkMenu href={item.href} title={item.title} />
                </OutsideClickHandler>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
