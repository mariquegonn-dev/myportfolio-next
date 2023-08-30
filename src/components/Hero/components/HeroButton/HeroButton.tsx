"use client";

import Image from "next/image";
import { useRef } from "react";

export const HeroButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  function scrollWithRef() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      onClick={scrollWithRef}
      className="z-10 mx-auto max-w-max animate-bounce cursor-pointer p-4"
      ref={ref}
    >
      <Image
        src="/assets/svg/down.svg"
        width={48}
        height={48}
        alt="down button"
      />
    </div>
  );
};
