import { IoClose } from "react-icons/io5";
import MovieDBLogo from "./MovieDBLogo";
import { navLinks } from "./Navbar";
import Link from "next/link";

interface Props {
  openNav: boolean;
  onClose: () => void;
}

export default function MobileNav({ openNav, onClose }: Props) {
  const navClassName = `block lg:hidden fixed top-0 pt-4 z-10 text-xl font-medium px-4 w-[280px] text-white bg-navy py-2 h-full overflow-auto transition-transform ${
    openNav ? "-translate-x-4" : "-translate-x-[100dvw]"
  }`;
  return (
    <nav className={navClassName}>
      <span className="flex items-center justify-between">
        <IoClose className="text-4xl" onClick={onClose} />
        <MovieDBLogo />
      </span>
      <div className="grid mt-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            aria-label={link.label}
            onClick={onClose}
            className="text-gray-300 hover:bg-aqua hover:text-white px-3 py-2 rounded-md font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
