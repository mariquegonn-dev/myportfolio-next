"use client";

import { OpenMenu, CloseMenu } from "@/components/Icons/Icons";

type MenuMobileProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const MenuMobile = ({
  isOpenMenu,
  handleToggleMenu,
}: MenuMobileProps) => {
  const title = isOpenMenu ? "Fechar" : "Abrir";

  return (
    <>
      <button onClick={handleToggleMenu} title={title}>
        {isOpenMenu && <CloseMenu size={32} />}
        {!isOpenMenu && <OpenMenu size={32} />}
      </button>
    </>
  );
};
