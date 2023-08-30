import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HeroButton } from "@/components/Hero/components/HeroButton/HeroButton";
import { Main } from "@/components/Main";
import { IconsLangConfig } from "@/config";

export default function Home() {
  return (
    <>
      <Hero>
        <HeroButton />
      </Hero>
      <Container>
        <Main icons={IconsLangConfig} />
      </Container>
    </>
  );
}
