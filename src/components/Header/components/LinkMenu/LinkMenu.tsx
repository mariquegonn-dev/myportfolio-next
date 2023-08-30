import Link from "next/link";

type LinkProps = {
  href: string;
  title: string;
  target?: boolean;
};

export const LinkMenu = ({ href, title, target }: LinkProps) => {
  return (
    <>
      <Link
        target={target ? "" : "_blank"}
        className="inline-block py-4 transition-all ease-in-out hover:text-purplePrimary"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
