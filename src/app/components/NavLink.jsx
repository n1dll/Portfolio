import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
