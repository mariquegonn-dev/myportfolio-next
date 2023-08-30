import Link from "next/link";

type LinkProps = {
  href: string;
  title: string;
};

export const LinkMenu = ({ href, title }: LinkProps) => {
  return (
    <>
      <Link
        target="_blank"
        className="inline-block py-4 transition-all ease-in-out hover:text-purplePrimary"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
