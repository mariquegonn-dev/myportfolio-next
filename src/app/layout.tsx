import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { headerData } from "@/config";
import { MainNav } from "@/components/Header/components/MainNav";
import { Container } from "@/components/Container";
import icon from "@/../../public/icon.svg";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Mariquegonn's portfolio",
  description:
    "Olá! Sou um apaixonado desenvolvedor frontend com uma sólida base em tecnologias como o React, Typescript, Next.js, Node.js e diversas bibliotecas, onde pude desenvolver sites responsivos, bonitos e objetivos. Estou ansioso por uma oportunidade que me permita demonstrar minhas habilidades; Posso garantir que entregarei o meu melhor, com muita dedicação e empenho!",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={barlow.className}>
        <Container>
          <Header>
            <MainNav items={headerData} />
          </Header>
        </Container>
        {children}
      </body>
    </html>
  );
}
