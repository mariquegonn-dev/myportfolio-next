import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HeroButton } from "@/components/Hero/components/HeroButton/HeroButton";
import { Main } from "@/components/Main";
import { IconsLangConfig } from "@/config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-[2000px] hidden lg:block">
        <Image
          width={50}
          height={460}
          src="/assets/details/detailLeft.png"
          alt="background Left"
        />
      </div>
      <Hero>
        <HeroButton />
      </Hero>
      <Container>
        <Main icons={IconsLangConfig} />
      </Container>
    </>
  );
}
