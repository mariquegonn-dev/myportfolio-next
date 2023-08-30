import Image from "next/image";
import Link from "next/link";

export const MainLogo = () => {
  return (
    <>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/mariquegonn-dev"
        className="flex items-center gap-2.5"
      >
        <Image
          className="max-w-full rounded-full object-fill"
          src="/assets/images/perfil.png"
          width={48}
          height={48}
          alt="imagem de perfil"
        />
        <div>
          <h2>Henrique Goncalves</h2>
          <p className="text-sm text-graySec">Desenvolvedor Frontend</p>
        </div>
      </Link>
    </>
  );
};
